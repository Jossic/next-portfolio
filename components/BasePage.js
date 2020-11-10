import React from 'react'
import { Container } from 'reactstrap'


const BasePage = ({ className = '', children }) => {
    return (
        <Container className={`base-page ${className}`}>
            {children}
        </Container>
    )
}

export default BasePage
