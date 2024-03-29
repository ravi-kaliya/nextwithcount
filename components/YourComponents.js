// YourComponent.js
import React, { useState, useEffect } from 'react';
import { fetchApiData } from '@/utils/api';

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log('data: ', data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetchApiData();
        setData(apiData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Display your API data here */}
      {data && (
        <ul>
          <li key={data.id}>
            {data.userId}. {data.title}
          </li>
        </ul>
      )}
    </div>
  );
};

export default YourComponent;
