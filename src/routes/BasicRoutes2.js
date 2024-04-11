import React, { Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { allFlattenRoutes as allRoutes, loginRoutes, menuRoutes,  } from './index.js'
import CustomSpinner from '../component/CustomSpinner.js/CustomSpinner.js';


// const OtherComponent = React.lazy(() => import('./OtherComponent'));
// Suspense 에서 위와 같이 사용해서 불러오는 것 가능


function BasicRoutes(){

    // route 주소가 없으면 notFound page노출
    // if(true){
    //     return <NotFound />
    // }

    // console.log('loginRoutes ==> ', loginRoutes)

    // react-router-dom v6에서
    // exact는 더이상 사용하지 않고 여러 라우팅을 매칭하고 싶은 경우 url 뒤에 *를 사용함
    return(
        <Routes>

            {/* <Route
                path="/login"
                element={
                    <Suspense fallback={<CustomSpinner />}>
                        {loginRoutes.map(route => {
                            if(!route.children){
                                const RouteComponent = route.route;
                                return(
                                    <RouteComponent 
                                        key={route.path}
                                        pat
                                        h={route.path}
                                        roles={route.roles}
                                        exact={route.exact}
                                        component={route.component}
                                    />
                                )
                            }
                        })}
                    </Suspense>
                }
            /> */}
            {/* <Route
                path="/*"
                element={(
                    <Routes>
                        <Suspense fallback={<CustomSpinner />}>
                            {loginRoutes.map(route => {
                                console.log('route:', route); 
                                return (
                                    !route.children && (
                                        <Route
                                            key={route.path}
                                            path={route.path}
                                            element={<route.route />}
                                        />
                                    )
                                );
                            })}
                        </Suspense>
                    </Routes>
                )}
            /> */}

            <Route
                path="/*"
                element={
                    <Routes>
                        <Suspense fallback={<CustomSpinner />}>
                            {loginRoutes.map(route => {
                                const Component = route.element;
                                if (!route.children && route.element) {
                                    // return (
                                    //     <Route
                                    //         key={route.path}
                                    //         path={route.path}
                                    //         element={
                                    //             // <React.Suspense fallback={<CustomSpinner />}>
                                    //             //     <route.component />
                                    //             // </React.Suspense>
                                    //             <React.Suspense fallback={<CustomSpinner />}>
                                    //                 {route.component()}
                                    //             </React.Suspense>
                                    //         }
                                    //     />

                                    //     );
                                    return (
                                        // <Route
                                        //     key={route.path}
                                        //     path={route.path}
                                        //     element={
                                        //         <React.Suspense fallback={<CustomSpinner />}>
                                        //             {Component && <Component />}
                                        //         </React.Suspense>
                                        //     }
                                        // />
                                        <React.Fragment key={route.path}>
                                        {Component ? (
                                            <Route
                                                path={route.path}
                                                element={
                                                    <React.Suspense fallback={<CustomSpinner />}>
                                                        <Component />
                                                    </React.Suspense>
                                                }
                                            />
                                        ) : (
                                            <Route path={route.path} element={<Navigate to="/login" />} />
                                        )}
                                    </React.Fragment>
                                    );
                                } else {
                                    return null; // Ignore routes without components
                                }
                            })}
                        </Suspense>
                    </Routes>
                }
            />
            {/* 이것도 아닌가 */}
            {/* <Route
                path="/*"
                element={
                    <Routes>
                        <Suspense fallback={<CustomSpinner />}>
                            {loginRoutes.map(route => {
                                return (
                                    !route.children && (
                                        <route.route 
                                            key={route.path}
                                            path={route.path}
                                            component={<route.route/>}
                                        />
                                    )
                                );
                            })}
                        </Suspense>

                    </Routes>
                }
            /> */}
            {/* <Route
                path="/"
                element={() => {
                    <Suspense fallback={<CustomSpinner />}>
                        {menuRoutes.map(route => {
                            return(
                                !route.children && (
                                    <route.route
                                        key={route.path}
                                        path={route.path}
                                        roles={route.roles}
                                        exact={route.exact}
                                        component={route.component}
                                    />
                                )
                            )
                        })}
                    </Suspense>
                }}
            />

            <Route
                path="all"
                element={() => {
                    <Suspense fallback={<CustomSpinner />}>
                        {allRoutes.map(route => {
                            return(
                                !route.children && (
                                    <route.route
                                        key={route.path}
                                        path={route.path}
                                        roles={route.roles}
                                        exact={route.exact}
                                        component={route.component}
                                    />
                                )
                            )
                        })}
                    </Suspense>
                }}
            /> */}
        </Routes>
    )
}

export default BasicRoutes;