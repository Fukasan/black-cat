import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routesConfig from './routes';

const AppRouter: React.FC = () => (
    <Router>
        <Routes>
            {routesConfig.map((route, index) => (
                <Route key={index} {...route} />
            ))}
        </Routes>
    </Router>
);

export default AppRouter;
