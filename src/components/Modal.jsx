import classes from './Modal.module.css';

function Modal() {
    return(
        <>
            <div className={classes.backdrop}/>
            <dialog open className={classes.modal}>
                {children}</dialog>
        </>
    );
}

export default Modal;
