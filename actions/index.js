import { useEffect, useState } from 'react';

export const useGetProjets = (url) => {
    const [projets, setProjets] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getProjets() {
            const res = await fetch(url);
            const result = await res.json();
            if (res.status !== 200) {
                setError(result)
            } else {
                setProjets(result);
            }
            setLoading(false)
        }
        url && getProjets()
    }, [url])

    return { projets, error, loading }
}