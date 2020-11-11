import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage';
import { useGetProjets } from '../../actions';
import { useRouter } from 'next/router';
import Loader from '../../components/Loader';

const Projet = () => {
    const router = useRouter()
    const { projets, error, loading } =
        useGetProjets(router.query.id ? `/api/v1/projets/${router.query.id}` : null)
    console.log(projets)
    return (
        <BaseLayout>
            <BasePage>
                {loading && <Loader />}
                {projets &&
                    <>
                        <h1>{projets.title}</h1>
                        <p>{projets.id}</p>
                        <p>{projets.body}</p>
                    </>
                }
                {error &&
                    <div className="alert alert-danger">{error.message}</div>
                }
            </BasePage>
        </BaseLayout>
    )
}


export default Projet