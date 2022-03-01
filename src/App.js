import React, { useState } from "react";
import UserForm from "./Components/AddUser/UserForm";
import Modal from "./Components/Error/Modal";
import UserList from "./Components/Users/UserList";

const dataPointsInit = [
  { name: "Jan", age: 12, id: Math.random().toString() },
  { name: "honza", age: 23, id: Math.random().toString() },
];

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState([]);
  const [dataPoints, setDataPoint] = useState(dataPointsInit);

  let modal = "";
  console.log(modalMessage)

  const showModalHandler = (message) => {
    setModalMessage((previous) => [...previous, message]);
    setModalShow(true);
  };

  const hideModalHandler = () => {
    setModalMessage((previous) => previous.slice(1));

    console.log(modalMessage)
    if(modalMessage.length === 1) {
      setModalShow(false);
      return
    }
    
  };

  const addNewHumanHandler = (newDataPoint) => {
    setDataPoint((prevDataPoints) => {
      const updated = [...prevDataPoints];
      updated.unshift({
        name: newDataPoint.name,
        age: newDataPoint.age,
        id: Math.random().toString(),
      });
      return updated;
    });
  };

  if (modalShow) {
    modal = <Modal message={modalMessage[0]} onHide={hideModalHandler}></Modal>;
  }

  return (
    <div>
      {modal}
      <UserForm
        onAddNewHuman={addNewHumanHandler}
        onValidationError={showModalHandler}
      ></UserForm>
      <UserList data={dataPoints} />
    </div>
  );
}

export default App;
