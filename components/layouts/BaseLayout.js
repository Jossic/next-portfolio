import Header from '@/components/shared/Header'

const BaseLayout = ({ children, className, user, loading, navClass = 'with-bg' }) => {
    return (
        <div className="layout-container">
            <Header
                user={user}
                loading={loading}
                className={navClass}
            />
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    {children}
                </div>
            </main>
        </div>

    )
}

export default BaseLayout
