import useSWR from 'swr'

export const fetcher = (url) =>
    fetch(url).then(async res => {
        const result = await res.json();

        if (res.status !== 200) {
            return Promise.reject(result);
        } else {
            return result;
        }
    });


export const useGetProjets = () => {
    const { projets, error, ...rest } = useSWR(`/api/v1/projets`, fetcher);
    return { projets, error, loading: !projets && !error, ...rest }
}

export const useGetProjetsById = (id) => {
    const { projets, error, ...rest } = useSWR(id ? `/api/v1/projets/${id}` : null, fetcher);
    return { projets, error, loading: !projets && !error, ...rest }
}