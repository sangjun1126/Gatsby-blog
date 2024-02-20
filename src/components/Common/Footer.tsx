import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

const FooterWrapper = styled.div`
    display : grid;
    place-items : center;
    margin-top : auto;
    padding : 50px 0;
    font-size : 15px;
    text-align : center;
    line-height : 1.5;
`

const Footer : FunctionComponent = function() {
    return (
        <FooterWrapper>
            제 블로그를 들어와주셔서 감사합니다. 좋은 하루 되세요
            <br /> 2024년 2월, 프론트엔드 개발자, 정상준
        </FooterWrapper>
    )
}

export default Footer;