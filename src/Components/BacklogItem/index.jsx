import React from "react";
import './styles.css'

export const BacklogItem = ({ id, description}) => {
  return (
    <div className="backlog-item">
      <p><b>{id}:</b> {description}</p>
    </div>
  );
};
