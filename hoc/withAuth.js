import { useGetUser } from '@/actions/user';
import Redirect from '@/components/shared/Redirect';

import { Spinner } from 'react-bootstrap';

const withAuth = (Component) => {
    return (props) => {
        const { data, loading } = useGetUser()

        if (loading) {
            return <Spinner />
        }

        if (!data) {
            return <Redirect ssr to='/api/v1/login' />
        } else {
            return <Component
                user={data}
                loading={loading}
                {...props}
            />
        }
    }
}

export default withAuth
