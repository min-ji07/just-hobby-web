import PT from 'prop-types'
import React, { createContext, Suspense } from 'react';
import {Route, Navigate} from 'react-router';
// Redirect -> navigate로 변경


export const UserContext = createContext(); // 컴포넌트에 props를 더 쉽고 간결하게 전달하기 위한 react Context
UserContext.displayName = 'UserContext';

export default function PrivateRouteSwitch({ children }){
    alert(children)
    // const {
    //     data: user,
    //     isLoading, // --> react-router에서 사용하는 useLocation, useHistory 사용해서 값 가져옴
    //     isError 
    // } = useMe({extractuser: true, refetchOnWindowFocus: false })

    console.log('switch => ', children)

    const user = true;

    // loading이 되지 않으면 페이지 return 값 없음
    // if(isLoading){
    //     return <></>
    // }

    // user값이 있으면 약관동의나 유저 페이지이동
    // if(user){
    //     return <redirect to="" />
    // }

    // 원래는 위와 같이 사용하지만 일단 user 값이 없으니까 주석처리함

    {/* <Navigate exact path="" to="/home" /> */}
    {/* navigate 어떻게 쓰는지 다시확인 */}
    if(!user){
        return(
            <UserContext.Provider 
                // value={'안녕'}
            // value={{
            //     UserContext: {
            //         user: '임시User'
            //     }
            // }}
            >
                {children}
                not user
            </UserContext.Provider>
        )
    }

    {/* <Navigate exact path="" to="/home" /> */}
    if(user){
        return(
            <UserContext.Provider 
            // value={'안녕2?'}
            // value={{
            //     UserContext: { user }
            // }}
            >
                {children}
                user
            </UserContext.Provider>
        )
    }

    // return <Loading />
}