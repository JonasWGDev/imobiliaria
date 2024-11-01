import { styled } from "styled-components";

const HeaderStyle = styled.div`
    background-color: #fff;
    border-bottom: 1px solid #ff2a2f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 5%;
    flex-wrap: wrap;
    gap: 20px;

    .btn-sidebar{
        display: none;
    }

    // mobile responsive
    @media screen and (max-width: 570px) {
        justify-content: center;

        .logo-and-btn-container{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .btn-sidebar{
            display: flex;
            font-size: 25px;
        }
    }

    // mini window responsive
    @media screen and (max-width: 200px) {
        .logo-and-btn-container{
            justify-content: center;
        }

        .btn-sidebar{
            width: 100%;
            justify-content: center;
        }
    }
`;

export default HeaderStyle;