import React from 'react'
import { Container } from 'reactstrap'


const BasePage = ({ className = '', header, children }) => {
    return (
        <Container className={`base-page ${className}`}>
            {header &&
                <div className="page-header">
                    <h1 className="page-header-title">{header}</h1>
                </div>
            }
            {children}
        </Container>
    )
}

export default BasePage
