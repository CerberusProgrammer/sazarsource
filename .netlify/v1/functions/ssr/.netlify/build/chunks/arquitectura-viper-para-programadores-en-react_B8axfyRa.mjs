const id = "arquitectura-viper-para-programadores-en-react.mdx";
						const collection = "writing";
						const slug = "arquitectura-viper-para-programadores-en-react";
						const body = "\r\n**VIPER** es un patrón de _arquitectura de software_ que se utiliza en el diseño de aplicaciones móviles para separar las responsabilidades y mejorar la modularidad y la escalabilidad del código. **VIPER** es un acrónimo que significa **View, Interactor, Presenter, Entity, Router** y se basa en los principios de la _arquitectura limpia_ y el _diseño orientado a objetos_.\r\n\r\nEl patrón **VIPER** es una evolución del patrón **MVC** (Model-View-Controller) y se utiliza principalmente en el desarrollo de _aplicaciones móviles_ para iOS y Android. **VIPER** se basa en la idea de `separar las responsabilidades` de las diferentes capas de la aplicación y de utilizar interfaces para comunicar entre ellas. Esto permite que el código sea más `modular`, `reutilizable` y `fácil de mantener`. Ademas de que facilita la `escritura de pruebas unitarias` y la `escalabilidad` del código. E incluso permite que diferentes equipos de desarrollo trabajen en paralelo en diferentes partes de la aplicación.\r\n\r\n**VIPER** es una excelente opción para aplicaciones que requieren `trabajo en equipo`, `aplicaciones grandes` y `complejas`, aplicaciones que necesitan ser `escalables` y aplicaciones que necesitan ser `fáciles de mantener` y de `probar`, ademas de ser `altamente flexible`, `modular` y `reutilizable` en cualquier punto de la aplicación.\r\n\r\n## V - View\r\n\r\nLa capa de **View** es la encargada de la `interfaz de usuario` de la aplicación. En esta capa se encuentran las clases que se encargan de mostrar la información al usuario y de recibir las interacciones del usuario. La capa de **View** es la capa más `externa` de la aplicación y es la que se comunica con el usuario.\r\n\r\nLa capa de **View** es la encargada de `renderizar` la interfaz de usuario, de `mostrar` los datos al usuario y de `recibir` las interacciones del usuario.\r\n\r\n## I - Interactor\r\n\r\nLa capa de **Interactor** es la encargada de `contener la lógica de negocio` de la aplicación. En esta capa se encuentran las clases que se encargan de `realizar las operaciones` y de `manipular los datos` de la aplicación. La capa de **Interactor** es la capa más `interna` de la aplicación y es la que se comunica con la capa de **Presenter**.\r\n\r\n## P - Presenter\r\n\r\nLa capa de **Presenter** es la encargada de `contener la lógica de presentación` de la aplicación. En esta capa se encuentran las clases que se encargan de `preparar los datos` para ser mostrados en la capa de **View** y de `manejar las interacciones` del usuario. La capa de **Presenter** es la capa que se encarga de `comunicar` la capa de **View** con la capa de **Interactor**.\r\n\r\n## E - Entity\r\n\r\nLa capa de **Entity** es la encargada de `contener los datos` de la aplicación. En esta capa se encuentran las clases que se encargan de `representar los datos` de la aplicación y de `manipular los datos` de la aplicación. La capa de **Entity** es la capa más `interna` de la aplicación y es la que se comunica con la capa de **Interactor**.\r\n\r\n## R - Router\r\n\r\nLa capa de **Router** es la encargada de `contener la lógica de navegación` de la aplicación. En esta capa se encuentran las clases que se encargan de `navegar` entre las diferentes pantallas de la aplicación y de `comunicar` las diferentes capas de la aplicación. La capa de **Router** es la capa más `externa` de la aplicación y es la que se comunica con la capa de **Presenter**.\r\n\r\n## Caso de uso\r\n\r\nSupongamos el caso donde necesitamos hacer una aplicación web con muchos módulos y funcionalidades, como podría ser un sistema de gestión de inventario para una tienda en línea. En este caso, se podría aplicar el patrón **VIPER** debido a ciertos problemas técnicos y de diseño que se pueden presentar en el desarrollo de la aplicación, visualicemos los problemas técnicos en este caso de uso como lo serían:\r\n\r\n- **Problemas de escalabilidad**: La aplicación necesita ser escalable para poder soportar un gran número\r\n- **Problemas de mantenimiento**: La aplicación necesita ser fácil de mantener y de probar\r\n- **Problemas de modularidad**: La aplicación necesita ser modular para poder ser reutilizable en diferentes partes de la aplicación\r\n- **Problemas de trabajo en equipo**: La aplicación necesita ser fácil de trabajar en equipo y de colaborar con otros desarrolladores\r\n- **Problemas de complejidad**: La aplicación necesita ser fácil de entender y de depurar\r\n- **Problemas de rendimiento**: La aplicación necesita ser eficiente y rápida\r\n- **Problemas de seguridad**: La aplicación necesita ser segura y protegida contra ataques\r\n- **Problemas de usabilidad**: La aplicación necesita ser fácil de usar y de entender\r\n\r\nAplicacion que requieren multiples capas de seguridad, y que cada capa, módulo y funcion sea testeable es donde `VIPER` brillara por su arquitectura limpia y modular. Debido a que `VIPER` es un patrón de arquitectura de software que se utiliza en el diseño de aplicaciones móviles para separar las responsabilidades y mejorar la modularidad y la escalabilidad del código.\r\n\r\n## Ejemplo de estructura de carpetas\r\n\r\n```plaintext\r\n.\r\n├── app\r\n│   ├── modules\r\n│   │   ├── module1\r\n│   │   │   ├── view\r\n│   │   │   ├── interactor\r\n│   │   │   ├── presenter\r\n│   │   │   ├── entity\r\n│   │   │   ├── router\r\n│   │   ├── module2\r\n│   │   │   ├── view\r\n│   │   │   ├── interactor\r\n│   │   │   ├── presenter\r\n│   │   │   ├── entity\r\n│   │   │   ├── router\r\n│   ├── shared\r\n│   │   ├── view\r\n│   │   ├── interactor\r\n│   │   ├── presenter\r\n│   │   ├── entity\r\n│   │   ├── router\r\n```\r\n\r\nEn este ejemplo, se puede ver la estructura de carpetas de una aplicación que utiliza el patrón **VIPER**. La carpeta `app` contiene los módulos de la aplicación, cada módulo tiene una carpeta con las capas de **View**, **Interactor**, **Presenter**, **Entity** y **Router**. La carpeta `shared` contiene las capas compartidas de la aplicación, que pueden ser utilizadas por varios módulos.\r\n\r\nTener en cuenta que la estructura de carpetas puede variar dependiendo de la aplicación y de las necesidades del proyecto, pero en general se recomienda seguir una estructura similar a la mostrada en este ejemplo para mantener el código organizado y fácil de mantener. No siga la estructura de carpetas a rajatabla, sino que adapte la estructura a las necesidades de su proyecto, esta solo es una idea de como podría ser la estructura de carpetas de una aplicación que utiliza el patrón **VIPER**, pero visualice mas a **VIPER** como una guía que le ayudará a tomar decisiones más acertadas en el diseño de software con los componentes de **View**, **Interactor**, **Presenter**, **Entity** y **Router**.\r\n\r\n## Aplicacion teorica\r\n\r\nSupongamos que deseamos diseñar una aplicación de tipo `red social` donde los usuarios puedan `publicar mensajes`, `compartir fotos`, `comentar publicaciones`, `dar me gusta a publicaciones`, `seguir a otros usuarios`, `enviar mensajes privados`, `crear grupos`, `crear eventos`, `crear encuestas`.\r\n\r\nAntes de arrancar al código, intente visualizar que conjuntos se arman en la solicitud de requerimientos, analice previamente lo solicitado, y analicemos juntos.\r\n\r\nPara realizar una abstracción de la aplicación, podemos dividir la aplicación en diferentes módulos, como por ejemplo:\r\n\r\n- **Módulo de Usuarios**: Este módulo se encargaría de gestionar los usuarios de la aplicación, como el registro de nuevos usuarios, el inicio de sesión, la edición de perfil, la búsqueda de usuarios, la lista de seguidores, la lista de seguidos, la lista de amigos, etc.\r\n- **Módulo de Publicaciones**: Este módulo se encargaría de gestionar las publicaciones de los usuarios, como la creación de publicaciones, la edición de publicaciones, la eliminación de publicaciones, la lista de publicaciones, la lista de publicaciones de un usuario, la lista de publicaciones de un grupo, la lista de publicaciones de un evento, etc.\r\n- **Módulo de Mensajes**: Este módulo se encargaría de gestionar los mensajes de los usuarios, como el envío de mensajes, la recepción de mensajes, la lista de mensajes, la lista de mensajes de un usuario, la lista de mensajes de un grupo, la lista de mensajes de un evento, etc.\r\n- **Módulo de Grupos**: Este módulo se encargaría de gestionar los grupos de la aplicación, como la creación de grupos, la edición de grupos, la eliminación de grupos, la lista de grupos, la lista de miembros de un grupo, la lista de publicaciones de un grupo, etc.\r\n- **Módulo de Eventos**: Este módulo se encargaría de gestionar los eventos de la aplicación, como la creación de eventos, la edición de eventos, la eliminación de eventos, la lista de eventos, la lista de asistentes a un evento, la lista de publicaciones de un evento, etc.\r\n- **Módulo de Encuestas**: Este módulo se encargaría de gestionar las encuestas de la aplicación, como la creación de encuestas, la edición de encuestas, la eliminación de encuestas, la lista de encuestas, la lista de respuestas a una encuesta, etc.\r\n- **Módulo de Notificaciones**: Este módulo se encargaría de gestionar las notificaciones de la aplicación, como el envío de notificaciones, la recepción de notificaciones, la lista de notificaciones, la lista de notificaciones de un usuario, etc.\r\n\r\nCada módulo se puede implementar utilizando el patrón **VIPER**, donde cada módulo tendría las capas de **View**, **Interactor**, **Presenter**, **Entity** y **Router**. De esta forma, se puede separar las responsabilidades de cada módulo y mejorar la modularidad y la escalabilidad del código.\r\n\r\n## Aplicacion practica\r\n\r\nSigamos la aplicación teorica anteriormente vista, donde ya establecimos los módulos de la aplicación, ahora vamos a implementar el módulo de **Usuarios** utilizando el patrón **VIPER**.\r\n\r\nEn el ejemplo vamos a utilizar `React` + `TypeScript` para implementar el módulo de **Usuarios** utilizando el patrón **VIPER**. Vamos a crear las capas de **View**, **Interactor**, **Presenter**, **Entity** y **Router** para el módulo de **Usuarios**.\r\n\r\n### View\r\n\r\n#### `UserView.tsx`\r\n\r\n```tsx\r\nimport React from \"react\";\r\n\r\ninterface UserViewProps {\r\n  users: User[];\r\n  onUserClick: (user: User) => void;\r\n}\r\n\r\nconst UserView: React.FC<UserViewProps> = ({ users, onUserClick }) => {\r\n  return (\r\n    <div>\r\n      <h1>Users</h1>\r\n      <ul>\r\n        {users.map((user) => (\r\n          <li key={user.id} onClick={() => onUserClick(user)}>\r\n            {user.name}\r\n          </li>\r\n        ))}\r\n      </ul>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default UserView;\r\n```\r\n\r\n### Interactor\r\n\r\n#### `UserInteractor.ts`\r\n\r\n```tsx\r\nimport { User } from \"./UserEntity\";\r\n\r\nclass UserInteractor {\r\n  getUsers(): User[] {\r\n    // Get users from API\r\n    return [];\r\n  }\r\n}\r\n\r\nexport default UserInteractor;\r\n```\r\n\r\n### Presenter\r\n\r\n#### `UserPresenter.ts`\r\n\r\n```tsx\r\nimport UserInteractor from \"./UserInteractor\";\r\n\r\nclass UserPresenter {\r\n  private interactor: UserInteractor;\r\n\r\n  constructor(interactor: UserInteractor) {\r\n    this.interactor = interactor;\r\n  }\r\n\r\n  getUsers(): User[] {\r\n    return this.interactor.getUsers();\r\n  }\r\n}\r\n\r\nexport default UserPresenter;\r\n```\r\n\r\n### Entity\r\n\r\n#### `UserEntity.ts`\r\n\r\n```tsx\r\nexport interface User {\r\n  id: number;\r\n  name: string;\r\n  email: string;\r\n}\r\n```\r\n\r\n### Router\r\n\r\n#### `UserRouter.ts`\r\n\r\n```tsx\r\nimport UserPresenter from \"./UserPresenter\";\r\n\r\nclass UserRouter {\r\n  private presenter: UserPresenter;\r\n\r\n  constructor(presenter: UserPresenter) {\r\n    this.presenter = presenter;\r\n  }\r\n\r\n  getUsers(): User[] {\r\n    return this.presenter.getUsers();\r\n  }\r\n}\r\n\r\nexport default UserRouter;\r\n```\r\n\r\nEn este ejemplo, se puede ver la implementación del módulo de **Usuarios** utilizando el patrón **VIPER**. La capa de **View** se encarga de renderizar la interfaz de usuario y de recibir las interacciones del usuario. La capa de **Interactor** se encarga de contener la lógica de negocio y de manipular los datos. La capa de **Presenter** se encarga de preparar los datos para ser mostrados en la capa de **View** y de manejar las interacciones del usuario. La capa de **Entity** se encarga de contener los datos de la aplicación. La capa de **Router** se encarga de contener la lógica de navegación de la aplicación.\r\n\r\n## Cuando aplicar VIPER\r\n\r\nPor favor, no aplique de forma bruta y sin sentido **VIPER**, para aplicarlo correctamente al proyecto, requiere pasar previamente por un análisis de requerimientos, y visualizar que capas se pueden separar y que capas se pueden unir, reutilizar, escalar, mantener, probar, depurar, auditar, mejorar, colaborar, entender.\r\n\r\nAntes de emocionarse y aplicar **VIPER** a su proyecto, analice previamente si puede separar las responsabilidades de las diferentes capas de la aplicación y de utilizar interfaces para comunicar entre ellas, esto permitirá que el código sea más modular, reutilizable y fácil de mantener, además de que facilitará la escritura de pruebas unitarias y la escalabilidad del código.\r\n\r\nDebido a que una de las mayores desventajas de **VIPER** es que si no se define previamente un módulo puede ser una tarea tediosa estar reimplementando el patrón **VIPER** en cada módulo y estar separando algo que desde un inicio debio ser separado, para ello use el sentido común y aplique **VIPER** en los módulos que realmente lo necesiten.\r\n\r\n## Cuando no aplicar VIPER\r\n\r\nNo aplique **VIPER** a su proyecto si no necesita separar las responsabilidades de las diferentes capas de la aplicación y de utilizar interfaces para comunicar entre ellas, esto solo complicará el diseño de la aplicación y hará que el código sea más difícil de mantener y de entender.\r\n\r\nNo aplique **VIPER** a su proyecto si no necesita que el código sea más modular, reutilizable y fácil de mantener, ya que esto solo agregará complejidad innecesaria al diseño de la aplicación y hará que el código sea más difícil de entender y de depurar.\r\n\r\nNo aplique **VIPER** a su proyecto si no necesita facilitar la escritura de pruebas unitarias y la escalabilidad del código, ya que esto solo agregará complejidad innecesaria al diseño de la aplicación y hará que el código sea más difícil de probar y de auditar.\r\n\r\nNo aplique **VIPER** a su proyecto si no necesita que diferentes equipos de desarrollo trabajen en paralelo en diferentes partes de la aplicación, ya que esto solo agregará complejidad innecesaria al diseño de la aplicación y hará que el código sea más difícil de colaborar y de entender.\r\n\r\n## Consejos\r\n\r\nComo programadores es facil e incluso tentativo empezar a crear carpetas, archivo y codigo, pero con **VIPER** es importante primero visualizar y analizar los requerimientos, y luego empezar a crear las carpetas, archivos y codigo. No se apresure, tómese su tiempo para analizar los requerimientos y para diseñar la arquitectura de la aplicación, esto le ayudará a tomar decisiones más acertadas y a evitar problemas en el futuro. Sea analítico, visualice, piense, analice, diseñe, cree, pruebe, depure, audite, mejore, colabore, entienda.\r\n\r\nArrancar con **VIPER** puede ser un poco complicado al principio, e incluso tomar mucho tiempo, (el cual es una ventaja y desventaja), pero gracias al tiempo que invierta en el diseño de la arquitectura de la aplicación, le permitirá tener un código más modular, reutilizable y fácil de mantener, ademas de que facilitará la escritura de pruebas unitarias y la escalabilidad del código. Asi que no caiga en el error de que por prisas o por querer terminar rápido, no analice y no diseñe correctamente la arquitectura de la aplicación, es importante arrancar correctamente ya que son los pilares de la aplicación, todos estarán basados en la arquitectura de la aplicación, asi que sea cuidadoso y analítico.\r\n\r\n> **Piense en equipo**, **piense en la comunidad**, **piense en el futuro**.\r\n";
						const data = {title:"Arquitectura VIPER para programadores en React",description:"VIPER es un patrón de arquitectura de software que se utiliza en el diseño de aplicaciones móviles para separar las responsabilidades y mejorar la modularidad y la escalabilidad del código.",pubDate:new Date(1728716400000)};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Omar/Documents/sazarsource/src/content/writing/arquitectura-viper-para-programadores-en-react.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
