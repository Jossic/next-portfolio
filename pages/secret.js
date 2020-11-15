
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { Spinner } from 'react-bootstrap';
import Redirect from '../components/shared/Redirect';



const Secret = () => {
    const { data, loading } = useGetUser()
    const router = useRouter()

    if (loading) {
        return <Spinner />
    }

    if (!data) {
        return <Redirect to='/api/v1/login' />
    } else {
        return (
            <BaseLayout
                user={data}
                loading={loading}
            >
                <BasePage>
                    <h1>Page Secret</h1>
                </BasePage>
            </BaseLayout>
        )
    }

}

export default Secret