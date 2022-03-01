import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={`${styles["modal"]}`}>
      <div>
        <div className={`${styles["modal-body"]}`}>
            <p>{props.message}</p>
        </div>
        <div className={`${styles["modal-footer"]}`}>
          <button onClick={props.onHide}>Hide</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
