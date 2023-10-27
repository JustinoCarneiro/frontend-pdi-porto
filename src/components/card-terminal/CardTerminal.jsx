import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const CardTerminal = ({ code, name, location, description, status }) => {
  return (
    <li>
      <Link to={status === 'Operando' ? `${code}` : '.'} className={style.container}>
        <p className={style.container__text}>
          <span className={style.text__title}>Name ID: </span>
          <span className={style.text__value}>{name}</span>
        </p>
        <p className={style.container__text}>
          <span className={style.text__title}>Code: </span>
          <span className={style.text__value}>{code}</span>
        </p>
        <span>
          <p className={style.container__text}>
            <span className={style.text__title}>Location: </span>
            <span>
              <span>
                <span className={style.text__subtitle}>lat: </span>
                <span className={style.text__value}>{location.lat}, </span>
              </span>
              <span>
                <span className={style.text__subtitle}>long: </span>
                <span className={style.text__value}>{location.long}, </span>
              </span>
            </span>
          </p>
        </span>
        {/* <p>{description}</p> */}
        <p>
          <span className={style.text__title}>Status: </span>
          <span className={`${style.status} ${style[status]}`}>{status}</span>
        </p>
      </Link>
    </li>
  );
};

export default CardTerminal;
