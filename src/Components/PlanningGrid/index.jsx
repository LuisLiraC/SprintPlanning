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
        <div className="PlanningGrid">
            {
                data.map(item => <Card {...item} key={item.id} />)
            }
        </div>
    )
}