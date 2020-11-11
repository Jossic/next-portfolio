import BaseLayout from '@/components/layouts/BaseLayout'
import axios from 'axios';
import BasePage from '@/components/BasePage';

const Post = ({ post }) => {
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

Post.getInitialProps = async ({ query }) => {
    let post = {}
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
        post = res.data
    } catch (error) {
        console.log(error);
    }
    return { post }
}

export default Post