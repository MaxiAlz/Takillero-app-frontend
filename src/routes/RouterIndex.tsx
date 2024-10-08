import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { authProtectedRoutes, publicRoutes, templateRoutes } from './allRoutes';
import ProtectedRoutes from './ProtectedRoutes';

const RouteIndex = () => {
  // const { authStatus } = useSelector((state: RootState) => state.auth);
  // const dispatch = useDispatch<any>();

  // useEffect(() => {
  //   dispatch(checkAuthToken());
  // }, []);

  // if (authStatus === 'checking') {
  //   return <Loader />;
  // }

  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route: any, idx: number) => (
          <Route path={route.path} key={idx} element={<route.component />} />
        ))}
        {templateRoutes.map((route: any, idx: number) => (
          <Route path={route.path} key={idx} element={<route.component />} />
        ))}
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
      </Routes>
    </React.Fragment>
  );
};

export default RouteIndex;
