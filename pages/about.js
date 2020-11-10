import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage';

export default class About extends Component {
    render() {
        return (
            <BaseLayout>
                <BasePage>
                    <h1>Page About</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}
