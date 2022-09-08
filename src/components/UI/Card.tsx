import React from "react";
import classes from "./Card.module.css";

const Card: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={`${classes.card} ${className}`}>
      <>{children}</>
    </div>
  );
};

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}

export default Card;
