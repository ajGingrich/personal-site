import { ENGLISH, SPANISH } from 'constants/constants';

export const WORK_EXPERIENCE_TITLE = {
  [ENGLISH]: 'What I\'ve Done',
  [SPANISH]: 'Lo Que He Hecho',
};

const GORILLA_LOGIC = {
  company: 'Gorilla Logic',
  image: 'https://andrewgingrich-site-assets.s3.amazonaws.com/personal-site/work_gorilla.png',
  position: 'Senior Software Engineer',
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
  image: 'https://andrewgingrich-site-assets.s3.amazonaws.com/personal-site/work_avantica.jpeg',
  position: 'Software Engineer',
  imageMargin: '50px',
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

export const POSITIONS = [
  GORILLA_LOGIC,
  AVANTICA,
];
