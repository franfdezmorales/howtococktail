import useSWR from 'swr';

function fetcher(route) {
    return fetch(route)
        .then((r) => r.ok && r.json())
        .then((user) => user || null)
}

export function useAuth() {
    const { data: user, error, mutate: setUser } = useSWR('/api/user', fetcher)
    const loading = user === undefined
    
    return {
        user,
        loading,
        error,
        setUser
    };
}