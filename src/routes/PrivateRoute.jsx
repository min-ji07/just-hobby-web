import PT from 'prop-types'
import React, { createContext, Suspense } from 'react';
import {Route, Navigate} from 'react-router';
// Redirect -> navigate로 변경
import UserContext from './PrivateRouterSwitch';

export default function PrivateRoute({ component: Component, ...rest}){
    console.log('PrivateRoute ==> ', Component)
    console.log('PrivateRoute rest ==> ', rest)
    return(
        <Route
            {...rest}
            // render={props => {
            //     return(
            //         // props로 componen와 route에 관련된 값을 가져온다
            //         // <PrivateRouteSwitch.Consumer>
            //         //     <Component {...props} />
            //         // </PrivateRouteSwitch.Consumer>

            //         <PrivateRouteSwitch>
            //             {item => (
            //                 <>
            //                     <p>{`item: ${item}`}</p>
            //                     <Component {...props} />
            //                 </>
            //             )}
            //         </PrivateRouteSwitch>
                    
            //         // 컴포넌트를 render나 Router의 자식으로 쓰는게 아니라 아래 코드와 같이 인라인으로 component를 작성하게 되면 
            //         // 라우터는 React.createElement를 사용해 새 React요소를 만든다

            //         // <Route path="동적주소" component={컴포넌트(ex.Home)} /> --> 안좋은 코드
            //         // 이것은 기존에 있는 컴포넌트를 업데이트 하는게 아닌 기존의 컴포넌트를 언마운트하고 새 컴포넌트를 만드는 방식이다
            //         // 그래서 render를 사용하거나 children prop를 사용하는것이 좋다(권장)

                    
            //     )
            // }}
            element={(
                // <PrivateRouteSwitch>
                //     {item => (
                //         <>
                //             <p>{`item: ${item}`}</p>
                //             <Component {...rest} />
                //         </>
                //     )}
                // </PrivateRouteSwitch>

                // 
                <UserContext.Consumer>
                    {item => <Component {...item} />}
                </UserContext.Consumer>
            )}
        />

        
    )
}

// 프로토타입 설정
PrivateRoute.prototype = {  
    // component를 props 값으로 받음
    // elementType 값이 필수여야함 안그러면 react상에서 error
    component: PT.elementType.isRequired,
}