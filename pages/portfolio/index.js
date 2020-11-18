import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage';
import Link from 'next/link'
// import { getProjects } from '../../actions/projectActions';
import Loader from '../../components/Loader';
import { useGetUser } from '../../actions/user';
import ProjectApi from '../../lib/api/projects'



const Portfolio = ({ projects }) => {
    const { data: dataUser, loading: loadingUser } = useGetUser()
    return (
        <BaseLayout
            user={dataUser}
            loading={loadingUser}
        >
            <BasePage>
                <h1>Page Portfolio</h1>
                {/* {loading && <Loader />} */}
                {projects &&
                    <ul>
                        {
                            projects.map(projet => (
                                <li key={projet._id}>
                                    <Link as={`/portfolio/${projet._id}`} href='/portfolio/[id]'>
                                        <a>
                                            <span>{projet._id} :</span> <span>{projet.titre}</span>
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                }
                {/* {error &&
                    <div className="alert alert-danger">{error.message}</div>
                } */}

            </BasePage>
        </BaseLayout>
    )
}

export async function getStaticProps() {
    const json = await new ProjectApi().getAll();
    const projects = json.data;
    return {
        props: { projects }
    }
}

export default Portfolio