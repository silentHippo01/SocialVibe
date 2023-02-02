import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { MainPageAsync } from './pages/Mainpage/MainPageAsync';
import { Suspense, useState } from 'react';
import { useTheme } from './styles/theme/useTheme';
import { classNames } from './helpers/classNames';

const App = () => {
    
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>change theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;