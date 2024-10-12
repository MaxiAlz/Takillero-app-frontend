import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  authProtectedRoutes,
  noAuthRoutes,
  publicRoutes,
  templateRoutes,
} from './allRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import NoRoutesForAuthenticated from './NoRoutesForAuthenticated';

const RouteIndex = () => {
  return (
    <React.Fragment>
      <Routes>
        {/* rutas publicas */}
        {publicRoutes.map((route: any, idx: number) => (
          <Route path={route.path} key={idx} element={<route.component />} />
        ))}
        {/* Rutas prohibidas para ususario authenticado */}
        {noAuthRoutes.map((route: any, idx: number) => (
          <Route
            path={route.path}
            key={idx}
            element={
              <NoRoutesForAuthenticated>
                <route.component />
              </NoRoutesForAuthenticated>
            }
          />
        ))}
        
        {/* Rutas del template */}
        {templateRoutes.map((route: any, idx: number) => (
          <Route path={route.path} key={idx} element={<route.component />} />
        ))}

        {/* Rutas privadas */}
        {authProtectedRoutes.map((route: any, idx: number) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <ProtectedRoutes>
                <route.component />
              </ProtectedRoutes>
            }
          />
        ))}
        {
          <Route
            path="*"
            key={'error-page'}
            element={
              <div className="text-4xl font-bold m-10">
                Oops! Ah ocurrido un error. Pagina no encontrada
              </div>
            }
          />
        }
      </Routes>
    </React.Fragment>
  );
};

export default RouteIndex;
