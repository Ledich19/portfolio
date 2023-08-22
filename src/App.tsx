import { Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './pages/Page404/Page404';
import Layout from './pages/Layout/Layout';
import Hello from './pages/Hello/Hello';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Bio from './components/AboutInfo/Bio/Bio';
import University from './components/AboutInfo/University/University';
import Courses from './components/AboutInfo/Courses/Courses';

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route index element={<Hello />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />}>
          <Route path="bio" element={<Bio />} />
          <Route path="university" element={<University />} />
          <Route path="courses" element={<Courses />} />
        </Route>
        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Route>
    </Routes>
  );
};

export default App;
