import React from "react";
import style from "./style.module.css";
import { useParams } from "react-router-dom";

const Terminal = () => {
  const { id } = useParams();
  return (
    <div>Terminal: {id}</div>
  );
};

export default Terminal;
