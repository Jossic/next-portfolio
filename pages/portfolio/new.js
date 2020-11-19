
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage';
import withAuth from '../../hoc/withAuth';
import { Col, Row } from 'reactstrap';
import ProjectForm from '../../components/ProjectForm';


const NewProject = ({ user, loading: userLoading }) => {
    return (
        <BaseLayout
            user={user}
            loading={userLoading}
        >
            <BasePage header="Ajouter un projet">
                <Row>
                    <Col md='8'>
                        <ProjectForm />
                    </Col>
                </Row>

            </BasePage>
        </BaseLayout>
    )
}

export default withAuth(NewProject)('admin')