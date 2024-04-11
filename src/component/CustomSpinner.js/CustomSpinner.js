import React from 'react'
import { Spinner } from 'reactstrap'
import styled from 'styled-components'

// 이렇게 사용한다는 것만 기재
const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`
const p = styled.p``    // 태그를 옆에 명시해줄 수 있음

const ReactSpinner = styled(Spinner)``

export default function CustomSpinner(){
    return(
        <Wrapper>
            <ReactSpinner/>
        </Wrapper>
    )
}
