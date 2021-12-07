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
    [ENGLISH]: 'Proficient',
    [SPANISH]: 'Comdo',
  },
  [SKILL_CATEGORY_FAMILIAR]: {
    [ENGLISH]: 'Familiar',
    [SPANISH]: 'Algun Conocomiento',
  },
};

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

const DEV_OPS = {
  title: 'Dev Ops',
  skills: [
    {
      name: 'Google Cloud',
      level: SKILL_CATEGORY_COMFORTABLE,
    },
    {
      name: 'Kubernetes',
      level: SKILL_CATEGORY_COMFORTABLE,
    },
    {
      name: 'Docker',
      level: SKILL_CATEGORY_COMFORTABLE,
    },
    {
      name: 'AWS',
      level: SKILL_CATEGORY_COMFORTABLE,
    },
  ],
};

const DEVELOPMENT_TOOLS = {
  title: 'Development Tools',
  skills: [
    {
      name: 'Git',
      level: SKILL_CATEGORY_STRONG,
    },
    {
      name: 'NPM/Yarn',
      level: SKILL_CATEGORY_STRONG,
    },
    {
      name: 'Gradle',
      level: SKILL_CATEGORY_FAMILIAR,
    },
    {
      name: 'Pip',
      level: SKILL_CATEGORY_FAMILIAR,
    },
    {
      name: 'Atom',
      level: SKILL_CATEGORY_STRONG,
    },
    {
      name: 'IntelliJ Idea',
      level: SKILL_CATEGORY_COMFORTABLE,
    },
    {
      name: 'Vim',
      level: SKILL_CATEGORY_COMFORTABLE,
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
      name: 'Bootstrap',
      level: SKILL_CATEGORY_STRONG,
    },
    {
      name: 'jQuery',
      level: SKILL_CATEGORY_COMFORTABLE,
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
  DEV_OPS,
  DEVELOPMENT_TOOLS,
];
