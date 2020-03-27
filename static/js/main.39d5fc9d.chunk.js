(this["webpackJsonpsprint-planning"]=this["webpackJsonpsprint-planning"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"sprintId":1,"content":[{"id":"D01","description":"Definir tecnolog\xedas","completed":true,"tasks":[{"id":1,"description":"Revisi\xf3n de lenguajes / frameworks para frontend seg\xfan las necesidades planteadas","inCharge":"Luis Lira"},{"id":2,"description":"Revisi\xf3n de lenguajes / frameworks para backend seg\xfan las necesidades planteadas.","inCharge":"Luis Lira"},{"id":3,"description":"Revisi\xf3n de bases de datos (Sql o NoSql) seg\xfan las necesidades y plataformas para despliegue.","inCharge":"Luis Lira"}],"comments":["Se buscar\xe1 informaci\xf3n sobre las tecnolog\xedas que permitan la creaci\xf3n \xe1gil de la API"],"conditions":[]},{"id":"D02","description":"Dise\xf1o de datos","completed":true,"tasks":[{"id":4,"description":"Definici\xf3n de estructura de datos seg\xfan la informaci\xf3n disponible en el sitio oficial (Formato de los objetos JSON)","inCharge":"Luis Lira"},{"id":5,"description":"Creaci\xf3n de archivo JSON con el formato y los campos qu\xe9 contendr\xe1 que ya fueron definidos.","inCharge":"Luis Lira"}],"comments":["Se definir\xe1 de qu\xe9 manera se organizar\xe1 el formato JSON para la informaci\xf3n de cada elemento de la BDD."],"conditions":[]},{"id":"D03","description":"Creaci\xf3n de servidor","completed":true,"tasks":[{"backlogId":"D03","id":6,"description":"Inicializar el proyecto con las dependencias necesarias","inCharge":"Luis Lira"},{"backlogId":"D03","id":7,"description":"Crear el archivo que corre el servidor","inCharge":"Luis Lira"},{"backlogId":"D03","id":8,"description":"Preparar la configuraci\xf3n de variables de entorno","inCharge":"Luis Lira"},{"backlogId":"D03","id":9,"description":"Verificar que el servidor est\xe9 escuchando correctamente en el puerto indicado con la variable de entorno.","inCharge":"Luis Lira"}],"comments":["Se levantar\xe1 en local el servidor y se probar\xe1 que funcione correctamente."],"conditions":[]},{"id":"D04","description":"Creaci\xf3n Mockup base","completed":true,"tasks":[{"backlogId":"D04","id":10,"description":"Crear JSON con la estructura requerida y captura la informaci\xf3n de al menos 3 campeones","inCharge":"Luis Lira"}],"comments":["Se crear\xe1 un archivo JSON con el formato definido de datos para trabajar durante el desarrollo."],"conditions":[]},{"id":"D05","description":"Creaci\xf3n de Base de datos en el servidor local","completed":true,"tasks":[{"backlogId":"D05","id":11,"description":"Instalaci\xf3n de Base de datos","inCharge":"Luis Lira"},{"backlogId":"D05","id":12,"description":"Generaci\xf3n de la cadena de conexi\xf3n para que sea puesta como variable de entorno.","inCharge":"Luis Lira"}],"comments":["Se crear\xe1 la instancia de la base de datos, as\xed como determinar la cadena de conexi\xf3n a la misma."],"conditions":[]},{"id":"D10","description":"Creaci\xf3n de Web Scraper","completed":true,"tasks":[{"backlogId":"D10","id":50,"description":"An\xe1lisis de las p\xe1ginas de las que se extraer\xe1 la informaci\xf3n","inCharge":"Luis Lira"},{"backlogId":"D10","id":51,"description":"Instalaci\xf3n de Puppetter para creaci\xf3n de web scraper","inCharge":"Luis Lira"},{"backlogId":"D10","id":52,"description":"Sraper para obtener nombre de campeones","inCharge":"Luis Lira"},{"backlogId":"D10","id":53,"description":"Sraper para obtener informaci\xf3n de campeones extrayendo los nombres del archivo .json generado con los nombres","inCharge":"Luis Lira"},{"backlogId":"D10","id":54,"description":"Creaci\xf3n de script para unir la informaci\xf3n de todos los .json creados para cada campe\xf3n","inCharge":"Luis Lira"}],"comments":["Se crear\xe1 un Web Scraper encargado de obtener la informaci\xf3n de los campeones en las p\xe1ginas de League of Legends"],"conditions":["El Web scraper primero debe crear un archivo .json con la informaci\xf3n de los nombres de todos los campeones","Los nombres de los campeones que contengan con commila simple (\') y espacios ( ) deber\xe1n ser sustituidos esos caracteres por guiones medios (-).","La informaci\xf3n recopilada debe guardarse en el mismo formato que se espec\xedfico en el dise\xf1o de la estructura de datos en formato .json","Al final el web scraper deber\xe1 contener un script para hacer un merge de todos los archivos generados."]},{"id":"D06","description":"Recopilaci\xf3n de datos","completed":true,"tasks":[{"backlogId":"D06","id":13,"description":"Creaci\xf3n de archivo JSON donde contenga la informaci\xf3n de los campeones","inCharge":"Luis Lira"},{"backlogId":"D06","id":14,"description":"Revisi\xf3n de que la informaci\xf3n sea correcta","inCharge":"Luis Lira"}],"comments":["Se crear\xe1 un archivo con un Arreglo de objetos en JSON para recopilar la informaci\xf3n."],"conditions":[]},{"id":"HU01","description":"Creaci\xf3n de petici\xf3n HTTP GET (all)","completed":true,"tasks":[{"backlogId":"HU01","id":15,"description":"Creaci\xf3n de endpoint para recibir petici\xf3n GET (Todos)","inCharge":"Luis Lira"},{"backlogId":"HU01","id":16,"description":"Verificar funcionamiento de endpoint con Postman","inCharge":"Luis Lira"}],"comments":["Los usuarios podr\xe1n obtener toda la informaci\xf3n de la Tabla/Colecci\xf3n campeones."],"conditions":["La informaci\xf3n de cada campe\xf3n debe estar en formato JSON","Todos los objetos deben venir en un arreglo","En caso de error, debe regresar un objeto con el c\xf3digo y mensaje de error","La API debe permitir la petici\xf3n desde un dominio y desde localhost","El endpoint debe comenzar desde \u201capi/\u201d","El endpoint debe tener el nombre de tabla/colecci\xf3n de la base de datos, por ejemplo \u201capi/champions\u201d","Por medio de los par\xe1metros de b\xfasqueda se debe poder hacer filtro por regi\xf3n y/o rol","Por medio de los par\xe1metros de b\xfasqueda se debe poder hacer limitaci\xf3n de resultados devueltos"]},{"id":"HU02","description":"Creaci\xf3n de petici\xf3n HTTP GET (one)","completed":true,"tasks":[{"backlogId":"HU02","id":17,"description":"Creaci\xf3n de endpoint para recibir petici\xf3n GET (S\xf3lo uno)","inCharge":"Luis Lira"},{"backlogId":"HU02","id":18,"description":"Verificar funcionamiento de endpoint con Postman","inCharge":"Luis Lira"}],"comments":["Los usuarios podr\xe1n obtener s\xf3lo los datos de un solo campe\xf3n de la Tabla/Colecci\xf3n campeones"],"conditions":["La informaci\xf3n debe estar en formato JSON","En caso de error, debe regresar un objeto con el c\xf3digo y mensaje de error","La API debe permitir la petici\xf3n desde un dominio y desde localhost","El endpoint debe comenzar desde \u201capi/campeones/[nombre del campe\xf3n]\u201d","El endpoint para cada campe\xf3n debe ser con su nombre"]}]},{"sprintId":2,"content":[{"id":"HU03","description":"Simular petici\xf3n HTTP PUT hacia la API","completed":false,"tasks":[{"backlogId":"HU03","id":19,"description":"Creaci\xf3n de endpoint para recibir petici\xf3n PUT","inCharge":"Luis Lira"},{"backlogId":"HU03","id":20,"description":"Verificar funcionamiento de endpoint con Postman","inCharge":"Luis Lira"}],"comments":["La petici\xf3n no debe interactuar con la base de datos, s\xf3lo debe usar un delay de 1 segundo"],"conditions":["La petici\xf3n no actuar\xe1 directamente sobre lo base de datos, es decir, no actualizar\xe1 realmente el recurso, sino que, al usar el endpoint con PUT, se procesar\xe1 solamente en el servidor y tras un retraso de 1 regresar\xe1 un objeto con el c\xf3digo de estado 200 y el nombre del campe\xf3n al que le \u201cactualiz\xf3\u201d la informaci\xf3n.","El retraso con el que se enviar\xe1 la respuesta de la petici\xf3n debe hacerse con un m\xe9todo as\xedncrono para que no detenga el hilo de ejecuci\xf3n del servidor.","En caso de error, debe regresar un objeto con el c\xf3digo y mensaje de error.","La API debe permitir la petici\xf3n desde un dominio y desde localhost.","El endpoint debe comenzar desde \u201capi/champions/[nombre del campe\xf3n]\u201d"]},{"id":"HU04","description":"Simular petici\xf3n HTTP POST hacia la API","completed":false,"tasks":[{"backlogId":"HU04","id":21,"description":"Creaci\xf3n de endpoint para recibir petici\xf3n POST","inCharge":"Luis Lira"},{"backlogId":"HU04","id":22,"description":"Verificar funcionamiento de endpoint con Postman","inCharge":"Luis Lira"}],"comments":["La petici\xf3n no debe interactuar con la base de datos, s\xf3lo debe usar un delay de 1 segundo"],"conditions":["La petici\xf3n no actuar\xe1 directamente sobre lo base de datos, es decir, no crear\xe1 realmente el recurso, sino que, al usar el endpoint con POST, se procesar\xe1 solamente en el servidor y tras un retraso de 1 regresar\xe1 un objeto con el c\xf3digo de estado 200 y el nombre del campe\xf3n al que fue creado.","El retraso con el que se enviar\xe1 la respuesta de la petici\xf3n debe hacerse con un m\xe9todo as\xedncrono para que no detenga el hilo de ejecuci\xf3n del servidor.","En caso de error, debe regresar un objeto con el c\xf3digo y mensaje de error.","La API debe permitir la petici\xf3n desde un dominio y desde localhost.","El endpoint debe comenzar desde \u201capi/champions/[nombre del campe\xf3n]\u201d"]},{"id":"HU05","description":"Simular petici\xf3n HTTP DELETE hacia la API","completed":false,"tasks":[{"backlogId":"HU05","id":23,"description":"Creaci\xf3n de endpoint para recibir petici\xf3n DELETE","inCharge":"Luis Lira"},{"backlogId":"HU05","id":24,"description":"Verificar funcionamiento de endpoint con Postman","inCharge":"Luis Lira"}],"comments":["La petici\xf3n no debe interactuar con la base de datos, s\xf3lo debe usar un delay de 1 segundo"],"conditions":["La petici\xf3n no actuar\xe1 directamente sobre lo base de datos, es decir, no eliminar\xe1 realmente el recurso, sino que, al usar el endpoint con DELETE, se procesar\xe1 solamente en el servidor y tras un retraso de 1 segundo regresar\xe1 un objeto con el c\xf3digo de estado 200 y el nombre del campe\xf3n al que fue eliminado.","El retraso con el que se enviar\xe1 la respuesta de la petici\xf3n debe hacerse con un m\xe9todo as\xedncrono para que no detenga el hilo de ejecuci\xf3n del servidor.","En caso de error, debe regresar un objeto con el c\xf3digo y mensaje de error.","La API debe permitir la petici\xf3n desde un dominio y desde localhost.","El endpoint debe comenzar desde \u201capi/champions/[nombre del campe\xf3n]\u201d"]}]},{"sprintId":3,"content":[{"id":"D07","description":"Creaci\xf3n de documentaci\xf3n de la API","completed":false,"tasks":[{"backlogId":"D07","id":25,"description":"Redacci\xf3n de los ejemplos y documentaci\xf3n para peticiones GET","inCharge":"Luis Lira"},{"backlogId":"D07","id":26,"description":"Redacci\xf3n de los ejemplos y documentaci\xf3n para peticiones POST","inCharge":"Luis Lira"},{"backlogId":"D07","id":27,"description":"Redacci\xf3n de los ejemplos y documentaci\xf3n para peticiones PUT","inCharge":"Luis Lira"},{"backlogId":"D07","id":28,"description":"Redacci\xf3n de los ejemplos y documentaci\xf3n para peticiones DELETE","inCharge":"Luis Lira"}],"comments":["Se crear\xe1n los ejemplos de uso de la API para los usuarios.","Los ejemplos de uso deber\xe1n especificar c\xf3mo se realizar\xe1 la petici\xf3n a la API y con ejemplos de lo que devolver\xe1 en caso de \xe9xito o de error."],"conditions":[]},{"id":"HU06","description":"Simular petici\xf3n HTTP DELETE hacia la API","completed":false,"tasks":[{"backlogId":"HU06","id":29,"description":"Creaci\xf3n de Layout del sitio","inCharge":"Luis Lira"},{"backlogId":"HU06","id":30,"description":"Creaci\xf3n de barra de navegaci\xf3n","inCharge":"Luis Lira"},{"backlogId":"HU06","id":31,"description":"Creaci\xf3n de secci\xf3n de bievenida","inCharge":"Luis Lira"},{"backlogId":"HU06","id":32,"description":"Creaci\xf3n de footer","inCharge":"Luis Lira"},{"backlogId":"HU06","id":33,"description":"Creaci\xf3n de barra de navegaci\xf3n","inCharge":"Luis Lira"}],"comments":["Se crear\xe1 la p\xe1gina principal al entrar por la ruta \u201c/\u201d a la API."],"conditions":["El sitio debe tener un estilo minimalista","El sitio debe tener una barra de navegaci\xf3n con la opci\xf3n de ir a hacia la documentaci\xf3n","En la p\xe1gina principal del sitio debe haber un ejemplo de uso con el endpoint de la API"]}]},{"sprintId":4,"content":[{"id":"D08","description":"Llenado de BDD con toda la informaci\xf3n recopilada de los campeones.","completed":false,"tasks":[{"backlogId":"D08","id":34,"description":"Importaci\xf3n del json campeones.json a la instancia de la base de datos","inCharge":"Luis Lira"}],"comments":["Se cargar\xe1 el archivo JSON con toda la informaci\xf3n recopilada en la BDD.","S\xf3lo se importar\xe1 el archivo campeones.json a la base de datos y se confirmar\xe1 que se haya creado correctamente."],"conditions":[]},{"id":"HU07","description":"Creaci\xf3n de documentaci\xf3n de la API","completed":false,"tasks":[{"backlogId":"HU07","id":35,"description":"Creaci\xf3n de p\xe1gina est\xe1tica para la documentaci\xf3n","inCharge":"Luis Lira"},{"backlogId":"HU07","id":36,"description":"Creaci\xf3n de men\xfa de navegaci\xf3n por la API","inCharge":"Luis Lira"},{"backlogId":"HU07","id":37,"description":"Creaci\xf3n de secci\xf3n enfocado a las peticiones GET (All y filtros) y GET (One)","inCharge":"Luis Lira"},{"backlogId":"HU07","id":38,"description":"Ejemplos de respuestas de las peticiones GET","inCharge":"Luis Lira"},{"backlogId":"HU07","id":39,"description":"Creaci\xf3n de secci\xf3n enfocado a las peticiones PUT","inCharge":"Luis Lira"},{"backlogId":"HU07","id":40,"description":"Ejemplos de respuestas de las peticiones PUT","inCharge":"Luis Lira"},{"backlogId":"HU07","id":41,"description":"Creaci\xf3n de secci\xf3n enfocado a las peticiones POST","inCharge":"Luis Lira"},{"backlogId":"HU07","id":42,"description":"Ejemplos de respuestas de las peticiones POST","inCharge":"Luis Lira"},{"backlogId":"HU07","id":43,"description":"Creaci\xf3n de secci\xf3n enfocado a las peticiones DELETE","inCharge":"Luis Lira"},{"backlogId":"HU07","id":44,"description":"Ejemplos de respuestas de las peticiones DELETE","inCharge":"Luis Lira"}],"comments":["Se crear\xe1 una vista \u201c/docs\u201d para poner la documentaci\xf3n creada"],"conditions":["La documentaci\xf3n debe de tener un ejemplo de c\xf3mo hacer las peticiones con al menos 3 lenguajes de programaci\xf3n.","Cada campo del objeto JSON que regresar\xe1 deber\xe1 tener una peque\xf1a descripci\xf3n de qu\xe9 es y de qu\xe9 tipo de datos es el valor del campo.","La documentaci\xf3n debe estar organizada en el siguiente orden: GET All, GET One, POST, PUT, DELETE","Debe haber un men\xfa lateral permita navegar entre la documentaci\xf3n"]},{"id":"HU08","description":"Recuadro para poder probar la API sin salir del sitio","completed":false,"tasks":[{"backlogId":"HU08","id":45,"description":"Creaci\xf3n de formulario con los siguientes elementos: Input con direcci\xf3n de la API, Input para ingresar nombre del campe\xf3n, Bot\xf3n para realizar b\xfaqueda","inCharge":"Luis Lira"},{"backlogId":"HU08","id":46,"description":"Creaci\xf3n de script encargado de hacer fetch hacia la API","inCharge":"Luis Lira"},{"backlogId":"HU08","id":47,"description":"Creaci\xf3n de textarea donde se representar\xe1 formateada la informaci\xf3n devuelta por la API","inCharge":"Luis Lira"}],"comments":["Se agregar\xe1 un formulario donde el usuario pueda probar la API para obtener todos o un solo campe\xf3n de la BDD."],"conditions":["El recuadro para probar la API debe ser f\xe1cil de reconocer","El \xe1rea del recuadro debe tener un input donde el usuario pueda poner de manera opcional el nombre de uno de los campeones","Debe haber un textarea donde se mostrar\xe1 la respuesta que regresa la API","La respuesta de la API debe estar formateada en la estructura de un JSON para que sea m\xe1s legible"]},{"id":"D09","description":"Despliegue de la aplicaci\xf3n","completed":false,"tasks":[{"backlogId":"D09","id":48,"description":"Hacer commit de los \xfaltimo cambios y subirlos al repositorio en GtiHub","inCharge":"Luis Lira"},{"backlogId":"D09","id":49,"description":"Despliegue de la aplicaci\xf3n en el hosting gratuito que se encontr\xf3","inCharge":"Luis Lira"}],"comments":["Se har\xe1 el despliegue de la aplicaci\xf3n y pruebas de funcionamiento en la plataforma que se seleccion\xf3 junto a la definici\xf3n de tecnolog\xedas.","Las pruebas funcionamiento consistir\xe1n a hacer llamadas a la API desde postman, desde un navegador y desde el recuadro de prueba de la p\xe1gina."],"conditions":[]}]}]')},,function(e,a,n){e.exports=n(14)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var i=n(0),r=n.n(i),o=n(2),d=n.n(o),s=n(4),c=(n(10),function(e){e.backlogId;var a=e.description,n=e.inCharge;return r.a.createElement("div",{className:"task"},r.a.createElement("p",{className:"task__description"},a),r.a.createElement("p",{className:"task__in-charge"},r.a.createElement("b",null,"Encargado:")," ",n))}),t=(n(11),function(e){var a=e.id,n=e.description,i=e.tasks,o=e.comments,d=void 0===o?[]:o,s=e.conditions,t=void 0===s?[]:s,l=e.completed;return r.a.createElement("div",{className:"Card"},r.a.createElement("h4",{className:"Card__title ".concat(l?"completed":"")},a," - ",n),r.a.createElement("div",{className:"Card__content"},d.length>0&&r.a.createElement("div",{className:"Card__comments"},r.a.createElement("p",null,r.a.createElement("b",null,"Comentarios")),d.map((function(e,a){return r.a.createElement("p",{key:a},"- ",e)}))),r.a.createElement("p",null,r.a.createElement("b",null,"Tareas:")),r.a.createElement("div",{className:"Card__tasks"},i.map((function(e){return r.a.createElement(c,Object.assign({},e,{key:e.id}))}))),t.length>0&&r.a.createElement("div",{className:"Card__conditions"},r.a.createElement("p",null,r.a.createElement("b",null,"Condiciones")),t.map((function(e,a){return r.a.createElement("p",{key:a},"- ",e)})))))}),l=n(3),p=(n(12),function(){var e=Object(i.useState)([]),a=Object(s.a)(e,2),n=a[0],o=a[1];return Object(i.useEffect)((function(){o(l)}),[n]),r.a.createElement(r.a.Fragment,null,n.map((function(e){return r.a.createElement("section",{key:e.sprintId},r.a.createElement("header",null,"Sprint Planning #",e.sprintId),r.a.createElement("div",{className:"PlanningGrid container"},e.content.map((function(e){return r.a.createElement(t,Object.assign({},e,{key:e.id}))}))))})))});n(13);var m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"members"},r.a.createElement("h1",null,"Proyecto: ",r.a.createElement("b",null,"League of Legends API")),r.a.createElement("span",null,"Product Owner: ",r.a.createElement("b",null,"Adri\xe1n Gonz\xe1lez")),r.a.createElement("span",null,"Scrum Master: ",r.a.createElement("b",null,"Jos\xe9 Guti\xe9rrez")),r.a.createElement("span",null,"Desarrollador: ",r.a.createElement("b",null,"Luis Lira")),r.a.createElement("span",{className:"taskStatus"},r.a.createElement("div",{className:"completedStatus"}),r.a.createElement("span",null,"Completado")),r.a.createElement("span",{className:"taskStatus"},r.a.createElement("div",{className:"uncompletedStatus"}),r.a.createElement("span",null,"Incompleto"))),r.a.createElement(p,null))};d.a.render(r.a.createElement(m,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.39d5fc9d.chunk.js.map