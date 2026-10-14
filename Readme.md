# Cuando las brechas se achican, pero no todos avanzan
### Desigualdades en comprensión lectora en Chile | PISA 2000–2022

## Tema y pregunta de investigación

Este proyecto investiga cómo han cambiado las desigualdades en comprensión lectora entre estudiantes chilenos, utilizando los resultados de PISA. En lugar de observar únicamente el promedio nacional, analizamos las trayectorias de grupos específicos.

**Pregunta principal:** ¿Cómo se han estrechado las brechas de comprensión lectora por género y nivel socioeconómico en Chile, y qué cambios en los puntajes de cada grupo explican esa reducción?

## Hipótesis

En Chile, algunas brechas de comprensión lectora se han reducido no solo por avances de los grupos históricamente rezagados, sino también por retrocesos de quienes obtenían mejores resultados. Esperamos observar este patrón en la ventaja de las mujeres sobre los hombres y en la diferencia entre los quintiles socioeconómicos extremos.

## Subhistorias

**1. Género: la ventaja femenina se estrecha (2000–2022)**

Las mujeres chilenas mantuvieron puntajes de lectura superiores a los hombres durante toda la serie. Sin embargo, entre 2018 y 2022, su promedio cayó de 462 a 451 puntos, mientras el masculino pasó de 442 a 445. La brecha se redujo de 20 a 6 puntos y dejó de ser estadísticamente significativa en 2022.

**Pregunta:** ¿Cómo se explica, a partir de las trayectorias de ambos grupos, la reducción de la ventaja femenina?

[Visualización, crónica, datos y código](https://github.com/Jacintabulnes/pisa-chile-brecha-lectura-genero)

**2. Nivel socioeconómico: una distancia menor, pero persistente (2006–2022)**

En 2006, el quintil socioeconómico y cultural más favorecido obtuvo 517 puntos en lectura, frente a 391 del menos favorecido. En 2022, sus promedios fueron 495 y 413, respectivamente. La distancia disminuyó de 126 a 82 puntos, aunque la ventaja del grupo más favorecido persiste.

**Pregunta:** ¿La reducción de esta brecha refleja mejoras del quintil menos favorecido, retrocesos del más favorecido o ambos movimientos?

*Visualización individual en desarrollo.*

## Datos y metodología

Utilizamos resultados oficiales de PISA publicados por la Agencia de Calidad de la Educación. La serie por sexo proviene de la página 26 del informe PISA 2022; la serie por quintil socioeconómico y cultural, de la página 27.

Los valores fueron transcritos de gráficos oficiales y organizados en archivos CSV. El procesamiento se realiza con Python y pandas; las visualizaciones, con Altair. Trabajamos con promedios agregados, no con microdatos individuales.

## Enfoque narrativo

Una brecha menor puede parecer una buena noticia, pero no necesariamente representa mejores aprendizajes. Buscamos mostrar qué ocurre detrás de las diferencias entre grupos: quiénes avanzan, quiénes retroceden y qué desigualdades permanecen.

Las visualizaciones describen cambios en los puntajes, pero no permiten establecer sus causas. Los hábitos lectores y las comparaciones internacionales quedan como posibles líneas de profundización.
