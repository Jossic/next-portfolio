import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage';
import Link from 'next/link'
import { useEffect, useState } from 'react';

const Portfolio = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
            const res = await fetch('/api/v1/posts');
            const data = await res.json();
            setPosts(data);
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

export default Portfolio