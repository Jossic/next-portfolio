

const withAuth = (Component) => {
    return (props) => <Component {...props} />
}

export default withAuth
