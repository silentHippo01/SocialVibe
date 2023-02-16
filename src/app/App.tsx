import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar';
import { useTheme } from './providers/ThemeProvider';
import { SideBar } from 'widgets/SideBar';

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    throw new Error();
  }, []);

  return (
      <div className={classNames('app', {}, [theme])}>
          <Suspense fallback="">
              <NavBar />
              <div className="content-page">
                  <SideBar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  );
};

export default App;