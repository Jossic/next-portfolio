import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios';
import { Link } from '../routes'
import BasePage from '../components/BasePage';

export default class Portfolio extends Component {

    static async getInitialProps() {
        let posts = []
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            posts = res.data
        }
        catch (error) {
            console.log(error);
        }
        return { posts: posts.slice(0, 10) }
    }

    render() {
        const { posts } = this.props
        return (
            <BaseLayout>
                <BasePage>
                    <h1>Page Portfolio</h1>
                    <ul>
                        {
                            posts.map(post => (
                                <li key={post.id}>
                                    <Link route={`/portfolio/${post.id}`}>
                                        <a>
                                            <span>{post.id} :</span> <span>{post.title}</span></a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </BasePage>
            </BaseLayout>
        )
    }
}
