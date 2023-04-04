import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar';
import { useTheme } from './providers/ThemeProvider';
import { SideBar } from 'widgets/SideBar';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch])
  
  return (
      <div className={classNames('app', {}, [])}>
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
