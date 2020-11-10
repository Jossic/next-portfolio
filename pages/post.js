import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios';
import BasePage from '../components/BasePage';
import { withRouter } from 'next/router'

class Portfolio extends Component {

    static async getInitialProps({ query }) {
        let post = {}
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
            post = res.data
        }
        catch (error) {
            console.log(error);
        }
        return { post }
    }

    render() {
        const { post } = this.props
        return (
            <BaseLayout>
                <BasePage>
                    <h1>{post.title}</h1>
                    <p>{post.id}</p>
                    <p>{post.body}</p>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio)