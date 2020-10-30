__NUXT_JSONP__("/tutoriales/introduccion-a-pygame-en-raspberry-pi", (function(a,b,c,d,e,f,g,h,i,j,k){b.cdate="2017-06-01 00:00:00";b.mdate="2019-10-26 14:05:12";c[0]="migueabellan";return {data:[{tutorial:{alias:"introduccion-a-pygame-en-raspberry-pi",title:a,description:f,image:"img\u002Fpreview.jpg",contributors:c,tags:{technology:[d],hardware:[e],software:[k],level:[g,h],others:[i]},extra:{level:"Iniciación",duration:"45 minutos",videos:j},date:b},title:a,description:f,image:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fintroduccion-a-pygame-en-raspberry-pi\u002Fimg\u002Fpreview.jpg",date:b,tags:[d,e,k,g,h,i],editLink:"https:\u002F\u002Fgithub.com\u002FProgramoErgoSum\u002FTutoriales\u002Fedit\u002Fmaster\u002Fv1\u002Fintroduccion-a-pygame-en-raspberry-pi\u002FREADME.md",contributors:c,raw:"## Introducción\n\nEn este curso aprenderás los conceptos necesarios para empezar a programar videojuegos en Python utilizando el módulo de PyGame. Se recomienda conocer el lenguaje de programación en Python para continuar con las siguientes lecciones. Si todavía no sabes programar en Python, accede al curso de iniciación a la programación en Python de esta misma plataforma.\n\nEl módulo de PyGame para Python viene instalado por defecto en la versión de Raspbian para Raspberry Pi. No obstante si dispones de otro sistema operativo, puedes acceder a la web del proyecto para instalarlo y continuar con el resto de lecciones del curso.\n\n![](img\u002Fpython-pygame.jpg \"Python PyGame\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## ¿Qué es PyGame?\n\nPyGame es un módulo del lenguaje de programación Python que permiten la creación de videojuegos en dos dimensiones de una manera sencilla. Mediante PyGame podemos utilizar sprites (objetos), cargar y mostrar imágenes en diferentes formatos, sonidos, etc. Además, al ser un módulo destinado a la programación de videojuegos se puede monitorizar el teclado o joystick de una manera bastante sencilla.\n\n![](img\u002Fvideojuego-en-pygame.jpg \"Videojuego en PyGame\")\n\nEl módulo de PyGame para Python viene instalado por defecto en la versión de Raspbian para Raspberry Pi. No obstante si dispones de otro sistema operativo, puedes acceder a la web del proyecto para instalarlo y continuar con el resto de lecciones del curso.\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Primeros pasos\n\nSiempre que se empieza a programar un videojuego se suele utilizar una plantilla predefinida con las instrucciones básicas o esenciales. La idea es no escribir el código básico cuando se puede reutilizar.\n\n![](img\u002Fciclo-del-videojuego.jpg \"Ciclo de un videojuego\")\n\nTodo videojuego consta de 3 partes principales que se suelen declarar dentro de la función principal main():\n\n- Se dibuja la pantalla. En este caso pintaremos los escenarios, sprites, textos y demás objetos que queramos representar a los largo de la partida del juego.\n- Se comprueban los eventos. Los eventos típicos que se suelen utilizar son el de finalización de la partida al presionar sobre el cierre de la ventana, así como los diferentes eventos que se prograrán al presionar una tecla, etc.\n- Se actualiza la pantalla. Una vez se actúa sobre cada elemento, se actualiza la pantalla para que queden fijados los componentes del videojuego.\n\nA continuación puedes copiar y pegar el código en tu editor Thonny Python y ejecutar el código para ver como se abre una nueva ventana preparada para empezar a programar videojuegos.\n\n```python\nimport random, pygame, sys\nfrom pygame.locals import *\n\n# Declaración de constantes y variables\nWHITE = (255, 255, 255)\n\n# Función principal del juego\ndef main():\n  # Se inicializa el juego\n  pygame.init()\n  pygame.display.set_caption(\"Título del juego\")\n  screen = pygame.display.set_mode((480,360))\n\n  # Bucle principal\n  while True:\n\n    # 1.- Se dibuja la pantalla\n    screen.fill(WHITE)\n\n    # 2.- Se comprueban los eventos\n    for event in pygame.event.get():\n      if event.type == QUIT:\n        pygame.quit()\n        sys.exit(0)\n\n    # 3.- Se actualiza la pantalla\n    pygame.display.update()\n\n# Este fichero es el que ejecuta el juego principal\nif __name__ == '__main__':\n  main()\n```\n\nUna vez copiado el código en tu editor y ejecutado verás que aparece una ventana con unas determinadas dimensiones, título, color de fondo. Si observas en las primeras líneas del código, y modificas dicho parámetros, tendrás una ventana diferente. ¡Pruébalo!\n\n\n\n\u003Cbr \u002F\u003E\n\n\n## Escenario\n\nHasta ahora, cuando ejecutamos nuestro videojuego aparece una ventana con el fondo de color blanco, porque le estamos diciendo dentro del bucle while que fije el color al color de la constante WHITE, blanco en este caso (formato RGB). Sin embargo, también se pueden añadir imágenes de fondo. Para ello tenemos que seguir los pasos de importar la imagen y establecerla en la posición deseada mediante coordenadas.\n\n```python\n...\ndef main():\n  # Se inicializa el juego\n  ...\n  fondo = pygame.image.load('ruta_del_fondo')\n  ...\n  # Bucle principal\n  while True:\n    # 1.- Se dibuja la pantalla\n    screen.blit(fondo, (0, 0))\n...\n```\n\nObserva que la carga de la imagen se realiza dentro de la función principal y antes del bucle while. Sin embargo, dentro del bucle while establecemos sobre la pantalla y en las coordenadas (0, 0) la imagen. Recuerda que las coordenadas (0, 0) en PyGame se sitúan en la esquina superior izquierda.\n\n![](img\u002Fescenario.jpg \"Escenario\")\n\n\n\n\u003Cbr \u002F\u003E\n\n\n\n## Personaje principal\n\nPara importar un personaje e interactuar sobre él deberemos proceder de la siguiente manera. En primer lugar se importa la imagen del sprite y se declaran las coordenadas de su posición. (En cursos más avanzados veremos como es conveniente crear una clase para el objeto).\n\nUna vez tenemos al personaje situado sobre su posición, programamos los eventos que efectuarán los cambios de coordenadas, y esto como puedes observar, se realiza dentro del apartado de eventos en el bucle while.\n\nLos eventos que vamos a utilizar son los movimientos básicos de las teclas del teclado para que el personaje se mueva en todas las direcciones.\n\n```python\n...\ndef main():\n  personaje = pygame.image.load('ruta_de_la_imagen')\n  personaje_x = 240\n  personaje_y = 180\n  ...\n  # Bucle principal\n  while True:\n    ...\n    # 1.- Se dibuja la pantalla\n    screen.blit(personaje, (personaje_x, personaje_y))\n    ...\n    # 2.- Se comprueban los eventos\n    for event in pygame.event.get():\n      ...\n      if event.type == KEYDOWN:\n        if event.key == K_LEFT:\n            personaje_x -= 10\n        if event.key == K_RIGHT:\n            personaje_x += 10\n        if event.key == K_UP:\n            personaje_y -= 10\n        if event.key == K_DOWN:\n            personaje_y += 10\n...\n```\n\nUna vez programado, observa como al presionar las diferentes teclas de movimiento tu personaje se moverá de una posición a otra. Puedes probar a modificar las coordenadas para crear el videojuego que más te guste.\n\n![](img\u002Fpersonaje-principal.jpg \"Personaje principal\")\n",cdn:"https:\u002F\u002Fraw.githubusercontent.com\u002FProgramoErgoSum\u002FTutoriales\u002Fmaster\u002Fv1\u002Fintroduccion-a-pygame-en-raspberry-pi\u002F",breadcrumbs:[{text:"Tutoriales",disabled:false,to:"\u002Ftutoriales"},{text:a,disabled:true,to:j}]}],fetch:[],mutations:[]}}("Introducción a PyGame en Raspberry Pi",{},Array(1),"Programación","Raspberry Pi","Tutorial de programación de videojuegos en Python utilizando el módulo PyGame.","Secundaria","Bachillerato","Raspbian","","Python")));