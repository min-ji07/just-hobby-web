import { Route } from "react-router-dom";

// import Home from "../pages/Home";
// import Login from "../pages/login";
// import NotFound from "../pages/notFound";
// import Board from "../pages/board";
// import DashBoard from "../pages/dashboard";
// 이렇게 import 해도 되지만 너무 많으니까 아래와 같이 설정해줌
import { Board, DashBoard, Error, Home, Login, Logout, NotFound, Notice, Qna} from '../pages'
import PrivateRoute from "./PrivateRoute";

// route 설정
const notFoundRoute = {
    name: '존재하지 않는 페이지',
    path: undefined,
    element: <NotFound />,
    route: Route
}
const errorRoute = {
    name: 'Error 페이지',
    path: '/error',
    element: <Error />,
    route: Route
}
const homeRoute = {
    name: 'Home',
    path: '/home',
    element: <Home />,
    route: Route,
}
const boardRoute = {
    name: '게시판',
    path: '/board',
    element: <Board />,
    route: Route,
}

const subBoardRoute = {
    name: '서브게시판',
    path: '/subBoard',
    children: [
        {
            name: '공지사항', // 예를들어
            path: '/subBoard/notice',
            element: <Notice />,
            route: PrivateRoute,
            // route: Route
            // exact: true, // 사용안함
        },
        {
            name: 'Q&A',
            path: '/subBoard/qna',
            element: <Qna />,
            route: PrivateRoute,
            // route: Route

        },
    ]
}
const dashBoardRoute = {
    name: '대시보드',
    path: '/dashBoard',
    element: <DashBoard />,
    route: Route,
}
const loginRoute = {
    name: 'Login',
    path: '/login',
    element: <Login />,
    route: Route,
}
const logoutRoute = {
    name: 'Logout',
    path: '/logout',
    element: <Logout />,
    route: Route,
}


// 로그인 관련
const loginRoutes = [
    loginRoute,
    logoutRoute
]
// 메뉴
const menuRoutes = [
    homeRoute,
    boardRoute,
    dashBoardRoute,
    notFoundRoute,
    errorRoute,
    subBoardRoute
]


// 전체 routes
const allRoutes = [
    ...menuRoutes,
    subBoardRoute,
]

// route가 PrivateRoute일 때만 해당 메소드 소환
// 이건뭘까?
const flattenRoutes = routes => {
    let flatRoutes = [];
    (routes || []).forEach(item => {
        console.log('flattenRoutes item==> ', item)
        flatRoutes.push(item);

        if(typeof item.children !== 'undefined'){
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)]; // 재귀?
        }
    })
    return flatRoutes;
}

const allFlattenRoutes = flattenRoutes(allRoutes)
export {loginRoutes, menuRoutes, allFlattenRoutes};
// export 할 route만 입력해줌