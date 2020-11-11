import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage';
import axios from 'axios';
import Link from 'next/link'
import { useEffect } from 'react';

const Portfolio = ({ posts }) => {

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch('/api/v1/posts')
            const data = res.json()
        }

        getPosts()
    }, [])

    return (
        <BaseLayout>
            <BasePage>
                <h1>Page Portfolio</h1>
                <ul>
                    {
                        posts.map(post => (
                            <li key={post.id}>
                                <Link as={`/portfolio/${post.id}`} href='/portfolio/[id]'>
                                    <a>
                                        <span>{post.id} :</span> <span>{post.title}</span>
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </BasePage>
        </BaseLayout>
    )
}

Portfolio.getInitialProps = async () => {
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

export default Portfolio