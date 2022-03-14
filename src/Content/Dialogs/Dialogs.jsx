import React from "react";
import { Link } from "react-router-dom";
import css from "./Dialogs.module.css";

const Dialog = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={css.dialog}>
      <Link to={path}>{props.name}</Link>
    </div>
  );
};

const Message = (props) => {
  return <div className={css.message}>{props.value}</div>;
};





const Dialogs = (props) => {
  let newMessage = React.createRef();
  let addMessage = () => {alert(newMessage.current.value)}

  let dialogsArray = props.dialogsData.map((el) => (<Dialog id={el.id} name={el.name} />));
  let messageArray = props.messagesData.map((el) => (<Message id={el.id} value={el.message} />));
  return (
    <div>
    <div className={css.dialogPage}>
      <div className={css.dialogsList}>{dialogsArray}</div>

      <div className={css.messages}>{messageArray}</div>
      <div>
      <textarea ref={newMessage}></textarea>
      <button onClick={addMessage}>Push</button>
      </div>
      </div>


    </div>
  );
};

export default Dialogs;
