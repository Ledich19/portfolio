export type Technology =
  | 'html'
  | 'css'
  | 'js'
  | 'typescript'
  | 'REST API'
  | 'scss'
  | 'React'
  | 'Redux'
  | 'GraphQl'
  | 'Node JS'
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
