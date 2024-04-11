// 여기서 페이지연결
import React from 'react';

const Board = React.lazy(() => import('./board'))
const DashBoard = React.lazy(() => import('./dashboard'))
const Error = React.lazy(() => import('./error'))
const Home = React.lazy(() => import('./Home'))
const Login = React.lazy(() => import('./login'))
const Logout = React.lazy(() => import('./logout'))
const NotFound = React.lazy(() => import('./notFound'))
const Notice = React.lazy(() => import('./notice'))
const Qna = React.lazy(() => import('./qna'))


export { Board, DashBoard, Error, Home, Login, Logout, NotFound, Notice, Qna }
// index.js에 하나로 import 받고 다른 파일에서 한꺼번에 import 해줌