import { useEffect, useState } from 'react';

export const useGetProjets = () => {
    const [projets, setProjets] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        async function getProjets() {
            const res = await fetch('/api/v1/projets');
            const result = await res.json();
            if (res.status !== 200) {
                setError(result)
            } else {
                setProjets(result);
            }
        }

        getProjets()
    }, [])

    return { projets, error }
}