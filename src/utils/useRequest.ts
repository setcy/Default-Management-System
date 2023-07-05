import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';

export const baseUrl = 'http://localhost:8000/api';

export default <T>(url: string, defaultValue: T): [boolean, T, () => void] => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<T>(defaultValue);

    const [refreshIndex, setRefreshIndex] = useState(0);  // New state for refresh functionality

    const refresh = useCallback(() => setRefreshIndex(prevIndex => prevIndex + 1), []);  // Function to trigger data reload

    useEffect(() => {
        setLoading(true);
        axios
            .get(baseUrl + url)
            .then((res) => {
                setData(res.data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url, refreshIndex]);

    return [loading, data, refresh];
};
