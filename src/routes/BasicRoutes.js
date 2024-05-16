import { Route, Routes } from 'react-router-dom';
import { allFlattenRoutes as allRoutes, loginRoutes } from './index.js'

function BasicRoutes(){
    return(
        <Routes>
            <Route
                path="user/*"
                element={
                    <Routes>
                        {loginRoutes.map((route, idx) => {
                            return(
                                !route.children && (
                                    <route.route 
                                        key={idx}
                                        path={route.path}
                                        element={route.element}
                                    />
                                )
                            )
                        })}
                    </Routes>
                }
            />

            {/* 얘는 없어도 될 거 같음 밑에꺼만 잘 되면 */}
            {/* <Route
                path="home/*"
                element={
                    <Routes>
                        {menuRoutes.map((route, idx) => {
                            console.log('route ==> ', route)
                            console.log('children ==> ', route.children)
                            return(
                                !route.children && (
                                    <route.route 
                                        key={idx}
                                        path={route.path}
                                        element={route.element}
                                    />
                                )
                            )
                        })}
                    </Routes>
                }
            /> */}

            {/* 지금 얘는> 오류남 */}
            {/* <PrivateRoute>
                {allRoutes.map((route, idx) => {
                    return(
                        !route.children && (
                            <route.route 
                                key={idx}
                                path={route.path}
                                element={route.element}
                            />
                        )
                    )
                })}
            </PrivateRoute> */}

            {/* 실행잘됨 */}
            {allRoutes.map((route, idx) => {
                return !route.children && (
                    <Route 
                        key={idx}
                        path={route.path}
                        element={route.element}
                    />
                )
            })}
        </Routes>
    )
}

export default BasicRoutes;