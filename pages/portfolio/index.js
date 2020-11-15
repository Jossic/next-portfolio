import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage';
import Link from 'next/link'
import { useGetProjets } from '@/actions';
import Loader from '@/components/Loader';
import { useGetUser } from '@/actions/user';




const Portfolio = () => {
    const { data: projets, error, loading } = useGetProjets()
    const { data: dataUser, loading: loadingUser } = useGetUser()
    console.log(projets)
    return (
        <BaseLayout
            user={dataUser}
            loading={loadingUser}
        >
            <BasePage>
                <h1>Page Portfolio</h1>
                {loading && <Loader />}
                {projets &&
                    <ul>
                        {
                            projets.map(projet => (
                                <li key={projet.id}>
                                    <Link as={`/portfolio/${projet.id}`} href='/portfolio/[id]'>
                                        <a>
                                            <span>{projet.id} :</span> <span>{projet.title}</span>
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                }
                {error &&
                    <div className="alert alert-danger">{error.message}</div>
                }

            </BasePage>
        </BaseLayout>
    )
}

export default Portfolio