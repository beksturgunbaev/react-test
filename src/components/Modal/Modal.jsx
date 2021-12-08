import React from "react";
import './styles/modals.css'

const Modal = ({active, setActive}) => {
    return (
        <>
            <div className={ active ? 'my_modal active' : 'my_modal'} onClick={() => {setActive(false)}}>
                <div className="modal_content" onClick={(e)=>{e.stopPropagation()}}>
                    <input type="search" placeholder="Search"/>
                </div>
            </div>
        </>
    );
}

export default Modal;