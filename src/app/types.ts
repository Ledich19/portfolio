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
  | 'vite';

export type Project = {
  title: string;
  image: string;
  technologies: Technology[];
  description: string;
  gitLink: string;
  deploy: string;
};
