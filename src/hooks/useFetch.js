import { useEffect, useState} from 'react';

export const useFetch = (url, initialData)=>{
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(()=>{
        fetch(url)
        .then(response=>{
            if(!response.ok){
                throw new Error("Something went wrong!");
            }
            return response.json();
        })
        .then(payload=>{
            setData(payload);
            setIsLoading(false);
            setError('');
        })
        .catch(e=>{
            setData(initialData);
            setIsLoading(false);
            setError(e.message);
        });
       
    }, [])
    return {
        data,
        isLoading,
        error
    }
}