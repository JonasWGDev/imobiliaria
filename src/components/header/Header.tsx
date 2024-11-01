
// import styled components styles
import HeaderStyle from "./styles/HeaderStyle";

// import components
import Navbar from "../global/Navbar";
import Logo from "../global/Logo";
import BtnSidebar from "../global/BtnSidebar";

function Header() {

    const handleClickBtnSidebar = () => {
        console.log("clicou")
    }


    return (
        <HeaderStyle>
            <div className="logo-and-btn-container">
                <Logo />
                <BtnSidebar handleMouseClickProp={ } />
            </div>
            <Navbar />
        </HeaderStyle>
    )
}

export default Header;