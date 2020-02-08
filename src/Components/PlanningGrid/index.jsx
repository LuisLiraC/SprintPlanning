import React, { useState, useEffect } from 'react'
import { Column } from '../Column'
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
                data.map(item => <Column {...item} key={item.id} />)
            }
        </div>
    )
}