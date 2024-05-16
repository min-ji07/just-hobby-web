import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { getMeKey } from "../query-keys/users";
import UsersApi from '' 


export const useMe = (options = {}) => {
    const location = useLocation();
    const history = useNavigate();

    console.log('location =>' , location)
    console.log('history =>' , history)
    // const { data, isLoading, refetch } = useQuery(
    //     [
    //         getMeKey, // react-query사용시 query key 필요(쿼리캐싱관리)
    //         {
    //             ignoreUnauthorized: options.ignoreUnauthorized,
    //             extractUser: options.extractUser
    //         },
    //     ],
    //     () => 
    //     // UsersApi.getMe({
    //     //     ignoreUnauthorized: options.ignoreUnauthorized,
    //     //     extractUser: options.extractUser
    //     // }),
    //     UsersApi.getMeKey({
    //         ignoreUnauthorized: options.ignoreUnauthorized,
    //         extractUser: options.extractUser
    //     }),
    //     {
    //        retry: false,
    //        refetchOnMount: false,
    //        retecthOnWindowFocus: false,
    //        ...options, 
    //     }
    // );
    // useEffect(() => {
    //     if(data?.code === '' && location.pathname !== '/pathname'){
    //         history.replace('/pathname')
    //     }
    // })
    // return { data, isLoading, refetch }
    // return { location, history }
    return '20240411';
}