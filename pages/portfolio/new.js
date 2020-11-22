
import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage';
import withAuth from '../../hoc/withAuth';
import { Col, Row } from 'reactstrap';
import ProjectForm from '../../components/ProjectForm';
import { createProject } from '../../actions/projectActions';


const NewProject = ({ user, loading: userLoading }) => {

    const _createProject = (data) => {
        // alert(JSON.stringify(data))
        createProject(data)
    }

    return (
        <BaseLayout
            user={user}
            loading={userLoading}
        >
            <BasePage header="Ajouter un projet">
                <Row>
                    <Col md='8'>
                        <ProjectForm onSubmit={_createProject} />
                    </Col>
                </Row>

            </BasePage>
        </BaseLayout>
    )
}

export default withAuth(NewProject)('admin')