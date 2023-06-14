import { Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './pages/Page404/Page404';
import Layout from './pages/Layout/Layout';
import Hello from './pages/Hello/Hello';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route index element={<Hello />} />
        <Route path=":id" element={<Hello />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Route>
    </Routes>
  );
};

export default App;
