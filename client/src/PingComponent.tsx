import React, { useEffect, useState } from 'react'

interface PongResponse {
  message: string;
}


const PingComponent = () => {
  const [pong, setPong] = useState<PongResponse>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('api/ping');
        if (res.status !== 200) {
          throw new Error('Something went wrong.');
        }
        const data = await res.json();
        setPong(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.error(e);
      }
    })();
  }
  ,[])

  return (
    <div>
      {loading && (
        'Loading...'
      )}

      {!loading && (
        pong!.message
      )}
    </div>
  );
}

export default PingComponent;

