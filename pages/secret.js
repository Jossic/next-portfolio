
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { Spinner } from 'react-bootstrap';
import { useRouter } from 'next/router';

const Secret = () => {
    const { data, loading } = useGetUser()
    const router = useRouter()

    if (loading) {
        return <Spinner />
    }

    if (!data) {
        router.push('/api/v1/login')
        return null;
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