import styled from "styled-components";

const NavbarStyle = styled.div`
    ul{
        display: flex;
        gap: 25px;
        flex-wrap: wrap;
    }

    a{
        color: #ff494e;
        font-size: 15px;
        position: relative;
    }

    a:after{
        content: "";
        width: 0%;
        height: 1px;
        background-color: #ff494e;
        position: absolute;
        left: -10%;
        bottom: -2px;
        transition: width 0.5s;
    }

    a:hover::after{
        width: 120%;
        transition: width 0.5s;
    }

    // tablet responsive
    @media screen and (max-width: 760px) {
        ul{
            width: 100%;
            justify-content: center;
            /* background-color: aqua; */
        }
    }

    @media screen and (max-width: 570px){
        display: none;
    }
`;

export default NavbarStyle;