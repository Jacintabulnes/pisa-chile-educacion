
# Proceso de desarrollo y uso de inteligencia artificial

**Proyecto:** Lectura en Chile: cuando las brechas se achican, pero no todos avanzan.

**Integrantes:** Jacinta Bulnes y Sofía Martínez.

## 1. Objetivo del desarrollo

El objetivo de esta etapa fue transformar nuestra propuesta narrativa y nuestro prototipo de baja definición en una webstory funcional.

Buscamos construir un reportaje periodístico que combinara textos, visualizaciones de datos, fotografías y recursos interactivos, manteniendo una relación clara entre los resultados de nuestra investigación y las decisiones de diseño.

A partir de la retroalimentación de la profesora, decidimos priorizar el contenido periodístico y la búsqueda de hallazgos propios antes de comenzar la implementación de la página.

## 2. Herramientas utilizadas

| Herramienta | Función |
|---|---|
| Google Colab | Procesamiento y análisis de datos |
| Python | Desarrollo de procedimientos de análisis |
| Pandas | Organización de registros y elaboración de tablas |
| Altair | Desarrollo de visualizaciones durante las etapas anteriores |
| HTML | Estructura y contenido del reportaje |
| CSS | Identidad visual y diseño adaptable |
| JavaScript | Implementación de las interacciones |
| Vega-Lite | Construcción de visualizaciones de datos |
| Visual Studio Code | Edición de los archivos de la webstory |
| GitHub Desktop | Gestión de cambios en el repositorio |
| GitHub | Almacenamiento de datos, códigos y documentación |
| GitHub Pages | Publicación de la webstory |
| ChatGPT | Apoyo en el análisis, la redacción y la implementación |

## 3. Etapas del desarrollo

### 3.1. Revisión de las entregas anteriores

Comenzamos revisando nuestra hipótesis, las visualizaciones desarrolladas anteriormente, el manual de identidad, los arquetipos de usuario y el prototipo de la Entrega 04.

Identificamos que uno de nuestros principales problemas era la repetición de información entre las dos subhistorias.

También observamos que necesitábamos fortalecer el trabajo con bases de datos para generar conclusiones propias.

Por esta razón, decidimos reorganizar la investigación antes de avanzar con el desarrollo web.

### 3.2. Procesamiento y análisis de datos

Trabajamos en Google Colab con tres bases principales:

- Resultados de PISA Chile entre 2012 y 2022.
- Encuesta Nacional de Participación Cultural y Comportamiento Lector 2024.
- Base comparativa de comportamiento lector entre 2014 y 2024.

Realizamos cálculos de diferencias de puntaje, variaciones temporales, distribuciones de hábitos lectores y porcentajes ponderados.

En el caso de PISA, trabajamos con estimaciones previamente procesadas. En las encuestas de comportamiento lector utilizamos registros individuales.

Durante esta etapa revisamos las limitaciones de los datos y eliminamos interpretaciones que no podíamos respaldar adecuadamente.

Posteriormente, exportamos los resultados en archivos CSV para utilizarlos en la webstory.

### 3.3. Construcción del reportaje

Una vez identificados los principales hallazgos, reorganizamos la estructura narrativa.

Decidimos presentar la reducción de las brechas como el conflicto inicial de la historia y desarrollar dos subhistorias que aportaran información diferente.

Incorporamos explicaciones sobre PISA, los quintiles socioeconómicos y los niveles de competencia lectora para facilitar la comprensión de los resultados.

También eliminamos la pandemia como explicación central del deterioro, debido a que nuestras bases no permiten establecer esa relación causal.

### 3.4. Implementación del HTML

Creamos el archivo `index.html` para organizar el contenido de la webstory.

El archivo contiene:

- Portada.
- Menú de navegación.
- Contexto de la investigación.
- Conflicto inicial.
- Dos subhistorias principales.
- Contenedores para las visualizaciones.
- Fotografías.
- Recursos explicativos.
- Conclusión.
- Metodología y fuentes.

Utilizamos identificadores para conectar las distintas secciones con los botones de navegación y los gráficos desarrollados mediante JavaScript.

### 3.5. Implementación del CSS

En el archivo `style.css` incorporamos los elementos principales del manual de identidad visual.

Definimos los colores, las tipografías, los tamaños de texto, los márgenes, los botones y la distribución de los contenidos.

También incorporamos reglas para adaptar la estructura a pantallas de menor tamaño.

Buscamos mantener una estética editorial que facilitara la lectura del reportaje sin competir con la información presentada en las visualizaciones.

### 3.6. Implementación del JavaScript

El archivo `script.js` contiene los procedimientos necesarios para cargar los datos y construir las visualizaciones mediante Vega-Lite.

Los gráficos utilizan archivos CSV obtenidos durante el análisis realizado en Google Colab.

Incorporamos diferentes tipos de interacción, como selectores de grupos, botones para cambiar la perspectiva de análisis e información adicional al pasar el cursor sobre determinados elementos.

La separación entre HTML, CSS y JavaScript permite modificar el contenido, el diseño y las visualizaciones sin tener que reconstruir toda la página.

## 4. Organización de los archivos

La implementación de la webstory se encuentra en la carpeta `docs`.

    docs/
        index.html
        style.css
        script.js
        imagenes/
        datos/
            resultados_webstory_definitivo/
                01_PISA/
                02_Habitos_lectores_2024/
                03_Evolucion_lectora_2014_2024/

Los archivos HTML, CSS y JavaScript se encuentran separados para facilitar su edición y revisión.

La carpeta de datos contiene los resultados utilizados por las visualizaciones.

La carpeta de imágenes contiene los recursos fotográficos y el logo del proyecto.

La documentación académica y los archivos de análisis se organizan dentro de `Entrega_05`.

## 5. Relación entre las decisiones narrativas y la implementación

| Decisión narrativa | Implementación técnica |
|---|---|
| Permitir que el lector elija entre comenzar el reportaje o consultar la metodología | Botones con enlaces internos |
| Presentar el conflicto antes de desarrollar las subhistorias | Organización secuencial de las secciones HTML |
| Permitir la exploración de diferentes grupos | Selectores y botones mediante JavaScript |
| Explicar conceptos estadísticos | Bloques gráficos desarrollados con HTML y CSS |
| Comunicar la dimensión del problema | Pictograma de estudiantes bajo el nivel 2 |
| Evitar interrumpir el reportaje con documentación extensa | Apartados desplegables de metodología |
| Mantener la identidad visual | Variables de color y estilos definidos en CSS |
| Facilitar la revisión de los resultados | Archivos CSV separados del código |

## 6. Uso de inteligencia artificial durante el proyecto

Durante el desarrollo de la investigación utilizamos ChatGPT como herramienta de apoyo en distintas etapas del trabajo.

### 6.1. Procesamiento y análisis de datos

Utilizamos esta herramienta para recibir orientación en el uso de Python y Google Colab, desarrollar y corregir códigos, organizar las bases de datos e identificar posibles hallazgos a partir de los resultados obtenidos.

### 6.2. Desarrollo periodístico

A partir de la retroalimentación de la profesora, utilizamos ChatGPT para explorar nuevas formas de abordar nuestra investigación, reformular la hipótesis, identificar microhistorias y organizar la estructura narrativa del reportaje.

También recurrimos a esta herramienta para elaborar y revisar los textos de la webstory, considerando las indicaciones editoriales del equipo y los resultados obtenidos de las bases de datos.

### 6.3. Desarrollo técnico

La inteligencia artificial nos ayudó a desarrollar los archivos HTML, CSS y JavaScript necesarios para implementar la webstory.

Su uso estuvo orientado principalmente a:

- Implementar nuestro manual de identidad visual.
- Organizar la estructura del reportaje.
- Construir visualizaciones interactivas con Vega-Lite.
- Incorporar los archivos CSV.
- Adaptar el diseño a diferentes tamaños de pantalla.
- Identificar y corregir errores de funcionamiento.

### 6.4. Revisión y toma de decisiones

Durante el proceso, revisamos los resultados, solicitamos modificaciones y tomamos decisiones respecto de la estructura, el contenido y la presentación de la investigación.

La herramienta no fue utilizada como fuente periodística. Los datos presentados provienen de las bases identificadas en nuestra metodología.

La responsabilidad sobre la verificación de los datos, las interpretaciones y el contenido publicado corresponde a las integrantes del equipo.

## 7. Registro de instrucciones entregadas a la IA

A continuación, presentamos una selección de instrucciones utilizadas durante el desarrollo del proyecto.

Algunas fueron resumidas para facilitar su lectura, manteniendo el objetivo de las solicitudes originales.

### Instrucción 01: profundización del análisis

Solicitamos revisar las bases de datos utilizadas durante el semestre e identificar qué conclusiones podíamos obtener directamente de ellas, considerando las observaciones de la profesora sobre nuestra dependencia de análisis externos.

**Resultado:** reorganización del trabajo con datos e incorporación de nuevos procedimientos de análisis.

### Instrucción 02: búsqueda de microhistorias

Solicitamos identificar hallazgos específicos dentro de los resultados, evitando concentrar toda la investigación en la reducción de las brechas.

**Resultado:** identificación del caso del tercer quintil, los retrocesos de los sectores favorecidos y las diferencias en la distribución de los hábitos lectores.

### Instrucción 03: estructura narrativa

Solicitamos utilizar como referente estructural la webstory sobre natalidad en Chile:

https://emiliavalenzuela.github.io/repo_proyecto_equipo-natalidad/

Pedimos desarrollar un reportaje periodístico que combinara datos, explicaciones, visualizaciones y recursos interactivos.

**Resultado:** organización del reportaje mediante un conflicto inicial, dos subhistorias, una conclusión y una sección metodológica.

### Instrucción 04: estilo de redacción

Solicitamos utilizar un lenguaje claro, preciso y periodístico, evitando repetir los mismos datos y explicaciones a lo largo del reportaje.

También pedimos explicar los conceptos técnicos que un lector no especializado podría desconocer.

**Resultado:** incorporación de explicaciones sobre PISA, los quintiles socioeconómicos y el nivel 2 de competencia lectora.

### Instrucción 05: implementación de la portada

Solicitamos que la portada presentara el título, el logo, los nombres de las autoras, una bajada breve y dos opciones de navegación: comenzar a leer o consultar la metodología.

**Resultado:** implementación de la portada mediante HTML y CSS.

### Instrucción 06: implementación de visualizaciones

Solicitamos desarrollar visualizaciones a partir de los archivos CSV exportados desde Google Colab, utilizando los colores del manual de identidad y diferentes recursos de interacción.

**Resultado:** construcción de gráficos de líneas, barras comparativas, barras apiladas y un pictograma.

### Instrucción 07: corrección de errores

Compartimos capturas de pantalla de la webstory y solicitamos ayuda para identificar problemas relacionados con la carga de archivos, las fotografías y la presentación de los gráficos.

**Resultado:** corrección de rutas, procedimientos de guardado y configuración visual de algunos gráficos.

## 8. Cambios y decisiones del equipo

Durante el desarrollo solicitamos modificaciones a las propuestas generadas por la inteligencia artificial.

Entre las principales decisiones se encuentran:

- Priorizar el contenido periodístico por sobre el diseño decorativo.
- Utilizar la reducción de las brechas solamente como conflicto inicial.
- Eliminar las explicaciones relacionadas con la pandemia que no estaban respaldadas por nuestros análisis.
- Incorporar las políticas públicas como contexto de la investigación.
- Evitar la repetición de datos entre las distintas secciones.
- Reemplazar el análisis centrado en promedios de libros leídos por una comparación de sus distribuciones.
- Mantener los colores del manual de identidad.
- Seleccionar las fotografías utilizadas en el reportaje.
- Incorporar una explicación accesible de los niveles de PISA.
- Reformular la conclusión para integrar las distintas bases de datos.

Estas decisiones permitieron orientar las propuestas de la herramienta hacia los objetivos específicos de nuestra investigación.

## 9. Problemas técnicos y soluciones

### 9.1. Reinicio de la sesión de Google Colab

Durante el trabajo con los datos, la sesión de Google Colab se reinició y algunas variables dejaron de estar disponibles.

**Solución:** recuperamos los archivos CSV y reorganizamos los resultados exportados para continuar trabajando sin depender exclusivamente de las variables almacenadas en la sesión.

### 9.2. Archivos HTML y CSS sin guardar

Durante las primeras pruebas, el navegador mostraba una página en blanco o sin diseño.

Al revisar Visual Studio Code, descubrimos que algunos archivos no habían quedado guardados correctamente.

**Solución:** volvimos a incorporar el código y utilizamos la opción File → Save para comprobar que los cambios quedaran registrados.

### 9.3. Visualización local de la webstory

Necesitábamos comprobar que el navegador pudiera cargar correctamente los archivos CSV utilizados por JavaScript.

**Solución:** utilizamos un servidor HTTP local mediante Python.

El comando utilizado fue:

    python3 -m http.server 8000 --directory docs

Posteriormente, accedimos a la webstory mediante:

    http://127.0.0.1:8000/index.html

Esto permitió realizar pruebas antes de publicar los archivos en GitHub Pages.

### 9.4. El diseño no se actualizaba

En algunas pruebas, el navegador mostraba una versión anterior de la página.

**Solución:** utilizamos la opción Force Reload de Google Chrome para volver a cargar los archivos.

### 9.5. Las fotografías no aparecían

Durante las primeras pruebas, el servidor mostraba errores 404 asociados a los archivos de imágenes.

Identificamos diferencias entre el nombre de la carpeta y las rutas utilizadas en el HTML. Además, la carpeta destinada a las fotografías estaba vacía.

**Solución:** renombramos la carpeta como `imagenes`, incorporamos los archivos correspondientes y utilizamos los nombres establecidos en el HTML.

### 9.6. Problemas de tamaño en el gráfico de hábitos lectores

Detectamos que el título y las barras del gráfico de hábitos lectores no se visualizaban correctamente.

**Solución:** modificamos la altura, los márgenes y la configuración de tamaño del gráfico en JavaScript.

El ajuste permitió mejorar la presentación sin modificar los resultados estadísticos.

### 9.7. Interpretación de los cambios en PISA

Durante el análisis inicial identificamos que algunas comparaciones podían interpretarse incorrectamente como pruebas de significancia estadística.

**Solución:** reformulamos los procedimientos y las interpretaciones para presentar las diferencias como cambios observados, considerando que no contamos con todos los componentes de incertidumbre necesarios para realizar comparaciones estadísticas completas entre ciclos.

## 10. Pruebas de funcionamiento

Durante la implementación realizamos pruebas locales en Google Chrome.

| Elemento | Estado |
|---|---|
| Carga del HTML | Comprobado |
| Aplicación del CSS | Comprobado |
| Funcionamiento del servidor local | Comprobado |
| Carga del primer gráfico | Comprobado |
| Corrección del gráfico de hábitos lectores | Comprobado |
| Incorporación de fotografías y logo | Archivos incorporados |
| Funcionamiento de todos los controles interactivos | Revisión final pendiente |
| Verificación de todos los enlaces externos | Pendiente |
| Visualización en dispositivos móviles | Pendiente |
| Publicación en GitHub Pages | Pendiente |
| Comprobación del enlace público | Pendiente |

Los estados pendientes serán actualizados una vez realizada la revisión final de la webstory.

## 11. Reflexión sobre el uso de IA

El uso de inteligencia artificial facilitó el desarrollo técnico y permitió avanzar en procedimientos que inicialmente nos resultaban complejos.

Sin embargo, durante el proceso también identificamos la necesidad de revisar las propuestas generadas por la herramienta.

Algunas respuestas requerían ajustes en la interpretación de los datos, en la organización narrativa o en el funcionamiento de las visualizaciones.

Por esta razón, utilizamos las bases de datos, los resultados obtenidos en Google Colab y las pruebas en el navegador como mecanismos de comprobación.

Consideramos que el principal aprendizaje de esta etapa fue comprender la relación entre la investigación periodística, el análisis de datos y su implementación en un formato digital.

## 12. Archivos y recursos

- [Estructura HTML](../docs/index.html)
- [Hoja de estilos CSS](../docs/style.css)
- [Código JavaScript](../docs/script.js)
- [Datos utilizados por la webstory](../docs/datos/resultados_webstory_definitivo/)
- [Análisis de las visualizaciones](visualizaciones/analisis_visualizaciones.md)
- [Análisis del diseño y la historia](diseno-historia/analisis_diseno.md)
- [README de la Entrega 05](README.md)

Repositorio general:

https://github.com/Jacintabulnes/pisa-chile-educacion
