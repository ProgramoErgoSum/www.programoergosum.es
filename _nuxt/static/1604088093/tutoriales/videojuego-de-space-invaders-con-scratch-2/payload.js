__NUXT_JSONP__("/tutoriales/videojuego-de-space-invaders-con-scratch-2", (function(a,b,c,d,e,f,g,h,i,j,k){b.cdate="2017-06-01 00:00:00";b.mdate="2019-10-25 15:25:12";c[0]="migueabellan";return {data:[{tutorial:{alias:"videojuego-de-space-invaders-con-scratch-2",title:a,description:f,image:"img\u002Fpreview.jpg",contributors:c,tags:{technology:[d],hardware:[],software:[e,k],level:[g,h],others:[i,j]},extra:{level:"Avanzado",duration:"60 minutos",videos:"5 vídeos"},date:b},title:a,description:f,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fvideojuego-de-space-invaders-con-scratch-2\u002Fimg\u002Fpreview.jpg",date:b,tags:[d,e,k,g,h,i,j],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Fvideojuego-de-space-invaders-con-scratch-2\u002FREADME.md",contributors:c,raw:"## Introducción\n\nEn este tutorial con Scratch 2.0 te explicamos cómo programar el videojuego de Space Invaders utilizando conceptos avanzados del paradigma de la programación informática, así como conceptos de programación orientada a objetos con Scratch. Su objetivo es eliminar a los alienígenas con un cañón láser y obtener la mayor cantidad de puntos posible.\n\n![](img\u002Fpreview.gif \"Videojuego de Space Invaders con Scratch\")\n\n### Reinventa, programa y comparte\n\nAntes de continuar con las lecciones de este curso de programación con Scratch te recomendamos seguir los siguientes pasos para reinventar y obtener todas las imágenes utilizadas en el videojuego gratis.\n\n- Reinventa el proyecto [Space Invaders (base)](https:\u002F\u002Fscratch.mit.edu\u002Fprojects\u002F185372903\u002Feditor) para obtener todas las imágenes.\n- Programa el videojuego siguiendo los videotutoriales de las siguientes lecciones.\n- Comparte el proyecto y si está entre los mejores aparecerá en la sección Mejores proyectos.\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Space Invaders\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002F7heq5xo6prE\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Programación del escenario\n\nEn primer lugar creamos 4 escenarios. Los 3 primeros corresponden a la cuenta atrás antes del inicio del juego (3, 2 y 1). El último escenario será la pantalla principal.\n\n![](img\u002Fescenario.jpg \"Programación del escenario\")\n\n### Nave del videojuego\n\nEn la segunda parte de este video se crea el objeto de la nave en el evento \"Comienza juego\" y mediante las teclas derecha e izquierda la desplazamos sobre el eje horizontal.\n\nEn el video explicamos las diferencias existentes entre mover los objetos mediante eventos o mediante condiciones. En este caso hemos optado por este mecanismo para explicar todas las opciones posibles.\n\nPor último, preparamos un nuevo evento que se ejecutará cuando pulsemos la tecla espacio. Como puedes imaginar, este evento producirá el disparo de la bala que crearemos en otro objeto en la siguiente lección.\n\n![](img\u002Fnave.jpg \"Nave del videojuego\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Disparo de la bala\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FEkyfw-5Au7w\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Disfraces de la bala\n\nEn este video creamos el objeto bala con sus diferentes disfraces. Además del disfraz principal añadimos otro para simular el efecto explosión. De esta forma, cuando la bala toque un marciano realizaremos el cambio de disfraz durante unas milésimas de segundo. También reproduciremos un sonido.\n\n![](img\u002Fdisfraces.jpg \"Disfraces de la bala\")\n\n### Programación de la bala\n\nEn cuanto a la programación de la bala tenemos que destacar varios puntos:\n\n- El primero de ellos es que el evento se ejecuta desde la nave. Es decir, cuando pulsamos la tecla de disparo, ejecutamos el evento \"Dispara\" y dicho evento se implementa dentro de la programación de la bala. Además necesitamos el punto sobre el eje horizontal en el momento del disparo.\n- En segundo lugar, cuando se crea el clon de la bala este se moverá en dirección vertical hasta que toque el borde superior de la pantalla en cuyo caso desaparecerá.\n\n![](img\u002Fbala.jpg \"Programación de la bala\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Crear marcianos\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FPpAC3Vj4nqU\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Disfraces del marciano\n\nEn este video creamos el objeto marciano con sus respectivos disfraces. Podrás observar que solamente se crea un marciano y que será clonado utilizando los clones de Scratch en tiempo de ejecución.\n\nEs importante que todos los marcianos tengan el mismo tamaño y estén centrados en el centro del escenario para que formen una cuadrícula.\n\n![](img\u002Fmarcianos.jpg \"Disfraces del marciano\")\n\n### Programación de los marcianos\n\nEn la segunda parte del video aparece la técnica de programación paralela utilizando funciones. Es decir, creamos una función llamada \"Crear marciano\" cuyo objetivo será clonar 8 marcianos sobre el eje vertical con una separación y dicha función será invocada 5 veces, 1 por columna.\n\nDestacar los parámetros de la función los cuales corresponden al disfraz del marciano y las coordenadas de origen donde se clonarán los marcianos.\n\n\u003E También se podría haber utilizado un bucle para invocar la función \"Crear marciano\", pero hemos realizado esta implementación para explicar el concepto de paralelismo.\n\n![](img\u002Fparalelismo.jpg \"Programación de los marcianos\")\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Movimiento de clones\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002Fs-T7SaqMfPo\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Movimientos de los clones\n\nEn este video se programa el movimiento de los marcianos. Esta tarea parece la funcionalidad más compleja del videojuego pero sin embargo la programación es muy sencilla.\n\nEl movimiento de los marcianos es simple, es decir, se moverá hacia la derecha 10 veces, bajará una posición, se moverá 10 veces hacia la izquierda, volverá a bajar y vuelta a empezar... con lo cual podemos ver que tenemos un bucle anidado con los movimientos. También hemos añadido un retardo en el tiempo para que se mueva paso a paso.\n\n![](img\u002Fmovimientos.jpg \"Movimientos de los clones\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Mejoras y puntos\n\n\u003Cdiv class=\"iframe\"\u003E\n  \u003Ciframe src=\"\u002F\u002Fwww.youtube.com\u002Fembed\u002FDsim_9Ia9DU\" allowfullscreen\u003E\u003C\u002Fiframe\u003E\n\u003C\u002Fdiv\u003E\n\n### Puntos del videojuego\n\nEn este video añadimos la variable de puntos para detectar cuando hemos ganado la partida. Esta variable se inicializa en el escenario (siguiendo buenas prácticas de programación) y se incrementa cada vez que la bala toca un marciano.\n\nPor último, también tenemos que programar la función para terminar la partida, y esto lo hacemos en el objeto marciano cuando toca el borde inferior de la pantalla.\n\n![](img\u002Fpuntos.jpg \"Puntos del videojuego\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Retos propuestos\n\nSi ya has completado todas las lecciones del tutorial te proponemos resolver los siguientes retos de programación con Scratch.\n\n### Reto 1: Disparo metralleta\n\nEn este reto te proponemos que añadas una nueva funcionalidad al videojuego para que se puedan disparar ráfagas de balas a modo metralleta. Para ello deberás añadir una nueva funcionalidad en la función seleccionada.\n\n![](img\u002Freto-1.jpg \"Disparo metralleta\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Mejores proyectos\n\n![](img\u002Fproyecto-juanpacrack.gif \"juanpacrack\")\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fvideojuego-de-space-invaders-con-scratch-2\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:""}]}],fetch:[],mutations:[]}}("Videojuego de Space Invaders programado con Scratch 2.0",{},Array(1),"Programación","Scratch","Aprende paso a paso como programar con Scratch el mítico videojuego de Space Invaders.","Primaria","Secundaria","Videojuegos","Space Invaders","Scratch 2")));