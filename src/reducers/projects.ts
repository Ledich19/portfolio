import { createSlice } from '@reduxjs/toolkit';
import { Project } from '../app/types';

type InitialState = {
  projects: Project[];
};

const initialState: InitialState = {
  projects: [
    {
      title: 'my first project',
      image: 'food.jpg',
      technologies: ['html', 'css', 'js'],
      description:
        'Here I used java script html and css. Make tabs, slider, calculator, timer and modal window with timeout and the ability to close ESK. Only javascript was used',
      gitLink: 'https://github.com/Ledich19/petrecenco-project_01',
      deploy: 'https://ledich19.github.io/petrecenco-project_01/',
    },
    {
      title: 'JOHN',
      image: 'john.jpg',
      technologies: ['html', 'css'],
      description: 'just a layout for practice',
      gitLink: 'https://github.com/Ledich19/john',
      deploy: 'https://ledich19.github.io/john/',
    },
    {
      title: 'Async race',
      image: 'asunk-race.png',
      technologies: ['js', 'typescript', 'REST', 'scss'],
      description:
        ' The server for them can be found in the repository https://github.com/mikhama/async-race-api#create-winner',
      gitLink: 'https://github.com/Ledich19/rs_asynk-race',
      deploy: 'https://velvety-salamander-ae4f2e.netlify.app',
    },
    {
      title: 'Online zoo',
      image: 'online-zoo.png',
      technologies: ['html', 'scss', 'js'],
      description: 'Site layout: 2 pages: home and donation. Has complex layout elements',
      gitLink: '',
      deploy: 'https://rolling-scopes-school.github.io/ledich19-JSFE2022Q3/online-zoo/pages/main/',
    },
    {
      title: 'tag game',
      image: 'gem-pazle.png',
      technologies: ['html', 'scss', 'js'],
      description:
        'Game fifteen, made with canvas, has local storage and different difficulty levels. The layout is always solvable.',
      gitLink: '',
      deploy: 'https://rolling-scopes-school.github.io/ledich19-JSFE2022Q3/gem-pazle/',
    },
    {
      title: 'songbird',
      image: 'song-bird.png',
      technologies: ['html', 'scss', 'js'],
      description: 'Bird Song Quiz has two languages: bird gallery and quiz.',
      gitLink: '',
      deploy: 'https://rolling-scopes-school.github.io/ledich19-JSFE2022Q3/songbird/',
    },
    {
      title: 'Online Store',
      image: 'online-shop.png',
      technologies: ['React', 'Redux', 'typescript', 'scss'],
      description: 'working Online Store. sorting, cart, data validation work.',
      gitLink: 'https://github.com/Ledich19/rs_asynk-race',
      deploy: 'https://ledich19-rss-online-store.netlify.app/',
    },
    {
      title: 'Zombie in the house ',
      image: 'zombie-in-the-house.png',
      technologies: ['React', 'Redux', 'typescript', 'scss', 'vite'],
      description:
        '(board game) Based on the board game "Zombies in the House". There is a calculation of the path, you can’t go through the walls; match the original.',
      gitLink: 'https://github.com/Ledich19/rss_zombie-in-the-house-game',
      deploy: 'https://ledich19-rs-clone.netlify.app/',
    },
    {
      title: 'GraphiQL Star Wars',
      image: 'graphi-ql.png',
      technologies: ['React', 'Redux', 'typescript', 'scss', 'vite', 'GraphQl'],
      description: ' Is a playground/IDE for graphQL requests, has authorization with firebase',
      gitLink: 'https://github.com/Ledich19/graphiql-app/tree/development',
      deploy: 'https://graphiql-star-wars.netlify.app/',
    },
    {
      title: 'Battle ship',
      image: 'battle-ship.png',
      technologies: ['NodeJs', 'WebSocket', 'typescript'],
      description:
        'Working sea battle game with frontend and server. working sea battle game with frontend and server',
      gitLink: 'https://github.com/Ledich19/node-battle-ship',
      deploy: '',
    },
    {
      title: 'File manager',
      image: 'console-app.png',
      technologies: ['NodeJs'],
      description:
        'Console application can copy move delete files. Archived cache fetch uses streams',
      gitLink: 'https://github.com/Ledich19/node-file-manager/pull/1',
      deploy: '',
    },
    {
      title: 'node crud api',
      image: 'node-crud-api.png',
      technologies: ['NodeJs', 'typescript'],
      description: 'Node js server without frameworks. there is horizontal scaling using workers',
      gitLink: 'https://github.com/Ledich19/node-crud-api/pull/1',
      deploy: '',
    },
  ],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
});

// export const {} = projectsSlice.actions;
export default projectsSlice.reducer;
