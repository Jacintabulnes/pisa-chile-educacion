
# Análisis de las visualizaciones

## Lectura en Chile: cuando las brechas se achican, pero no todos avanzan

**Integrantes:** Jacinta Bulnes y Sofía Martínez.

## 1. Proceso de creación

En las entregas anteriores, nuestras visualizaciones se concentraban principalmente en mostrar la evolución histórica de las brechas de género y nivel socioeconómico en comprensión lectora.

A partir de la retroalimentación de la profesora, entendimos que necesitábamos profundizar en el análisis de las bases de datos y encontrar historias que no fueran visibles únicamente a partir de los resultados generales.

Para esta entrega realizamos nuevos cálculos en Google Colab, cruzamos variables e incorporamos bases de datos de comportamiento lector que nos permitieron ampliar la investigación.

El objetivo fue que cada visualización aportara información nueva al reportaje, evitando repetir la misma conclusión en distintos formatos.

## 2. Procesamiento de los datos

Trabajamos con tres bases principales:

- `pisa_chile_lectura_2012_2022.csv`
- `enpccl_2024_lectura.csv`
- `lectura_ocio_2014_2024.csv`

Utilizamos Python y Pandas para organizar las variables, agrupar registros, calcular diferencias, obtener porcentajes ponderados y construir tablas comparativas.

Posteriormente, exportamos los resultados en formato CSV para incorporarlos a la webstory mediante JavaScript y Vega-Lite.

La base de PISA contiene estimaciones previamente procesadas. A partir de ellas realizamos nuestros propios cálculos comparativos.

En las bases de comportamiento lector trabajamos con registros individuales y utilizamos los factores de expansión correspondientes para obtener los resultados.

## 3. Visualización 01: evolución de la brecha socioeconómica

### Título

Una aparente buena noticia.

### Base de datos

PISA Chile, 2012–2022.

### Archivo utilizado

`tabla_puntajes.csv`

### Variables

- Año de aplicación de PISA.
- Sexo.
- Quintil socioeconómico.
- Puntaje promedio en comprensión lectora.

### Procesamiento

Calculamos la diferencia entre el puntaje promedio del quintil socioeconómico más alto (Q5) y el más bajo (Q1), separando los resultados de hombres y mujeres.

Repetimos esta operación para las cuatro mediciones disponibles: 2012, 2015, 2018 y 2022.

La operación utilizada fue:

Brecha socioeconómica = puntaje Q5 - puntaje Q1.

### Resultados

| Año | Hombres | Mujeres |
|---|---:|---:|
| 2012 | 108,22 | 99,43 |
| 2015 | 98,60 | 97,37 |
| 2018 | 99,11 | 97,61 |
| 2022 | 81,94 | 83,61 |

Los resultados muestran que entre 2018 y 2022 disminuyó la distancia entre los quintiles extremos tanto en hombres como en mujeres.

### Decisión gráfica

Elegimos un gráfico de líneas porque permite observar la evolución de las diferencias a lo largo del tiempo.

Utilizamos dos líneas para distinguir los resultados según sexo y facilitar su comparación.

La visualización permite consultar los valores mediante el cursor.

### Función narrativa

Este gráfico presenta el conflicto inicial del reportaje. Buscamos que el lector observe primero la disminución de las diferencias antes de conocer qué ocurrió con los puntajes de cada grupo.

Es importante aclarar que esta visualización muestra la brecha socioeconómica dentro de cada sexo, no la brecha nacional entre hombres y mujeres.

## 4. Visualización 02: exploración del rendimiento lector

### Título

Lo que esconden las cifras.

### Base de datos

PISA Chile, 2012–2022.

### Archivo utilizado

`tabla_puntajes.csv`

### Variables

- Año.
- Sexo.
- Quintil socioeconómico.
- Puntaje promedio en lectura.

### Procesamiento

Organizamos los resultados por año, sexo y quintil socioeconómico para comparar las trayectorias de los diferentes grupos.

A diferencia de la visualización anterior, en este caso presentamos los puntajes de cada grupo y no solamente la distancia que los separa.

### Decisión gráfica

Utilizamos gráficos de líneas con controles interactivos.

El lector puede cambiar la perspectiva desde la cual observa los datos, explorando las diferencias por género o nivel socioeconómico.

Esta interacción permite incorporar distintas comparaciones dentro de un mismo espacio, evitando presentar una gran cantidad de gráficos similares.

### Hallazgo

La disminución de las diferencias entre grupos no responde a una trayectoria común.

Mientras algunos grupos presentan aumentos o estabilidad en sus puntajes, otros experimentan retrocesos.

### Función narrativa

La visualización permite que el lector explore el conflicto inicial y comprenda por qué una brecha más pequeña no siempre significa que todos los grupos estén mejorando.

También funciona como transición hacia las dos subhistorias principales del reportaje.

## 5. Visualización 03: el caso del tercer quintil

### Título

El grupo que rompió la tendencia.

### Base de datos

PISA Chile, 2012–2022.

### Archivo utilizado

`tabla_puntajes.csv`

### Variables

- Año.
- Sexo.
- Tercer quintil socioeconómico.
- Puntaje promedio en comprensión lectora.

### Procesamiento

Seleccionamos los resultados correspondientes al tercer quintil socioeconómico y comparamos los puntajes de hombres y mujeres.

Calculamos las variaciones entre 2018 y 2022, además de la diferencia entre ambos grupos.

### Resultados

| Año | Hombres | Mujeres |
|---|---:|---:|
| 2012 | 425,04 | 452,10 |
| 2015 | 455,36 | 465,78 |
| 2018 | 438,76 | 461,37 |
| 2022 | 448,84 | 445,70 |

Entre 2018 y 2022:

- Los hombres aumentaron aproximadamente 10,08 puntos.
- Las mujeres disminuyeron aproximadamente 15,66 puntos.
- La ventaja femenina de 22,61 puntos observada en 2018 desapareció en las estimaciones de 2022.

### Decisión gráfica

Elegimos un gráfico de líneas que permite observar el cambio en las trayectorias de ambos grupos.

Complementamos la visualización con dos cifras destacadas que sintetizan las variaciones entre las últimas mediciones.

### Función narrativa

Esta es una de las principales microhistorias que encontramos al cruzar género y nivel socioeconómico.

En lugar de repetir que las mujeres obtienen mejores resultados a nivel nacional, mostramos un caso específico en el que este patrón cambia.

### Limitación

La diferencia observada en 2022 no permite afirmar que los hombres hayan alcanzado un rendimiento estadísticamente superior al de las mujeres.

Las comparaciones realizadas son descriptivas.

## 6. Visualización 04: evolución de los hábitos lectores

### Título

Una generación, distintas formas de leer.

### Bases de datos

- Encuesta de Comportamiento Lector 2014.
- Encuesta Nacional de Participación Cultural y Comportamiento Lector 2024.

### Archivo utilizado

`tabla_distribucion_ocio_jovenes.csv`

### Variables

- Año de la encuesta.
- Sexo.
- Edad.
- Cantidad de libros leídos por ocio.
- Factor de expansión.

### Procesamiento

Seleccionamos a los jóvenes de entre 15 y 19 años que declararon haber leído libros por ocio durante los últimos doce meses y reportaron una cantidad positiva y válida.

Agrupamos la cantidad de libros leídos en cinco categorías:

- 1 a 2 libros.
- 3 a 5 libros.
- 6 a 10 libros.
- 11 a 20 libros.
- 21 libros o más.

Calculamos el porcentaje ponderado de jóvenes lectores pertenecientes a cada categoría, diferenciando los resultados por sexo y año.

### Resultados en mujeres jóvenes lectoras

| Cantidad de libros | 2014 | 2024 |
|---|---:|---:|
| 1 a 2 | 27,63% | 35,70% |
| 3 a 5 | 39,75% | 32,01% |
| 6 a 10 | 26,63% | 15,35% |
| 11 a 20 | 2,27% | 9,95% |
| 21 o más | 3,72% | 6,98% |

La proporción de jóvenes lectoras que declaró leer once libros o más aumentó de 5,99% a 16,93%.

Al mismo tiempo, aumentó la proporción que declaró leer solamente uno o dos libros.

### Decisión gráfica

Elegimos un gráfico de barras apiladas al 100%, porque permite observar cómo se distribuyen los lectores entre las diferentes categorías.

Incorporamos un selector de sexo para que el usuario pueda comparar los resultados de hombres y mujeres.

Inicialmente consideramos utilizar los promedios de libros leídos. Sin embargo, al revisar la distribución y los valores extremos, observamos que los promedios podían ocultar diferencias importantes.

Por esta razón, decidimos privilegiar la distribución de los datos.

### Función narrativa

Esta visualización amplía la subhistoria de género incorporando una dimensión distinta al rendimiento escolar.

El hallazgo muestra que las mujeres jóvenes no constituyen un grupo homogéneo en sus prácticas lectoras.

### Limitaciones

Los resultados corresponden a jóvenes lectores que cumplen los criterios de selección, no a todos los jóvenes chilenos.

Las encuestas presentan diferencias metodológicas y no siguen a las mismas personas durante el período estudiado.

Tampoco podemos establecer una relación causal entre estos hábitos y los resultados de PISA.

## 7. Visualización 05: variaciones del rendimiento socioeconómico

### Título

Cuando las ventajas no son suficientes.

### Base de datos

PISA Chile, 2012–2022.

### Archivo utilizado

`tabla_puntajes.csv`

### Variables

- Año.
- Sexo.
- Quintil socioeconómico.
- Puntaje promedio en comprensión lectora.

### Procesamiento

Calculamos las diferencias de puntaje entre 2015 y 2018, y entre 2018 y 2022.

La operación utilizada fue:

Variación = puntaje del año final - puntaje del año inicial.

Esto nos permitió identificar qué grupos aumentaron o disminuyeron sus puntajes y comparar la magnitud de los cambios.

### Resultados entre 2018 y 2022

| Quintil | Hombres | Mujeres |
|---|---:|---:|
| Q1 | +5,35 | -1,64 |
| Q2 | +7,10 | -11,83 |
| Q3 | +10,08 | -15,66 |
| Q4 | +2,33 | -1,28 |
| Q5 | -11,82 | -15,65 |

Los resultados muestran que los retrocesos no se concentran exclusivamente en los sectores socioeconómicos más bajos.

En el quintil más alto, tanto hombres como mujeres experimentaron disminuciones en sus puntajes estimados.

### Decisión gráfica

Utilizamos una visualización de barras para representar las variaciones positivas y negativas.

La referencia del cero permite distinguir rápidamente los aumentos de los retrocesos.

### Función narrativa

Esta visualización responde a una de las preguntas planteadas durante la retroalimentación: qué ocurrió con los sectores que históricamente obtenían mejores resultados.

En lugar de centrarnos nuevamente en la magnitud de la brecha, observamos las trayectorias de los grupos que la componen.

### Limitación

Los cambios corresponden a diferencias observadas entre estimaciones.

No contamos con todos los componentes de incertidumbre necesarios para establecer significancia estadística entre ciclos de PISA.

## 8. Visualización 06: dificultades lectoras según nivel socioeconómico

### Título

Leer no supone el mismo esfuerzo para todos.

### Base de datos

Encuesta Nacional de Participación Cultural y Comportamiento Lector 2024.

### Archivo utilizado

`tabla_percepcion_nse.csv`

### Variables

- Nivel socioeconómico.
- Dificultades de comprensión.
- Dificultades de concentración.
- Dificultades relacionadas con el ritmo de lectura.
- Falta de paciencia.
- Factor de expansión.

### Procesamiento

Agrupamos los registros según nivel socioeconómico y calculamos porcentajes ponderados de personas que declararon experimentar cada dificultad lectora.

Para la visualización seleccionamos los niveles socioeconómicos alto y bajo, con el objetivo de facilitar la comparación.

### Resultados

| Dificultad | Nivel alto | Nivel bajo |
|---|---:|---:|
| Comprensión | 6,43% | 17,04% |
| Concentración | 10,08% | 21,78% |
| Ritmo de lectura | 5,23% | 15,52% |
| Falta de paciencia | 15,84% | 24,45% |

En todas las dificultades seleccionadas, los porcentajes observados son mayores en el nivel socioeconómico bajo.

### Decisión gráfica

Utilizamos barras comparativas porque permiten observar las diferencias entre los dos grupos para cada dificultad.

La comparación directa facilita identificar cuáles presentan mayores distancias.

### Función narrativa

Este gráfico complementa la subhistoria socioeconómica.

Aunque los sectores más favorecidos también presentan retrocesos en PISA, las dificultades lectoras declaradas siguen mostrando diferencias asociadas al contexto social.

### Limitación

Los resultados corresponden a percepciones declaradas por los encuestados, no a mediciones objetivas de sus competencias lectoras.

## 9. Visualización 07: pictograma de estudiantes bajo el nivel 2

### Título

Uno de cada dos.

### Base de datos

PISA Chile 2022.

### Archivo utilizado

`tabla_nivel2.csv`

### Variables

- Año.
- Sexo.
- Quintil socioeconómico.
- Porcentaje de estudiantes bajo el nivel 2.

### Procesamiento

Seleccionamos el porcentaje correspondiente a los hombres del primer quintil socioeconómico en 2022.

El resultado fue de aproximadamente 49,80%.

Redondeamos esta cifra a 50% para representarla mediante un pictograma de cien figuras.

### Decisión gráfica

Elegimos un pictograma porque permite transformar un porcentaje en una representación visual fácil de comprender.

Cada figura representa aproximadamente un punto porcentual del grupo estudiado.

### Función narrativa

Buscamos que el lector comprenda la dimensión del problema más allá de los puntajes promedio.

La visualización está acompañada de una explicación sobre el nivel 2 de PISA y las competencias básicas de comprensión lectora.

### Limitación

El pictograma representa específicamente a los hombres del quintil socioeconómico más bajo.

No corresponde al porcentaje total de estudiantes chilenos.

## 10. Visualización 08: estudiantes bajo el nivel 2 en el quintil más alto

### Base de datos

PISA Chile, 2018 y 2022.

### Archivo utilizado

`tabla_nivel2.csv`

### Variables

- Año.
- Sexo.
- Quinto quintil socioeconómico.
- Porcentaje de estudiantes bajo el nivel 2.

### Procesamiento

Seleccionamos los resultados del quintil socioeconómico más alto y comparamos los porcentajes de estudiantes bajo el nivel 2 entre 2018 y 2022.

### Resultados

| Sexo | 2018 | 2022 | Variación |
|---|---:|---:|---:|
| Hombres | 14,96% | 20,28% | +5,33 puntos porcentuales |
| Mujeres | 9,41% | 14,20% | +4,79 puntos porcentuales |

En ambos grupos aumentó la proporción estimada de estudiantes que se encuentra por debajo del nivel básico de competencia lectora.

### Decisión gráfica

Utilizamos una visualización de barras comparativas para facilitar la lectura de los cambios entre ambas mediciones.

### Función narrativa

Este gráfico permite profundizar en el deterioro observado en los sectores más favorecidos.

No solamente disminuyeron sus puntajes promedio, sino que también aumentó la proporción estimada de estudiantes bajo el nivel 2.

Con este hallazgo cerramos el análisis de los resultados escolares antes de presentar la conclusión general del reportaje.

## 11. Recursos gráficos complementarios

Además de las visualizaciones de datos, incorporamos recursos explicativos que ayudan al lector a comprender conceptos técnicos.

### Representación de los quintiles

Utilizamos cinco bloques de igual tamaño para explicar la división de la población estudiantil según su contexto socioeconómico.

Cada bloque representa aproximadamente un 20% de la población estudiantil con información socioeconómica disponible.

### Niveles de comprensión lectora

Incorporamos una representación simplificada de los niveles de PISA, destacando el nivel 2 como umbral básico de competencia.

Este recurso permite comprender qué significa encontrarse por debajo de dicho nivel.

### Cifras destacadas

Utilizamos números de mayor tamaño para comunicar resultados especialmente relevantes, como las variaciones de puntaje en el tercer quintil.

Estos elementos complementan las visualizaciones y facilitan la lectura del reportaje.

## 12. Identidad visual de los gráficos

Las visualizaciones mantienen una relación con el manual de identidad desarrollado en la entrega anterior.

Utilizamos principalmente los siguientes colores:

- Beige arena: `#E5CEB1`
- Rojo cereza: `#C81F32`
- Marfil: `#FDFDF2`
- Coral: `#F07872`
- Burdeos: `#702C36`

Buscamos mantener una estética coherente con el resto del reportaje, utilizando fondos claros, títulos legibles y colores que permitan distinguir categorías.

La selección de colores responde tanto a criterios de identidad visual como a la necesidad de facilitar la comparación de los datos.

## 13. Interactividad

La interactividad cumple distintas funciones dentro de la webstory.

En algunos gráficos permite consultar valores específicos mediante el cursor. En otros, permite seleccionar variables o grupos para explorar los resultados desde diferentes perspectivas.

Decidimos concentrar las interacciones más importantes en aquellas visualizaciones donde existen múltiples posibilidades de comparación.

No buscamos incorporar interactividad únicamente como un recurso decorativo, sino utilizarla cuando aporta a la comprensión de la información.

## 14. Pruebas y correcciones

Durante la implementación realizamos pruebas locales mediante un servidor HTTP de Python.

Comprobamos la carga de los archivos CSV y la integración de las visualizaciones con el HTML.

Uno de los problemas detectados fue la falta de espacio en el gráfico de hábitos lectores, lo que provocaba dificultades en la lectura del título y las barras.

Para solucionarlo modificamos la altura, los márgenes y la configuración de tamaño de la visualización.

Estos cambios no alteraron los datos ni los resultados del análisis.

## 15. Reproducibilidad

Los archivos CSV utilizados en las visualizaciones se encuentran dentro de las carpetas de datos del proyecto.

Los procedimientos de análisis fueron desarrollados en Google Colab y la implementación de las visualizaciones se encuentra en el archivo `docs/script.js`.

La separación entre los datos, el análisis y la implementación web permite revisar las distintas etapas del proceso.

### Código de las visualizaciones

[Ver archivo JavaScript](../../docs/script.js)

### Bases de datos

[Ver carpeta de bases de datos](base_datos/)

### Datos utilizados por la webstory

[Ver archivos CSV](../../docs/datos/resultados_webstory_definitivo/)

### Repositorio general

https://github.com/Jacintabulnes/pisa-chile-educacion

## 16. Reflexión final

El principal cambio respecto de nuestras entregas anteriores fue pasar de representar tendencias generales a buscar hallazgos específicos dentro de las bases de datos.

El cruce entre género y nivel socioeconómico permitió identificar grupos cuyas trayectorias no coinciden con los resultados generales.

Por otra parte, la incorporación de encuestas de comportamiento lector permitió ampliar la investigación hacia dimensiones que PISA no mide directamente.

Cada visualización cumple una función dentro del reportaje y aporta evidencia para comprender la desigualdad lectora desde distintas perspectivas.

Más que presentar una sucesión de gráficos, buscamos construir una historia en la que cada visualización permita responder una nueva pregunta.
