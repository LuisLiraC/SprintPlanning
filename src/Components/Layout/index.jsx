import React from 'react'
import './styles.css'

export const Layout = ({ children }) => {
    return (
        <>
            <header>
                Sprint board
            </header>
            <>
                {children}
            </>
        </>
    )
}