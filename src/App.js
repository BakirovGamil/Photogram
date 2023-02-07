import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from '@/routes/routes';

function App() {
  return (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
}

export default App;
