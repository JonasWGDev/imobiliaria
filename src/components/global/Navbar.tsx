
// import styled components styles
import { ChangeEventHandler } from "react";
import NavbarStyle from "./styles/NavbarStyle"

function Navbar(handleOnChangeProp: ChangeEventHandler<HTMLDivElement> | undefined) {



    return (
        <div onChange={handleOnChangeProp}>
            <NavbarStyle>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Melhor preço</a></li>
                    <li><a href="#">Buscar</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </NavbarStyle>
        </div>
    )
}

export default Navbar;