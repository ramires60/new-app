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

let dialogsData = [
  { id: 1, name: "Petro" },
  { id: 2, name: "Hdset" },
  { id: 3, name: "Khtar" },
  { id: 4, name: "Naghr" },
];

let messagesData = [
  { id: 1, message: "no-unused-vars" },
  { id: 2, message: "is defined but never used" },
  { id: 3, message: "Yo assets by chunk 1.72" },
  { id: 4, message: "Entrypoint main 1.72 MiB (1.61 MiB)" },
];

let dialogsArray = dialogsData.map((el) => (<Dialog id={el.id} name={el.name} />));
let messageArray = messagesData.map((el) => (<Message id={el.id} value={el.message} />));

const Dialogs = (props) => {
  return (
    <div className={css.dialogPage}>
      <div className={css.dialogsList}>{dialogsArray}</div>

      <div className={css.messages}>{messageArray}</div>
    </div>
  );
};

export default Dialogs;
