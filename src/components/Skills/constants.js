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
// Frontend
// Development Tools
// Other?

const LANGUAGES = {
  title: 'Languages',
  skills: [
    {
      name: 'JavaScript',
      level: SKILL_CATEGORY_STRONG,
    },
    {
      name: 'Java',
      level: SKILL_CATEGORY_COMFORTABLE,
    },
    {
      name: 'Python',
      level: SKILL_CATEGORY_COMFORTABLE,
    },
    {
      name: 'Ruby',
      level: SKILL_CATEGORY_COMFORTABLE,
    },
    {
      name: 'C',
      level: SKILL_CATEGORY_FAMILIAR,
    },
  ],
};

const FRONT_END = {
  title: 'Front End',
  skills: [
    {
      name: 'React/Redux',
      level: SKILL_CATEGORY_STRONG,
    },
    {
      name: 'HTML/CSS',
      level: SKILL_CATEGORY_STRONG,
    },
    {
      name: 'AngularJS',
      level: SKILL_CATEGORY_FAMILIAR,
    },
  ],
};

const BACK_END = {
  title: 'Back End',
  skills: [
    {
      name: 'Docker',
      level: SKILL_CATEGORY_COMFORTABLE,
    },
    {
      name: 'ExpressJS',
      level: SKILL_CATEGORY_COMFORTABLE,
    },
    {
      name: 'Node',
      level: SKILL_CATEGORY_COMFORTABLE,
    },
    {
      name: 'Ruby on Rails',
      level: SKILL_CATEGORY_COMFORTABLE,
    },
    {
      name: 'Hibernate',
      level: SKILL_CATEGORY_FAMILIAR,
    },
    {
      name: 'MySQL',
      level: SKILL_CATEGORY_COMFORTABLE,
    },
    {
      name: 'PostgreSQL',
      level: SKILL_CATEGORY_COMFORTABLE,
    },
    {
      name: 'Spring Boot',
      level: SKILL_CATEGORY_FAMILIAR,
    },
  ],
};

export const SKILLS_CATEGORIES = [
  LANGUAGES,
  FRONT_END,
  BACK_END,
];
