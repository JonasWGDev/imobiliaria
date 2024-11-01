import { MouseEventHandler } from "react";
import { BsJustify } from "react-icons/bs";

function BtnSidebar(handleMouseClickProp: MouseEventHandler<HTMLDivElement> | undefined) {

    return (
        <div onClick={handleMouseClickProp} className="btn-sidebar">
            <BsJustify />
        </div>
    )
}

export default BtnSidebar;