
// import imobiliária logo
import logo from "../../assets/logo-no-bg.png";

// import styled components styles
import LogoStyle from "./styles/LogoStyle";

function Logo() {
    return (
        <LogoStyle>
            <img src={logo} alt="Logotipo da imobiliária" />
        </LogoStyle>

    )
}

export default Logo;