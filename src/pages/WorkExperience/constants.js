import { ENGLISH, SPANISH, SITE_ASSETS } from 'constants/constants';

export const WORK_EXPERIENCE_TITLE = {
  [ENGLISH]: 'Professional',
  [SPANISH]: 'Profesional',
};

export const EDUCATION_TITLE = {
  [ENGLISH]: 'Education',
  [SPANISH]: 'Educación',
};

const GORILLA_LOGIC = {
  company: 'Gorilla Logic',
  image: `${SITE_ASSETS}/work_gorilla.png`,
  position: {
    [ENGLISH]: 'Senior Software Engineer',
    [SPANISH]: 'Senior Software Engineer',
  },
  imageMargin: '20px',
  startDate: {
    [ENGLISH]: 'November 2020',
    [SPANISH]: 'noviembre 2020',
  },
  endDate: null,
  location: 'Cartago, Costa Rica',
  description: {
    [ENGLISH]: 'I currently work as a Senior Software Engineer for Gorilla Logic. As with Avantica, I work directly with a development team in the United States. Although I primarily write front-end code with React/Redux, I have also been developing with Ruby on Rails as I migrate existing portions of the application from Rails into React.',
    [SPANISH]: 'Actualmente trabajo como Desarrollador de Software Senior en Gorilla Logic. Parecido a Avantica, trabajo directamente con un equipo de desarollo ubicado en los Estados Unidos. Principalmente escribo codigo front-end en React/Redux pero también he estado desarollando en Ruby on Rails en el proceso de migrar porciones de la applicación de Rails a React.',
  },
};

const AVANTICA = {
  company: 'Avantica',
  image: `${SITE_ASSETS}/work_avantica.jpeg`,
  position: {
    [ENGLISH]: 'Software Engineer',
    [SPANISH]: 'Ingeniero de Software',
  },
  imageMargin: '70px',
  startDate: {
    [ENGLISH]: 'December 2018',
    [SPANISH]: 'diciembre 2018',
  },
  endDate: {
    [ENGLISH]: 'November 2020',
    [SPANISH]: 'noviembre 2020',
  },
  location: 'Cartago, Costa Rica',
  description: {
    [ENGLISH]: 'I worked for Avantica and produced for their client, communicating over Slack with a development team and Project Manager based in Austin, Texas. Similarly to SBR, I worked on both the front-end and back-end as a true Full Stack Software Engineer in an Agile team. On the back-end, I built RESTful APIs using Grails and a MySQL database. On the front-end, I helped build a dashboard using React and Redux for displaying media analysis with interactive charts and widgets. We pushed code to production everyday using a steamlined CI/CD pipeline and feature flags.',
    [SPANISH]: 'Trabajé por Avantica y producé por su cliente, comunicando con Slack con un equipo de desarrollo y Director de Proyecto radicado en Austin, Texas. Parecido a SBR, trabajo en ambos front-end y back-end como un verdadero ingeniero full-stack en un equipo ágil. En la parte back-end, usé Java con Grails y un base de datos de MySQL. En la parte front-end, el equipo hizo una transición de un antiguo base de código en AngularJS a un nuevo estructura con React. Dado que la aplicación estuvo en producción con varios clientes, trabajé con los dos repositorios. Empujemos código a producción todos los días con un proceso eficiente.',
  },
};

const SBR = {
  company: 'SBR Netmarketing',
  image: `${SITE_ASSETS}/work_sbr.png`,
  position: {
    [ENGLISH]: 'Software Developer',
    [SPANISH]: 'Desarrollador de Programas',
  },
  imageMargin: '80px',
  startDate: {
    [ENGLISH]: 'November 2017',
    [SPANISH]: 'noviembre 2017',
  },
  endDate: {
    [ENGLISH]: 'December 2018',
    [SPANISH]: 'diciembre 2018',
  },
  location: 'Santa Ana, Costa Rica',
  description: {
    [ENGLISH]: 'I worked with JavaScript (ES6), Node, React, Redux, and Sass on the front-end and I also developed with our back-end utlizing PostgreSQL and GraphQL. I implemented JSX with Sass styling for a wide variety of browsers and devices. As part of an agile development team, I communicated effectively with all members including client and Quality Assurance to ensure the exact feature is produced or bug resolved. We participated in peer code reviews for every pull request so that the code is maintainable and scalable. This position gave me a platform for my drive to learn and continuously improve in every aspect of development.',
    [SPANISH]: 'Trabajé con JavaScript (ES6), Node, React, Redux, y Sass en la parte de front-end y tambíen en la parte de back-end, lo que incluye PostgreSQL y GraphQL. Implementé JSX con estilos de Sass para soporte de una gran cantidad de browsers y dispostivos. Como parte de un equipo agil, comuniqué efictavamente a todos los miembres incluyendo QA y el cliente para asegurarnos que el nuevo parte se produce exactamente a la expectiva o que la falla sea resuelta. Participamos en revisión del codigo por cada pull request para que el codigo es mantenible y escalable. Este puesto me dio la oportunidad de seguir aprendiendo y mejorarando en cada aspecto de desarrallo.',
  },
};

const WRA = {
  company: 'Whitman, Requardt, & Associates, LLP.',
  image: `${SITE_ASSETS}/work_wra.png`,
  position: {
    [ENGLISH]: 'Transportation Engineer',
    [SPANISH]: 'Diseñador de autopistas',
  },
  imageMargin: '40px',
  startDate: {
    [ENGLISH]: 'Summer 2012',
    [SPANISH]: 'julio 2012',
  },
  endDate: {
    [ENGLISH]: 'Fall 2014',
    [SPANISH]: 'octubre 2014',
  },
  location: 'Blacksburg, Virginia',
  description: {
    [ENGLISH]: 'After graduating from Virginia Tech, I secured a position with WRA in the branch office in Blacksburg, Virginia. I was able to immediately implement many of the skills learned in the internship with the Department of Transportation. My primary project was a section of Interstate 81 and I worked with all aspects of the design, from horizontal and vertical geometrics to creating cost estimates at each stage for the client. I continued using CAD, primarily focusing on Microstation v8i and also using AutoCad Civil 3D. I developed an in-depth knowledge for Geopak Road, specifically for developing the cross sections on Interstate 81 that run simultaneously with multiple profiles.',
    [SPANISH]: 'Después de graduarme de Virginia Tech, conseguí un puesto con WRA en la oficina en Blacksburg, Virginia. De inmediato podía usar muchas de las hablidades que aprendí durante mi práctica profesional con el gobierno. Mi proyecto principal fue una parte de la carretera interstatal 81 y trabajé todos los aspectos del diseño, desde los geométricos horizontales y verticales hasta hacer presupuestos en cada etapa para el cliente. Seguí usando CAD, enfocandome en Microstation v8i y también usando AutoCad Civil 3D. Desarollé un intenso conocimiento en Geopak Road, específicamente para desarollar las secciones represtantatvas de la carretera interstatal la cual tiene varios perfiles.',
  },
};

const VIRGINIA_TECH = {
  company: 'Virginia Tech',
  image: `${SITE_ASSETS}/work_vt.jpeg`,
  position: {
    [ENGLISH]: 'B.S. in Civil and Environmental Engineering',
    [SPANISH]: 'Licenciatura en Ingeniería Civil',
  },
  imageMargin: '30px',
  startDate: {
    [ENGLISH]: '2008',
    [SPANISH]: '2008',
  },
  endDate: {
    [ENGLISH]: '2012',
    [SPANISH]: '2012',
  },
  location: 'Blacksburg, Virginia',
  description: {
    [ENGLISH]: 'I spent four important years at Virginia Tech, and was pushed by professors and peers into developing more acute critical thinking skills as well as other important abilities such as organization and project management. In collaboration with an internship with Eastern Federal Lands Highway Division, I learned the importance of verbal and written communication. I maintain close contact with a few peers in order to collaborate on projects via web resources such as GitHub and similar. I also learned specifically about Civil Engineering topics such as structural analysis of steel and concrete structures, fluid dynamics, materials engineering and optimizing projects for environmental protection.',
    [SPANISH]: 'Después de graduarme de Virginia Tech, conseguí un puesto con WRA en la oficina en Blacksburg, Virginia. De inmediato podía usar muchas de las hablidades que aprendí durante mi práctica profesional con el gobierno. Mi proyecto principal fue una parte de la carretera interstatal 81 y trabajé todos los aspectos del diseño, desde los geométricos horizontales y verticales hasta hacer presupuestos en cada etapa para el cliente. Seguí usando CAD, enfocandome en Microstation v8i y también usando AutoCad Civil 3D. Desarollé un intenso conocimiento en Geopak Road, específicamente para desarollar las secciones represtantatvas de la carretera interstatal la cual tiene varios perfiles.',
  },
};

export const POSITIONS = [
  GORILLA_LOGIC,
  AVANTICA,
  SBR,
  WRA,
];

export const EDUCATION = [
  VIRGINIA_TECH,
];
