import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage';
import Link from 'next/link'
import { useGetProjets } from '@/actions';


const Portfolio = () => {
    const { projets, error } = useGetProjets()

    return (
        <BaseLayout>
            <BasePage>
                <h1>Page Portfolio</h1>
                {projets &&
                    <ul>
                        {
                            projets.map(projet => (
                                <li key={projet.id}>
                                    <Link as={`/portfolio/${projet.id}`} href='/portfolio/[id]'>
                                        <a>
                                            <span>{projet.id} :</span> <span>{projet.title}</span>
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                }
                {error &&
                    <div className="alert alert-danger">{error.message}</div>
                }

            </BasePage>
        </BaseLayout>
    )
}

export default Portfolio