import React, { useState, useEffect } from 'react'
import { Card } from '../Card'
import InitialState from '../../Utils/Mokcup.json'
import './styles.css'

export const PlanningGrid = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(InitialState)
  }, [data])

  return (
    <>
      {data.map(sprint => {
        return (
          <section key={sprint.sprintId}>
            <header>Sprint Planning #{sprint.sprintId}</header>
            <div className="PlanningGrid container">
              {sprint.content.map(item => (
                <Card {...item} key={item.id} />
              ))}
            </div>
          </section>
        )
      })}
    </>
  )
}
