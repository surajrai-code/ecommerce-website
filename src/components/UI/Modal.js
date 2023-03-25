import { Fragment } from "react";
import ReactDOM from 'react-dom';
// import { Card } from "react-bootstrap";
// import Cart from "../cart/Cart";
import classes from './Modal.module.css'
const  ModalOverlay =(props)=>{
    return (
       
         <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>  
        
    )      
       
}

 const Modal =(porps)=>{
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay>{porps.children}</ModalOverlay> ,document.getElementById('modal'))}
        </Fragment>
    )
 }
 export default Modal;