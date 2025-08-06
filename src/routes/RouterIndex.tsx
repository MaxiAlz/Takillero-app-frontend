import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  adminRoutes,
  noAuthRoutes,
  producerRoutes,
  publicRoutes,
  templateRoutes,
} from './allRoutes';

import NoRoutesForAuthenticated from './NoRoutesForAuthenticated';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { UserRoles } from '../modules/Auth/types/authTypes';
import ProtectedRoutes from './ProtectedRoutes';
import { ErrorPage } from '../modules/Error/views/ErrorPage';

const RouteIndex = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const getRoutesByRole = (userRole: UserRoles) => {
    switch (userRole) {
      case UserRoles.PRODUCTOR:
        return producerRoutes;

      case UserRoles.ADMINISTRADOR:
        return [...producerRoutes, ...adminRoutes];

      default:
        return [];
    }
  };

  return (
    <React.Fragment>
      <Routes>
        {/* Rutas prohibidas para ususario authenticado */}
        {noAuthRoutes.map((route: any, idx: number) => (
          <Route
            path={route.path}
            key={idx}
            element={
              <NoRoutesForAuthenticated>
                {React.createElement(route.component)}
              </NoRoutesForAuthenticated>
            }
          />
        ))}
        {/* rutas publicas */}
        {publicRoutes.map((route: any, idx: number) => (
          <Route path={route.path} key={idx} element={<route.component />} />
        ))}

        {/* Rutas del template */}
        {templateRoutes.map((route: any, idx: number) => (
          <Route path={route.path} key={idx} element={<route.component />} />
        ))}

        {user?.data.role !== undefined &&
          getRoutesByRole(user.data.role).map((route: any, idx: number) => {
            if (route.children) {
              return (
                <Route
                  key={idx}
                  path={route.path}
                  element={
                    <ProtectedRoutes>
                      <route.component />
                    </ProtectedRoutes>
                  }
                />
              );
            }

            return (
              <Route
                key={idx}
                path={route.path}
                element={
                  <ProtectedRoutes>
                    <route.component />
                  </ProtectedRoutes>
                }
              />
            );
          })}
        <Route path="*" element={<ErrorPage />} />
        <Route path="/panel/*" element={<ErrorPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default RouteIndex;
