
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage';
import withAuth from '../hoc/withAuth';




const Secret = ({ user, loading }) => {
    return (
        <BaseLayout user={user} loading={loading}>
            <BasePage>
                <h1>Secret Page - Hello {user.name}</h1>
            </BasePage>
        </BaseLayout>
    )

}

// HOC - High Order Component

// Depreciate
// function withAuth(Component) {
//     return function (props) {
//         return <Component title='Teeeeeeeeeest' {...props} />
//     }
// }

// const withAuth = (Component) => (props) => <Component title='Teaaaaeeeest' {...props} />


export default withAuth(Secret)()