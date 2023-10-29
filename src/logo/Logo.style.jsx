
import styled from "styled-components";

import Logo from "./Logo";


export const StyledLogo = styled(Logo)`
    width: 25%;
    height:400px;
    margin: auto;

    img{
        width: 100%;
        object-fit:cover;
    }

    @media screen and (max-width:768px) {
      width: 70%;
      height: auto;
    }
`;