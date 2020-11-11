import BaseLayout from '@/components/layouts/BaseLayout'
import axios from 'axios';
import BasePage from '@/components/BasePage';

const Projet = ({ projet }) => {
    return (
        <BaseLayout>
            <BasePage>
                <h1>{projet.title}</h1>
                <p>{projet.id}</p>
                <p>{projet.body}</p>
            </BasePage>
        </BaseLayout>
    )
}

Projet.getInitialProps = async ({ query }) => {
    let projet = {}
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
        projet = res.data
    } catch (error) {
        console.log(error);
    }
    return { projet }
}

export default Projet