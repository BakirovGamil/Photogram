import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from '@/routes/routes';
import Header from '@c/header/Header';


function App() {
  return (
    <>
      <Header />
      <Routes>
        {publicRoutes.map((route) => {
          return (
            <Route key={route.path} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
