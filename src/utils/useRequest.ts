import axios from 'axios';
import {useEffect, useState} from 'react';

export const baseUrl = 'http://127.0.0.1:4523/m1/2948173-0-default/api';

export default <T>(url: string, defaultValue: T): [boolean, T] => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>(defaultValue);

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
  }, [url]);

  return [loading, data];
};
