
# Entrega 05 — Webstory Beta

# Lectura en Chile: cuando las brechas se achican, pero no todos avanzan

**Integrantes:** Jacinta Bulnes y Sofía Martínez.

**Curso:** Narración Gráfica de No Ficción (COM-208).

**Facultad de Comunicaciones — Pontificia Universidad Católica de Chile.**

## 1. Presentación del proyecto

Nuestro proyecto busca comprender cómo han cambiado las desigualdades en el rendimiento lector de los estudiantes chilenos y qué otras dimensiones del problema podemos identificar a partir de los hábitos y dificultades de lectura de la población.

El punto de partida de nuestra investigación fue la disminución de algunas brechas históricas de comprensión lectora en los resultados de PISA. Al profundizar en los datos, observamos que esta reducción no necesariamente representa una mejora general de los aprendizajes.

Decidimos investigar qué grupos han experimentado los mayores retrocesos, cómo se relacionan el género y el nivel socioeconómico con estas diferencias y qué aspectos de la experiencia lectora quedan fuera de los puntajes escolares.

Para ello, complementamos los resultados de PISA con el análisis de dos encuestas nacionales de comportamiento lector.

## 2. Webstory

**Título:** Lectura en Chile: cuando las brechas se achican, pero no todos avanzan.

**Repositorio del proyecto:**

https://github.com/Jacintabulnes/pisa-chile-educacion

**Publicación:** GitHub Pages.

La versión beta se encuentra en la carpeta `docs` del repositorio. El enlace público se incorporará una vez finalizada la publicación.

## 3. Evolución de nuestra hipótesis

### Hipótesis de la entrega anterior

La disminución de algunas brechas de comprensión lectora en Chile no necesariamente representa una mejora general del aprendizaje, ya que parte de esa reducción coincide con el retroceso de grupos que antes obtenían mejores resultados.

### Reformulación

A partir de la retroalimentación recibida en las entregas anteriores, nos dimos cuenta de que nuestra hipótesis describía una tendencia, pero todavía no permitía profundizar suficientemente en las diferencias entre los grupos estudiados.

Por esta razón, decidimos ampliar nuestra investigación y analizar de manera conjunta el género y el nivel socioeconómico, en lugar de estudiar ambas variables únicamente por separado.

### Hipótesis actual

El deterioro del rendimiento lector en Chile se ha distribuido de manera desigual entre los distintos grupos de estudiantes, modificando algunas de las brechas históricas asociadas al género y al nivel socioeconómico.

Estas diferencias pueden comprenderse mejor al complementar los resultados escolares con otras dimensiones de la lectura, como los hábitos y las dificultades lectoras declaradas por la población.

### Pregunta de investigación

¿Cómo han cambiado las desigualdades en el rendimiento lector de los estudiantes chilenos y qué otras dimensiones del problema permiten identificar las encuestas de comportamiento lector?

## 4. Cambios realizados a partir de la retroalimentación

Uno de los principales problemas de nuestras entregas anteriores era que utilizábamos información proveniente de informes y análisis ya publicados, lo que limitaba nuestra capacidad de generar hallazgos propios.

Además, las dos subhistorias tendían a repetir la misma conclusión: que la reducción de las brechas no necesariamente implicaba una mejora en los aprendizajes.

Para esta entrega decidimos:

- Ampliar y reorganizar nuestras bases de datos.
- Realizar nuevos cálculos mediante Python en Google Colab.
- Cruzar las variables de sexo y nivel socioeconómico en los resultados de PISA.
- Incorporar microdatos de encuestas nacionales de comportamiento lector.
- Identificar microhistorias que no fueran visibles únicamente a partir de los promedios generales.
- Diferenciar los objetivos narrativos de cada visualización.
- Eliminar explicaciones causales que no podíamos respaldar con nuestras bases de datos.
- Incorporar recursos interactivos que permitan al lector explorar los resultados.

La reducción de las brechas pasó a ser el conflicto inicial del reportaje, en lugar de constituir la conclusión de todas sus secciones.

## 5. Bases de datos utilizadas

### 5.1. PISA Chile, 2012–2022

Archivo:

`pisa_chile_lectura_2012_2022.csv`

Esta base contiene estimaciones previamente procesadas de los resultados de comprensión lectora de estudiantes chilenos en las mediciones de 2012, 2015, 2018 y 2022.

Las principales variables utilizadas fueron:

- Año de aplicación de PISA.
- Sexo.
- Quintil socioeconómico.
- Puntaje promedio en comprensión lectora.
- Porcentaje de estudiantes bajo el nivel 2.
- Errores estándar de las estimaciones.

A partir de esta base calculamos las diferencias de puntaje entre grupos, sus variaciones temporales y los cambios en la proporción de estudiantes que no alcanza el nivel básico de competencia lectora.

Fuente original:

https://www.oecd.org/en/about/programmes/pisa.html

### 5.2. Encuesta Nacional de Participación Cultural y Comportamiento Lector 2024

Archivo:

`enpccl_2024_lectura.csv`

Esta base contiene 12.263 registros individuales y 34 variables seleccionadas para el análisis.

Nos permitió estudiar distintas dimensiones de la experiencia lectora, entre ellas:

- Frecuencia de lectura.
- Motivaciones para leer.
- Nivel socioeconómico.
- Dificultades de comprensión.
- Dificultades de concentración.
- Ritmo de lectura.
- Falta de paciencia al leer.

Los porcentajes fueron calculados utilizando los factores de expansión correspondientes.

Fuente:

https://observatorio.cultura.gob.cl/

Base original:

https://www.cultura.gob.cl/wp-content/uploads/2025/08/enpccl_puf.dta

### 5.3. Evolución de los hábitos lectores, 2014–2024

Archivo:

`lectura_ocio_2014_2024.csv`

Esta base reúne 7.787 registros individuales provenientes de la Encuesta de Comportamiento Lector de 2014 y de la Encuesta Nacional de Participación Cultural y Comportamiento Lector de 2024.

El análisis se concentra en la cantidad de libros leídos por ocio durante los últimos doce meses, con especial atención a los jóvenes de entre 15 y 19 años.

Además de calcular promedios, estudiamos la distribución de los lectores según la cantidad de libros leídos, lo que nos permitió identificar diferencias que no eran visibles al observar únicamente las medias.

Base original de 2014:

https://plandelectura.cultura.gob.cl/wp-content/files_mf/1557520923BaseMaestraECL2014.sav

## 6. Principales hallazgos

### 6.1. La ventaja femenina no se reproduce en todos los sectores

Al cruzar las variables de sexo y nivel socioeconómico, encontramos un cambio particularmente llamativo en el tercer quintil.

Entre 2018 y 2022, el puntaje estimado de los hombres aumentó aproximadamente 10 puntos, mientras que el de las mujeres disminuyó cerca de 16 puntos.

En consecuencia, la ventaja femenina de más de 22 puntos observada en 2018 desapareció en las estimaciones de 2022.

Este resultado permite cuestionar la idea de que las diferencias de rendimiento entre hombres y mujeres se comportan de manera uniforme en todos los sectores socioeconómicos.

### 6.2. Los sectores más favorecidos también experimentan retrocesos

Al comparar las trayectorias de los distintos quintiles, observamos que los estudiantes del segmento socioeconómico más alto experimentaron retrocesos en sus puntajes entre 2018 y 2022.

Además, aumentó la proporción de estudiantes de este grupo que se encuentra bajo el nivel 2 de comprensión lectora.

Esto muestra que las dificultades de aprendizaje no son exclusivas de los sectores históricamente más desfavorecidos.

### 6.3. Los promedios esconden diferencias en los hábitos lectores

Entre las jóvenes lectoras de 15 a 19 años, la proporción que declaró leer once libros o más al año aumentó de aproximadamente un 6% en 2014 a un 17% en 2024.

Sin embargo, durante el mismo período también aumentó la proporción que declaró leer solamente uno o dos libros.

Este hallazgo muestra que observar únicamente el promedio de libros leídos puede ocultar cambios importantes en la distribución de los hábitos lectores.

### 6.4. Las dificultades lectoras siguen relacionadas con el contexto social

El análisis de la encuesta de 2024 muestra que aproximadamente un 17% de las personas de nivel socioeconómico bajo declara dificultades para comprender lo que lee, frente a cerca de un 6% de las personas de nivel socioeconómico alto.

También encontramos diferencias en las dificultades de concentración y ritmo de lectura.

Estos resultados complementan los datos escolares y permiten observar cómo las desigualdades se manifiestan en la experiencia cotidiana de leer.

## 7. Propuesta narrativa

La webstory está organizada a partir de un conflicto inicial y dos subhistorias principales.

### Conflicto inicial

Presentamos la reducción de algunas brechas históricas de comprensión lectora y utilizamos visualizaciones para que el lector pueda explorar qué ocurrió con los puntajes de los distintos grupos.

### Primera subhistoria: género

Analizamos cómo cambia la ventaja femenina al incorporar el nivel socioeconómico y complementamos estos resultados con la evolución de los hábitos lectores de los jóvenes.

### Segunda subhistoria: nivel socioeconómico

Estudiamos las distintas trayectorias de rendimiento de los quintiles y las dificultades lectoras declaradas por personas de diferentes niveles socioeconómicos.

### Dimensión del problema

Explicamos qué significa estar bajo el nivel 2 de PISA y mostramos que las dificultades de comprensión lectora también afectan a estudiantes de sectores favorecidos.

### Hallazgo principal

La desigualdad lectora no puede comprenderse únicamente a partir de los puntajes escolares ni mediante categorías generales de género o nivel socioeconómico.

Los resultados muestran la necesidad de considerar conjuntamente las trayectorias de aprendizaje, la diversidad de los hábitos lectores y las condiciones sociales en las que se desarrolla la lectura.

## 8. Desarrollo técnico

Para construir la webstory utilizamos las siguientes herramientas:

- Google Colab y Python para el procesamiento y análisis de datos.
- Pandas para la organización de las bases y la elaboración de tablas.
- Archivos CSV para almacenar los resultados.
- HTML para estructurar el reportaje.
- CSS para implementar la identidad visual y adaptar el diseño a diferentes pantallas.
- JavaScript y Vega-Lite para desarrollar las visualizaciones interactivas.
- Visual Studio Code para la implementación.
- GitHub para almacenar el proyecto y gestionar sus versiones.
- GitHub Pages para publicar la webstory.

La separación entre los archivos de datos, análisis y desarrollo web busca facilitar la revisión y reproducción del trabajo.

## 9. Limitaciones de la investigación

Las comparaciones de PISA son descriptivas y no permiten afirmar que todas las diferencias observadas sean estadísticamente significativas.

La base de PISA utilizada contiene estimaciones previamente procesadas. Nuestro aporte consiste en los cálculos comparativos y el análisis de estas estimaciones, no en atribuirnos el procesamiento original de todos los microdatos internacionales.

Las encuestas de comportamiento lector corresponden a poblaciones y metodologías diferentes. La comparación de hábitos lectores considera población urbana que declaró leer libros por ocio y reportó una cantidad válida y positiva.

Por otra parte, las dificultades lectoras corresponden a percepciones declaradas por los encuestados y no a resultados de pruebas de comprensión.

Por estas razones, no establecemos relaciones causales entre los hábitos lectores, el contexto socioeconómico y los resultados de PISA.

Tampoco evaluamos directamente la efectividad de las políticas públicas mencionadas en el reportaje.

## 10. Autoría y distribución del trabajo

## 10. Autoría y distribución del trabajo

| Actividad | Responsable |
|---|---|
| Investigación y búsqueda de fuentes | Jacinta Bulnes y Sofía Martínez |
| Preparación y análisis de datos | Jacinta Bulnes y Sofía Martínez |
| Desarrollo de la subhistoria de género | Jacinta Bulnes |
| Desarrollo de la subhistoria socioeconómica | Sofía Martínez |
| Redacción y revisión periodística | Jacinta Bulnes y Sofía Martínez |
| Diseño e implementación de la webstory | Jacinta Bulnes y Sofía Martínez |
| Documentación y revisión final | Jacinta Bulnes y Sofía Martínez |

Si bien cada integrante se concentró en una subhistoria específica, el desarrollo de la investigación y la construcción de la webstory fueron un trabajo colaborativo.


## 11. Uso de inteligencia artificial

Durante el desarrollo del proyecto utilizamos ChatGPT como herramienta de apoyo para organizar el trabajo, revisar procedimientos de análisis, explorar posibles hallazgos, elaborar borradores de textos y desarrollar el código HTML, CSS y JavaScript.

Su uso incluyó la identificación de problemas técnicos, la propuesta de visualizaciones y la corrección de errores durante la implementación.

El equipo debe revisar y validar las cifras, las interpretaciones, las decisiones editoriales y el funcionamiento de los recursos incorporados en la versión final.

El detalle del proceso se encuentra en el documento `proceso_desarrollo_y_uso_ia.md`.

## 12. Documentación complementaria

- [Análisis de las visualizaciones](visualizaciones/analisis_visualizaciones.md)
- [Análisis del diseño y la historia](diseno-historia/analisis_diseno.md)
- [Proceso de desarrollo y uso de IA](proceso_desarrollo_y_uso_ia.md)
- [Bases de datos](visualizaciones/base_datos/)
