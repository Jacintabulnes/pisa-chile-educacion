
/* =========================================
   LECTURA EN CHILE
   Visualizaciones interactivas
   Jacinta Bulnes y Sofía Martínez
   ========================================= */

const RUTA = "datos/resultados_webstory_definitivo/";

const COLORES = {
    rojo: "#C81F32",
    burdeos: "#702C36",
    beige: "#E5CEB1",
    coral: "#F07872",
    gris: "#77716B"
};

const ANIOS = ["2012", "2015", "2018", "2022"];

const SEXOS = ["Mujer", "Hombre"];

const QUINTILES = ["Q1", "Q2", "Q3", "Q4", "Q5"];

const CONFIG = {
    background: "transparent",
    font: "Arial",
    view: {
        stroke: null
    },
    axis: {
        labelFontSize: 12,
        titleFontSize: 13,
        labelColor: "#49433F",
        titleColor: "#49433F",
        gridColor: "#E9E3DD",
        domainColor: "#C8BDB3"
    },
    legend: {
        labelFontSize: 12,
        titleFontSize: 12,
        orient: "bottom"
    },
    title: {
        fontSize: 18,
        font: "Georgia",
        color: "#702C36",
        anchor: "start",
        subtitleFontSize: 12,
        subtitleColor: "#6C6560",
        offset: 20
    }
};

/* CARGAR ARCHIVOS CSV */

async function cargarCSV(archivo) {
    const respuesta = await fetch(RUTA + archivo);

    if (!respuesta.ok) {
        throw new Error("No se pudo cargar: " + archivo);
    }

    const texto = await respuesta.text();

    return vega.read(
        texto.replace(/^\uFEFF/, ""),
        { type: "csv", parse: "auto" }
    );
}

/* MOSTRAR GRÁFICOS */

async function mostrarGrafico(id, especificacion) {

    const elemento = document.getElementById(id);

    if (!elemento) return;

    try {
        await vegaEmbed(
            elemento,
            {
                $schema: "https://vega.github.io/schema/vega-lite/v5.json",
                width: "container",
                height: 310,
                autosize: {
                    type: "fit",
                    contains: "padding"
                },
                ...especificacion,
                config: CONFIG
            },
            {
                actions: false,
                renderer: "svg"
            }
        );

    } catch (error) {
        elemento.textContent = "No se pudo mostrar esta visualización.";
        console.error(error);
    }
}

/* CONVERTIR TABLAS A FORMATO LARGO */

function formatoLargo(tabla) {

    return tabla
        .filter(fila => QUINTILES.includes(fila.quintil_escs_chile))
        .flatMap(fila =>
            ANIOS.map(anio => ({
                anio: anio,
                sexo: fila.sexo,
                quintil: fila.quintil_escs_chile,
                valor: Number(fila[anio])
            }))
        );
}

function obtenerValor(datos, anio, sexo, quintil) {

    return datos.find(d =>
        d.anio === anio &&
        d.sexo === sexo &&
        d.quintil === quintil
    )?.valor;
}

/* GRÁFICO 1
   EVOLUCIÓN DE LAS BRECHAS */

async function graficoBrechas(datos) {

    const valores = [];

    ANIOS.forEach(anio => {

        SEXOS.forEach(sexo => {

            valores.push({
                anio: anio,
                grupo: "Q5 − Q1: " + sexo,
                brecha:
                    obtenerValor(datos, anio, sexo, "Q5") -
                    obtenerValor(datos, anio, sexo, "Q1")
            });

        });

    });

    await mostrarGrafico("grafico-brechas", {

        title: {
            text: "La distancia entre los extremos se reduce",
            subtitle: "Diferencia de puntaje entre Q5 y Q1, según sexo"
        },

        data: { values: valores },

        mark: {
            type: "line",
            point: {
                filled: true,
                size: 90
            },
            strokeWidth: 3
        },

        encoding: {

            x: {
                field: "anio",
                type: "ordinal",
                title: "Año PISA"
            },

            y: {
                field: "brecha",
                type: "quantitative",
                title: "Diferencia en puntos",
                scale: { zero: true }
            },

            color: {
                field: "grupo",
                type: "nominal",
                title: null,
                scale: {
                    range: [COLORES.burdeos, COLORES.rojo]
                }
            },

            tooltip: [
                { field: "anio", title: "Año" },
                { field: "grupo", title: "Grupo" },
                {
                    field: "brecha",
                    title: "Diferencia en puntos",
                    format: ".1f"
                }
            ]
        }
    });
}

/* GRÁFICO 2
   EXPLORACIÓN INTERACTIVA */

async function graficoZoom(datos, vista) {

    let valores;
    let titulo;

    if (vista === "genero") {

        valores = datos.map(d => ({
            ...d,
            grupo: d.sexo
        }));

        titulo = "Rendimiento lector por sexo";

    } else {

        valores = datos
            .filter(d => ["Q1", "Q5"].includes(d.quintil))
            .map(d => ({
                ...d,
                grupo: d.quintil
            }));

        titulo = "Rendimiento de los quintiles extremos";
    }

    const esGenero = vista === "genero";

    const campoFiltro = esGenero ? "quintil" : "sexo";

    const opciones = esGenero ? QUINTILES : SEXOS;

    await mostrarGrafico("grafico-zoom", {

        title: {
            text: titulo,
            subtitle: "Selecciona un grupo para explorar su trayectoria"
        },

        data: { values: valores },

        params: [
            {
                name: "grupoElegido",
                value: esGenero ? "Q3" : "Mujer",
                bind: {
                    input: "select",
                    options: opciones,
                    name: esGenero ? "Quintil: " : "Sexo: "
                }
            }
        ],

        transform: [
            {
                filter:
                    "datum." + campoFiltro + " === grupoElegido"
            }
        ],

        mark: {
            type: "line",
            point: { filled: true, size: 100 },
            strokeWidth: 3
        },

        encoding: {

            x: {
                field: "anio",
                type: "ordinal",
                title: "Año PISA"
            },

            y: {
                field: "valor",
                type: "quantitative",
                title: "Puntaje de lectura",
                scale: {
                    domain: [350, 550],
                    zero: false
                }
            },

            color: {
                field: "grupo",
                type: "nominal",
                title: null,
                scale: {
                    domain: esGenero
                        ? ["Mujer", "Hombre"]
                        : ["Q1", "Q5"],
                    range: [
                        COLORES.rojo,
                        COLORES.burdeos
                    ]
                }
            },

            tooltip: [
                { field: "anio", title: "Año" },
                { field: "sexo", title: "Sexo" },
                { field: "quintil", title: "Quintil" },
                {
                    field: "valor",
                    title: "Puntaje",
                    format: ".1f"
                }
            ]
        }
    });
}

/* GRÁFICO 3
   EL TERCER QUINTIL */

async function graficoQuintilTres(datos) {

    await mostrarGrafico("grafico-quintil-tres", {

        title: {
            text: "Dos trayectorias que se cruzan",
            subtitle: "Puntajes de lectura en el tercer quintil"
        },

        data: {
            values: datos.filter(d => d.quintil === "Q3")
        },

        layer: [

            {
                mark: {
                    type: "line",
                    strokeWidth: 3,
                    point: {
                        filled: true,
                        size: 100
                    }
                }
            },

            {
                mark: {
                    type: "text",
                    dy: -14,
                    fontSize: 12
                },

                encoding: {
                    text: {
                        field: "valor",
                        type: "quantitative",
                        format: ".0f"
                    }
                }
            }
        ],

        encoding: {

            x: {
                field: "anio",
                type: "ordinal",
                title: "Año PISA"
            },

            y: {
                field: "valor",
                type: "quantitative",
                title: "Puntaje de lectura",
                scale: {
                    domain: [410, 485],
                    zero: false
                }
            },

            color: {
                field: "sexo",
                type: "nominal",
                title: null,
                scale: {
                    domain: ["Mujer", "Hombre"],
                    range: [COLORES.rojo, COLORES.burdeos]
                }
            },

            tooltip: [
                { field: "anio", title: "Año" },
                { field: "sexo", title: "Sexo" },
                {
                    field: "valor",
                    title: "Puntaje",
                    format: ".1f"
                }
            ]
        }
    });
}

/* GRÁFICO 4
   DISTRIBUCIÓN DE HÁBITOS LECTORES */

async function graficoHabitos(tabla) {

    const valores = [];

    tabla.forEach((fila, indice) => {

        ["2014", "2024"].forEach(anio => {

            ["hombre", "mujer"].forEach(sexo => {

                valores.push({
                    anio: anio,
                    sexo: sexo === "mujer" ? "Mujer" : "Hombre",
                    tramo: fila.tramo_libros_ocio,
                    orden: indice,
                    porcentaje: Number(fila[anio + "_" + sexo])
                });

            });

        });

    });

    await mostrarGrafico("grafico-habitos", {

        title: {
            text: "Una década de cambios lectores",
            subtitle: "Distribución de jóvenes lectores de 15 a 19 años"
        },

        height: 300,
padding: 20,
autosize: { type: "fit-x", contains: "padding" },

        data: { values: valores },

        params: [
            {
                name: "sexoHabitos",
                value: "Mujer",
                bind: {
                    input: "select",
                    options: ["Mujer", "Hombre"],
                    name: "Explorar por sexo: "
                }
            }
        ],

        transform: [
            {
                filter: "datum.sexo === sexoHabitos"
            }
        ],

        mark: {
            type: "bar",
            size: 48
        },

        encoding: {

            y: {
                field: "anio",
                type: "ordinal",
                title: null
            },

            x: {
                field: "porcentaje",
                type: "quantitative",
                stack: "zero",
                title: "Porcentaje de jóvenes lectores",
                scale: { domain: [0, 100] },
                axis: { labelExpr: "datum.value + '%'" }
            },

            color: {
                field: "tramo",
                type: "nominal",
                title: "Libros leídos por ocio",
                sort: { field: "orden", order: "ascending" },
                scale: {
                    range: [
                        "#E5CEB1",
                        "#DDB29C",
                        "#F07872",
                        "#C81F32",
                        "#702C36"
                    ]
                }
            },

            order: {
                field: "orden",
                type: "quantitative"
            },

            tooltip: [
                { field: "anio", title: "Año" },
                { field: "sexo", title: "Sexo" },
                { field: "tramo", title: "Libros leídos" },
                {
                    field: "porcentaje",
                    title: "Porcentaje",
                    format: ".1f"
                }
            ]
        }
    });
}

/* GRÁFICO 5
   VARIACIONES DE RENDIMIENTO */

async function graficoVariaciones(datos) {

    const valores = [];

    QUINTILES.forEach(quintil => {

        SEXOS.forEach(sexo => {

            [
                ["2015", "2018"],
                ["2018", "2022"]
            ].forEach(periodo => {

                const inicio = obtenerValor(
                    datos, periodo[0], sexo, quintil
                );

                const fin = obtenerValor(
                    datos, periodo[1], sexo, quintil
                );

                valores.push({
                    quintil: quintil,
                    sexo: sexo,
                    periodo: periodo.join("–"),
                    cambio: fin - inicio
                });

            });

        });

    });

    await mostrarGrafico("grafico-variaciones", {

        title: {
            text: "El retroceso no se distribuye por igual",
            subtitle: "Variación del puntaje lector según quintil"
        },

        data: { values: valores },

        params: [
            {
                name: "sexoVariacion",
                value: "Mujer",
                bind: {
                    input: "select",
                    options: ["Mujer", "Hombre"],
                    name: "Seleccionar sexo: "
                }
            }
        ],

        transform: [
            {
                filter: "datum.sexo === sexoVariacion"
            }
        ],

        layer: [

            {
                mark: "bar",

                encoding: {

                    x: {
                        field: "quintil",
                        type: "ordinal",
                        title: "Quintil socioeconómico"
                    },

                    xOffset: {
                        field: "periodo"
                    },

                    y: {
                        field: "cambio",
                        type: "quantitative",
                        title: "Variación en puntos",
                        scale: { domain: [-25, 25] }
                    },

                    color: {
                        field: "periodo",
                        type: "nominal",
                        title: null,
                        scale: {
                            range: [
                                COLORES.beige,
                                COLORES.burdeos
                            ]
                        }
                    },

                    tooltip: [
                        { field: "quintil", title: "Quintil" },
                        { field: "sexo", title: "Sexo" },
                        { field: "periodo", title: "Período" },
                        {
                            field: "cambio",
                            title: "Variación en puntos",
                            format: "+.1f"
                        }
                    ]
                }
            },

            {
                mark: {
                    type: "rule",
                    color: "#49433F"
                },

                encoding: {
                    y: { datum: 0 }
                }
            }
        ]
    });
}

/* GRÁFICO 6
   DIFICULTADES LECTORAS */

async function graficoDificultades(tabla) {

    const indicadores = [
        ["Dificultad de comprension", "Comprensión"],
        ["Dificultad de concentracion", "Concentración"],
        ["Dificultad de ritmo", "Ritmo de lectura"],
        ["Falta de paciencia", "Paciencia"]
    ];

    const valores = tabla
        .filter(fila =>
            ["Alto", "Bajo"].includes(fila.nivel_socioeconomico)
        )
        .flatMap(fila =>
            indicadores.map(indicador => ({
                nivel: fila.nivel_socioeconomico,
                dificultad: indicador[1],
                porcentaje: Number(fila[indicador[0]])
            }))
        );

    await mostrarGrafico("grafico-dificultades", {

        title: {
            text: "Las dificultades también son desiguales",
            subtitle: "Porcentaje que declara cada dificultad lectora, 2024"
        },

        data: { values: valores },

        mark: {
            type: "bar",
            cornerRadiusEnd: 3
        },

        encoding: {

            y: {
                field: "dificultad",
                type: "nominal",
                title: null,
                sort: [
                    "Comprensión",
                    "Concentración",
                    "Ritmo de lectura",
                    "Paciencia"
                ]
            },

            yOffset: {
                field: "nivel"
            },

            x: {
                field: "porcentaje",
                type: "quantitative",
                title: "Porcentaje",
                scale: { zero: true },
                axis: { labelExpr: "datum.value + '%'" }
            },

            color: {
                field: "nivel",
                type: "nominal",
                title: "Nivel socioeconómico",
                scale: {
                    domain: ["Alto", "Bajo"],
                    range: [COLORES.beige, COLORES.burdeos]
                }
            },

            tooltip: [
                { field: "dificultad", title: "Dificultad" },
                { field: "nivel", title: "Nivel socioeconómico" },
                {
                    field: "porcentaje",
                    title: "Porcentaje",
                    format: ".1f"
                }
            ]
        }
    });
}

/* GRÁFICO 7
   PICTOGRAMA BAJO NIVEL 2 */

function crearPictograma(datos) {

    const contenedor = document.getElementById(
        "pictogramas-nivel-dos"
    );

    if (!contenedor) return;

    const porcentaje = obtenerValor(
        datos, "2022", "Hombre", "Q1"
    );

    const cantidad = Math.round(porcentaje);

    contenedor.innerHTML = "";

    contenedor.setAttribute("role", "img");

    contenedor.setAttribute(
        "aria-label",
        porcentaje.toFixed(1) +
        "% de los estudiantes hombres del quintil 1 bajo nivel 2"
    );

    for (let i = 0; i < 100; i++) {

        const persona = document.createElement("div");

        persona.className =
            i < cantidad ? "persona afectada" : "persona";

        persona.setAttribute("aria-hidden", "true");

        persona.innerHTML = `
            <svg viewBox="0 0 24 34" fill="currentColor">
                <circle cx="12" cy="5" r="4"/>
                <rect x="6" y="10" width="12" height="13" rx="3"/>
                <rect x="2" y="11" width="4" height="12" rx="2"/>
                <rect x="18" y="11" width="4" height="12" rx="2"/>
                <rect x="6" y="21" width="5" height="12" rx="2"/>
                <rect x="13" y="21" width="5" height="12" rx="2"/>
            </svg>
        `;

        contenedor.appendChild(persona);
    }
}

/* GRÁFICO 8
   BAJO NIVEL 2 EN EL QUINTIL MÁS ALTO */

async function graficoNivelDos(datos) {

    const valores = datos.filter(d =>
        d.quintil === "Q5" &&
        ["2018", "2022"].includes(d.anio)
    );

    await mostrarGrafico("grafico-nivel-dos", {

        title: {
            text: "El rezago aumenta también en el quintil más alto",
            subtitle: "Estudiantes bajo el nivel 2 de lectura"
        },

        data: { values: valores },

        layer: [

            {
                mark: {
                    type: "bar",
                    cornerRadiusEnd: 3
                }
            },

            {
                mark: {
                    type: "text",
                    dy: -10,
                    fontSize: 13
                },

                encoding: {
                    text: {
                        field: "valor",
                        type: "quantitative",
                        format: ".1f"
                    }
                }
            }
        ],

        encoding: {

            x: {
                field: "sexo",
                type: "nominal",
                title: null
            },

            xOffset: {
                field: "anio"
            },

            y: {
                field: "valor",
                type: "quantitative",
                title: "Porcentaje bajo nivel 2",
                scale: { domain: [0, 30] },
                axis: { labelExpr: "datum.value + '%'" }
            },

            color: {
                field: "anio",
                type: "nominal",
                title: "Año PISA",
                scale: {
                    domain: ["2018", "2022"],
                    range: [COLORES.beige, COLORES.rojo]
                }
            },

            tooltip: [
                { field: "sexo", title: "Sexo" },
                { field: "anio", title: "Año" },
                {
                    field: "valor",
                    title: "Porcentaje bajo nivel 2",
                    format: ".1f"
                }
            ]
        }
    });
}

/* INICIAR LA WEBSTORY */

async function iniciar() {

    try {

        const [
            tablaPuntajes,
            tablaNivelDos,
            tablaHabitos,
            tablaDificultades
        ] = await Promise.all([

            cargarCSV("01_PISA/tabla_puntajes.csv"),

            cargarCSV("01_PISA/tabla_nivel2.csv"),

            cargarCSV(
                "03_Evolucion_lectora_2014_2024/" +
                "tabla_distribucion_ocio_jovenes.csv"
            ),

            cargarCSV(
                "02_Habitos_lectores_2024/" +
                "tabla_percepcion_nse.csv"
            )

        ]);

        const puntajes = formatoLargo(tablaPuntajes);

        const nivelDos = formatoLargo(tablaNivelDos);

        await Promise.all([

            graficoBrechas(puntajes),

            graficoZoom(puntajes, "genero"),

            graficoQuintilTres(puntajes),

            graficoHabitos(tablaHabitos),

            graficoVariaciones(puntajes),

            graficoDificultades(tablaDificultades),

            graficoNivelDos(nivelDos)

        ]);

        crearPictograma(nivelDos);

        document.querySelectorAll(".selector").forEach(boton => {

            boton.addEventListener("click", async () => {

                document.querySelectorAll(".selector")
                    .forEach(b => {
                        b.classList.remove("activo");
                        b.setAttribute("aria-pressed", "false");
                    });

                boton.classList.add("activo");

                boton.setAttribute("aria-pressed", "true");

                await graficoZoom(
                    puntajes,
                    boton.dataset.vista
                );

            });

        });

        console.log("Visualizaciones cargadas correctamente.");

    } catch (error) {

        console.error("Error al cargar la webstory:", error);

        document.querySelectorAll(".contenedor-grafico")
            .forEach(contenedor => {

                const grafico = contenedor.querySelector(
                    "div[id]"
                );

                if (grafico) {
                    grafico.textContent =
                        "No se pudieron cargar los datos. " +
                        "Comprueba la conexión y las rutas de los CSV.";
                }

            });
    }
}

document.addEventListener("DOMContentLoaded", iniciar);
