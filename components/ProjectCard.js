import { Card, CardSubtitle, Badge, CardLink, CardBody, CardText, CardTitle } from 'reactstrap';

const ProjectCard = ({ project }) => {
    return (
        <div>
            <Card className='portfolio-card'>
                <CardBody>
                    <CardTitle tag="h5">{project.titre}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted"><Badge color="primary">{project.technos.join(' - ')}</Badge></CardSubtitle>
                </CardBody>
                <img width="100%" height="200px" src={project.vignette} alt={project.titre} />
                <CardBody>
                    <CardText>{project.descriptif}</CardText>
                    <CardLink href={project.lien}>Voir le projet</CardLink>
                    {/* <CardLink href="#">Another Link</CardLink> */}
                </CardBody>
            </Card>
        </div>
    )
}

export default ProjectCard
