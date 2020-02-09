import React from "react";
import { Task } from '../Task'
import "./styles.css";

export const Card = ({ id, description, inCharge, tasks, comments = [], conditions = [] }) => {
  return (
    <div className="Card">
      <h4 className="Card__title">{id} - {description}</h4>
      <div className="Card__content">
        {
          comments.length > 0 && (
            <div className="Card__comments">
              <p><b>Comentarios</b></p>
              {
                comments.map(comment => <p>- {comment}</p> )
              }
            </div>
          )
        }
        <p><b>Tareas:</b></p>
        <div className="Card__tasks">
          {
            tasks.map(task => <Task {...task} key={task.id} />)
          }
        </div>
        {
          conditions.length > 0 && (
            <div className="Card__conditions">
              <p><b>Condiciones</b></p>
              {
                conditions.map(condition => <p>- {condition}</p> )
              }
            </div>
          )
        }
      </div>
    </div>
  );
};
