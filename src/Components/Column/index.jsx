import React from "react";
import { BacklogItem } from "../BacklogItem";
import { Task } from '../Task'
import "./styles.css";

export const Column = ({ title, content, id }) => {
  return (
    <div className="Column">
      <h4 className="Column__title">{title}</h4>
      <div className="Column__content">
        {id === 1 ? (
          content.map(item => <BacklogItem key={item.id} {...item} />)
        ) : (
          content.map(item => <Task key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
};
