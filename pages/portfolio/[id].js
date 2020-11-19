import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage';
import { useRouter } from 'next/router';
import Loader from '../../components/Loader';
import { useGetUser } from '@/actions/user';
import ProjectApi from '../../lib/api/projects'
import ProjectCard from '../../components/ProjectCard';

const Projet = ({ project }) => {
    const { data: dataUser, loading: loadingUser } = useGetUser()
    const router = useRouter()
    return (
        <BaseLayout
            user={dataUser}
            loading={loadingUser}
        >
            <BasePage
                header='Détails du projet'>
                {
                    JSON.stringify(project)
                }
            </BasePage>
        </BaseLayout>
    )
}

// export async function getServerSideProps({ query }) {
//     const json = await new ProjectApi().getById(query.id);
//     const project = json.data;
//     return {
//         props: { project }
//     }
// }

// Executé au build
export async function getStaticPaths() {
    const json = await new ProjectApi().getAll();
    const projects = json.data

    // Récupérer les [id] (path) pour pre-render les pages
    const paths = projects.map(project => {
        return {
            params: { id: project._id }
        }
    })

    return { paths, fallback: false } // Fallback false -> renvoi vers 404 les pages non trouvées
}

export async function getStaticProps({ params }) {
    const json = await new ProjectApi().getById(params.id)
    const project = json.data
    return { props: { project } }
}

export default Projet