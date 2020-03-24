import React from 'react'
import { PlanningGrid } from './Components/PlanningGrid'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="members">
        <h1>Proyecto: <b>League of Legends API</b></h1>
        <span>Product Owner: <b>José Gutiérrez</b></span>
        <span>Scrum Master: <b>Adrián González</b></span>
        <span>Desarrollador: <b>Luis Lira</b></span>
        <span className="taskStatus">
          <div className="completedStatus"></div>
          <span>Completado</span>
        </span>
        <span className="taskStatus">
          <div className="uncompletedStatus"></div>
          <span>Incompleto</span>
        </span>
      </div>
      <PlanningGrid />
    </div>
  )
}

export default App
