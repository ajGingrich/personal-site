import { ENGLISH, SPANISH, SITE_ASSETS } from 'constants/constants';

export const INTERESTS_TITLE = {
  [ENGLISH]: 'Interests',
  [SPANISH]: 'Intereses',
};

const BIKING = {
  image: `${SITE_ASSETS}/carousel_biking.jpg`,
  title: {
    [ENGLISH]: 'Mountain Biking',
    [SPANISH]: 'Ciclismo',
  },
  description: {
    [ENGLISH]: 'I ride my bicycle around three or four times a week in order to stay fit, release stress, and appreciate nature.',
    [SPANISH]: 'Ando en mi bicleta tres o cuatros veces por semana para mantenerme en forma, quitar el éstres, y aprovechar la naturaleza.',
  },
};

const HIKING = {
  image: `${SITE_ASSETS}/carousel_hiking.jpeg`,
  title: {
    [ENGLISH]: 'Hiking and Camping',
    [SPANISH]: 'Senderismo y Acampar',
  },
  description: {
    [ENGLISH]: 'I enjoy single and multiple day excursions. I have taken trips in Yosemite National Park in the United States and Torres del Paine in Chile amongst others.',
    [SPANISH]: 'Me gusta hacer excursiones de un día y también de varios días. He tomado viajes en el Parque Nacional de Yosemite en California y en el Parque Torres del Paines en Chile entre otros.',
  },
};

const CHESS = {
  image: `${SITE_ASSETS}/carousel_chess.jpg`,
  title: {
    [ENGLISH]: 'Chess',
    [SPANISH]: 'Ajedrez',
  },
  description: {
    [ENGLISH]: 'I started to play seriously around 10 years ago and I currently hover around 1800 FIDE ELO. I enjoy dynamic tactics and long term strategy that comes with each game.',
    [SPANISH]: 'Empecé a jugar seriamente hace diez años y actualmente tengo un nivel aproximadamente 1800 (World Chess Federation) FIDE. Me gustan mucha las tácticas y el planeo de larga duración que viene con cada partida.',
  },
};

const SKYDIVING = {
  image: `${SITE_ASSETS}/carousel_skydive.jpg`,
  title: {
    [ENGLISH]: 'Skydiving',
    [SPANISH]: 'Paracaidismo',
  },
  description: {
    [ENGLISH]: `I hold an 'B' license from the United States Parachute Association (USPA). I enjoy the thrill of flying through the sky as well as the planning and preparation involved with every jump.`,
    [SPANISH]: `Tengo la licencia 'B' del "United States Parachute Association" (USPA). Disfruto la adrenalina de volar por el aire tanto como el planeo y la preparación con cada salto.`,
  },
};

const SCUBA_DIVING = {
  image: `${SITE_ASSETS}/carousel_scuba.jpeg`,
  title: {
    [ENGLISH]: 'Scuba Diving',
    [SPANISH]: 'Buceo',
  },
  description: {
    [ENGLISH]: 'I hold a Professional Association of Diving Instructors (PADI) advanced open water diver license and have had the privilege to dive at sites in the Galapagos islands, Cozumel Island in Mexico and Caño Island in Costa Rica.',
    [SPANISH]: 'Tengo la certificación Avanzada de Aguas Abiertas del "Professional Association of Diving Instructors" (PADI) y he tenido el privilegio de bucear en sitios en las Islas Galapagos, Isla Cozumel en Mexico y la Isla Caño en Costa Rica.',
  },
};

const READING = {
  image: `${SITE_ASSETS}/carousel_reading.jpg`,
  style: { color: 'black' },
  title: {
    [ENGLISH]: 'Reading',
    [SPANISH]: 'Leer',
  },
  description: {
    [ENGLISH]: 'I prefer to read classic works from the 19th and 20th centuries. My favorite authors include John Steinbeck, Kurt Vonnegut and Alexandre Dumas.',
    [SPANISH]: 'Me gusta leer las obras clásicas de los siglos XIX y XX. Mis escritores favoritos incluyen John Steinbeck, Kurt Vonnegut and Alexandre Dumas.',
    [ENGLISH]: 'I started to play seriously around 10 years ago and I currently hover around 1800 FIDE ELO. I enjoy dynamic tactics and long term strategy that comes with each game.',
    [SPANISH]: 'Empecé a jugar seriamente hace diez años y actualmente tengo un nivel aproximadamente 1800 (World Chess Federation) FIDE. Me gustan mucha las tácticas y el planeo de larga duración que viene con cada partida.',
  },
};

export const INTERESTS_SLIDESHOW = [
  BIKING,
  CHESS,
  HIKING,
  SKYDIVING,
  SCUBA_DIVING,
  READING,
];
