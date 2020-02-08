import React from 'react'
import './styles.css'

export const Task = ({ backlogId, description, inCharge }) => {
  return (
    <div className="task">
      <p className="task__backlog"><b>Backlog Id:</b> {backlogId}</p>
      <p className="task__description">{description}</p>
      <p className="task__in-charge"><b>Encargado:</b> {inCharge}</p>
    </div>
  )
}