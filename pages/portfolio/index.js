import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { getProjects } from '../../actions/projectActions';
import Loader from '../../components/Loader';
import { useGetUser } from '../../actions/user';
import { Row, Col } from 'reactstrap';
import ProjectApi from '../../lib/api/projects'
import ProjectCard from '../../components/ProjectCard';



const Portfolio = ({ projects }) => {
    const router = useRouter()
    const { data: dataUser, loading: loadingUser } = useGetUser()
    return (
        <BaseLayout
            user={dataUser}
            loading={loadingUser}
        >
            <BasePage
                header='Liste des projets'
                className='portfolio-page'>
                {/* {loading && <Loader />} */}
                <Row>
                    {projects.map(project => (
                        <Col
                            onClick={() => {
                                router.push('/portfolio/[id]', `/portfolio/${project._id}`)
                            }}
                            key={project._id} md="4">
                            <ProjectCard project={project} />
                        </Col>
                    ))
                    }
                </Row>

                {/* {error &&
                    <div className="alert alert-danger">{error.message}</div>
                } */}

            </BasePage>
        </BaseLayout>
    )
}

// Portfolio.getInitialProps = async () => {
//     const projects = await getProjects()
//     return { projects }
// }

export async function getStaticProps() {
    const json = await new ProjectApi().getAll();
    const projects = json.data;
    return {
        props: { projects }
    }
}

export default Portfolio