__NUXT_JSONP__("/tutoriales/programacion-de-un-semaforo-con-arduino", (function(a,b,c,d,e,f,g,h,i,j,k,l){b.cdate="2018-01-26 15:57:33";b.mdate="2019-07-09 14:05:12";c[0]="migueabellan";return {data:[{tutorial:{alias:"programacion-de-un-semaforo-con-arduino",title:a,description:g,image:"img\u002Fpreview.jpg",contributors:c,tags:{technology:[d,e],hardware:[f],software:[l,h],level:[i,j],others:[k]},extra:{level:"Iniciación",duration:"45 minutos",videos:"4 vídeos"},date:b},title:a,description:g,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fprogramacion-de-un-semaforo-con-arduino\u002Fimg\u002Fpreview.jpg",date:b,tags:[d,e,f,l,h,i,j,k],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Fprogramacion-de-un-semaforo-con-arduino\u002FREADME.md",contributors:c,raw:"## Introducción\n\nEn este curso aprenderás a construir y programar un sencillo semáforo utilizando un lenguaje de programación por bloques y el lenguaje de Arduino. En las siguientes lecciones te explicamos paso a paso conceptos básicos de electrónica y programación que deberás conocer para construir la práctica del semáforo con Arduino.\n\n![](img\u002Fpreview.gif)\n\n### Materiales\n\nAntes de continuar con las lecciones del curso asegúrate que dispones de todos los componentes que se van a necesitar. Los componentes utilizados en este tutorial son:\n\n- Arduino UNO\n- Cable USB\n- Placa de prototipado o protoboard\n- 4 cables o latiguillos\n- 3 Diodos Led (Rojo, Amarillo, Verde)\n- 3 Resistencias de 220Ω\n\n### Esquema eléctrico\n\nLos Led que estamos utilizando para la práctica admiten una tensión máxima de 2,1V y para evitar que se puedan dañar tendremos que colocarle una resistencia al circuito. Para ello, vamos a calcular el valor de la resistencia siguiendo la Ley de Ohm, es decir, la tensión en el Led tiene que ser 2,1V.\n\nSi el pin de Arduino ofrece 5V, el tensión que debe circular por la resistencia es 5V – 2,1V = 2,9V. Por otro lado, sabemos que la intensidad que circula por el Led es de 20mA. Con lo cual siguiendo la Ley de Ohm, tenemos que:\n\n```\nR = 2,9V \u002F 0,02A = 145Ω \n```\n\nRedondeamos el resultado obtenido a un valor de resistencia por encima de su resistencia ideal, obteniendo una resistencia de 220Ω.\n\n![](img\u002Fesquema-electrico.jpg)\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Programación en S4A\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002F6Q60WzYxb3c\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nEn esta lección te enseñamos la programación del semáforo programado en S4A y en las siguientes lecciones explicaremos como construir sobre la placa de prototipado los diferentes leds y resistencias.\n\nLo primero que hay que hacer es crear un objeto de tipo Arduino, y le añadimos los disfraces del semáforo. Esto lo vamos a hacer para comprobar que el cambio de disfraz y cambio de luces en la placa de Arduino funcionan correctamente.\n\nEn cuanto a la programación, utilizaremos un bucle que se repetirá siempre. Deberemos utilizar retardos para cambiar de disfraz y led, siguiendo los pasos del semáforo (verde, amarillo, rojo).\n\nAl pulsar sobre la bandera verde observaremos que se produce el cambio de disfraz simulando el semáforo en la pantalla de Scratch. En la siguiente lección comprobaremos que también funciona en nuestra placa de Arduino.\n\n\u003E S4A está desarrollado sobre la versión 1.4 de Scratch. En la siguiente lección aprenderás cómo programar el semáforo utilizando mBlock, basado en Scratch 2.0 y superiores.\n\n![](img\u002Fprogramacion-s4a.jpg)\n\n### Construcción del semáforo\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FNr28WpNP3mQ\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nSiguiendo el esquema eléctrico y explicaciones proporcionadas en la lección anterior, conectamos los led y resistencias sobre la placa de prototipado y Arduino.\n\nPara reutilizar cables, conectamos todas las resistencias a la guía serigrafiada con el polo negativo de nuestra placa de prototipado. A continuación, conectamos los led a la resistencia. Para esta conexión se ha conectado la patilla más corta del led (cátodo o negativo) a la resistencia, y la patilla más larga (ánodo o positivo) al pin digital programado en nuestro programa S4A.\n\nPor último, se conecta el cable de USB al equipo y pulsamos la bandera verde para ver el resultado de nuestro semáforo.\n\n### Cruce de semáforos\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FPlAV36CI_No\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nEn esta lección te enseñamos la programación del cruce de semáforos programado en S4A y explicaremos como construir sobre la placa de prototipado los diferentes leds y resistencias.\n\n![](img\u002Fesquema-electrico-cruce.jpg)\n\nLo primero que hay que hacer es crear un objeto de tipo Arduino que será donde se programarán todas las instrucciones que se comunican con la placa de Arduino.\n\nEn cuanto a la programación, utilizaremos un bucle que se repetirá siempre. Deberemos utilizar retardos para cambiar de disfraz y led, siguiendo los pasos del semáforo (verde, amarillo, rojo). Para el otro semáforo procederemos al mismo método. La diferencia sobre el ejercicio del semáforo es que en este caso creamos funciones para el cambio de semáforos. A este concepto se le conoce como abstracción de código.\n\n![](img\u002Fprogramacion-cruce.jpg)\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Programación en Arduino IDE\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002F_4ZOp9TZr6w\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nAl igual que en el apartado anterior, programamos en Arduino IDE la práctica propuesta.\n\n```arduino\nvoid setup() {\n  pinMode(13, OUTPUT);\n  pinMode(12, OUTPUT);\n  pinMode(11, OUTPUT);\n  digitalWrite(13, LOW);\n  digitalWrite(12, LOW);\n  digitalWrite(11, LOW);\n}\n\nvoid loop() {\n  digitalWrite(13, LOW);\n  digitalWrite(11, HIGH);\n  delay(5000);\n  digitalWrite(11, LOW);\n  digitalWrite(12, HIGH);\n  delay(1000);\n  digitalWrite(12, LOW);\n  digitalWrite(13, HIGH);\n  delay(5000);\n}\n```\n\n### Construcción del semáforo\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002F53Git9YiRvA\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\nSiguiendo el esquema eléctrico y explicaciones proporcionadas en la lección anterior, conectamos los led y resistencias sobre la placa de prototipado y Arduino.\n\nPara reutilizar cables, conectamos todas las resistencias a la guía serigrafiada con el polo negativo de nuestra placa de prototipado. A continuación, conectamos los led a la resistencia. Para esta conexión se ha conectado la patilla más corta del led (cátodo o negativo) a la resistencia, y la patilla más larga (ánodo o positivo) al pin digital programado en nuestro programa. Por último, se conecta el cable de USB al equipo.\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fprogramacion-de-un-semaforo-con-arduino\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:""}]}],fetch:[],mutations:[]}}("Programación de un semáforo con Arduino",{},Array(1),"Electrónica","Programación","Arduino","Programación de un semáforo con Arduino utilizando varios lenguajes de programación.","Scratch 4 Arduino","Secundaria","Bachillerato","Semáforo","Arduino IDE")));