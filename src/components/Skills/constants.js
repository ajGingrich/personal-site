import { ENGLISH, SPANISH } from 'constants/constants';

export const SKILLS_TITLE = {
  [ENGLISH]: 'Skills',
  [SPANISH]: 'Habilidades',
};

export const SKILL_CATEGORY_STRONG = 'strong';
export const SKILL_CATEGORY_COMFORTABLE = 'comfortable';
export const SKILL_CATEGORY_FAMILIAR = 'someFamiliarity';

export const SKILLS_RATINGS = {
  tool: {
    [ENGLISH]: 'Tool',
    [SPANISH]: 'Herramienta',
  },
  [SKILL_CATEGORY_STRONG]: {
    [ENGLISH]: 'Strong',
    [SPANISH]: 'Fuerte',
  },
  comfortable: {
    [ENGLISH]: 'Comfortable',
    [SPANISH]: 'Comdo',
  },
  [SKILL_CATEGORY_FAMILIAR]: {
    [ENGLISH]: 'Some Familiarity',
    [SPANISH]: 'Algun Conocomiento',
  },
};

// Data and Analytics
// Dev Ops
// Backend
// Frontend
// Development Tools
// Other?

const FRONT_END = {
  title: 'Front End',
  skills: [
    {
      name: 'React/Redux',
      level: SKILL_CATEGORY_STRONG,
    },
    {
      name: 'ExpressJS',
      level: SKILL_CATEGORY_COMFORTABLE,
    },
    {
      name: 'AngularJS',
      level: SKILL_CATEGORY_FAMILIAR,
    },
  ],
};

export const SKILLS_CATEGORIES = [
  FRONT_END,
];
