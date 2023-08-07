export type Technology =
  | 'html'
  | 'css'
  | 'js'
  | 'typescript'
  | 'REST'
  | 'scss'
  | 'React'
  | 'Redux'
  | 'GraphQl'
  | 'NodeJs'
  | 'WebSocket'
  | 'vite'
  | 'Prisma'
  | 'Fastify'
  | 'Nest';

export type Project = {
  title: string;
  image: string;
  technologies: Technology[];
  description: string;
  gitLink: string;
  deploy: string;
};
