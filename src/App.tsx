import { Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './pages/Page404/Page404';
import Layout from './pages/Layout/Layout';
import Hello from './pages/Hello/Hello';
import Projects from './pages/Projects/Projects';

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route index element={<Hello />} />

        <Route path="projects" element={<Projects />} />
        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Route>
    </Routes>
  );
};

export default App;
