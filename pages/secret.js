
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { Spinner } from 'react-bootstrap';
import Redirect from '../components/shared/Redirect';
import withAuth from '../hoc/withAuth';




const Secret = ({ title }) => {
    const { data, loading } = useGetUser()

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
                    <h1>Page Secret - {title}</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}

// HOC - High Order Component

// Depreciate
// function withAuth(Component) {
//     return function (props) {
//         return <Component title='Teeeeeeeeeest' {...props} />
//     }
// }

// const withAuth = (Component) => (props) => <Component title='Teaaaaeeeest' {...props} />


export default withAuth(Secret)