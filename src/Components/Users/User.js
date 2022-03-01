import React from "react";

import styles from "./User.module.css";

const User = (props) => {
  return (
    <li
      className={`${styles["user-item"]}`}
    >{`${props.name} has ${props.age} years`}</li>
  );
};

export default User;
