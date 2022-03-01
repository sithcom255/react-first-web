import React from "react";

import styles from "./UserList.module.css";
import User from "./User";

const UserList = (props) => {
  return (
    <div>
      <ul className={`${styles["user-list"]}`}>
        {props.data.map((dataPoint) => (
          <User name={dataPoint.name} age={dataPoint.age}></User>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
