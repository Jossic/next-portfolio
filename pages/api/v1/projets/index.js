import axios from 'axios';

export default async (req, res) => {
    try {
        const axiosRes = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const projets = axiosRes.data;
        res.status(200).json(projets.slice(0, 10));
    } catch (e) {
        console.error(e);
        res.status(e.status || 400).json({ message: 'Api Error!' });
    }
} 