import React, { Fragment, useState } from 'react'
import usePolling from '../../hooks/usePolling';

export default function LatestNews() {
    const [pollingInterval, setPollingInterval] = useState(15 * 1000);
    const [{data: news, isLoading, hasError}] = usePolling(process.env.REACT_APP_NEWS_URL, pollingInterval, []);
    
    return (
        <Fragment>
            {isLoading && <p>Loading...</p>}
            <ul>
                {news.map(o => <li key={o.id}>#{o.id} {o.content}</li>)}
            </ul>
            <button onClick={() => setPollingInterval(prev => prev - 1000)}>Faster</button>
        </Fragment>
    )
}
