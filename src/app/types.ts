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
export type Example = {
  repository: string;
  codeExample: string;
};

export interface OwnerInfo {
  avatar_url: string;
  login: string;
}

export interface RepoInfo {
  owner: OwnerInfo;
  created_at: string;
  stargazers_count: number;
}
export interface CertificateType {
  school: string;
  technologies: Technology[];
  link: string;
  img: string;
}
