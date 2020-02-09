import React from 'react'
import './styles.css'

export const Layout = ({ children }) => {
    return (
        <>
            <header>
                Sprint planning #1
            </header>
            <div className="container">
                {children}
            </div>
        </>
    )
}