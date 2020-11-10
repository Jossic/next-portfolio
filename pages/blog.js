import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage';

export default class Blog extends Component {
    render() {
        return (
            <BaseLayout>
                <BasePage>
                    <h1>Page blog</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}
