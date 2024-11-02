import React, {useState, useEffect} from 'react';
import './ThreadList.css'
function ThreadList(){
    const [threads, setThreads] = useState([]);
    useEffect(() => {
        const fecthThreads = () => {
            fetch('https://railway.bulletinboard.techtrain.dev/threads')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setThreads(data);
            })
            
            };
        fecthThreads();
    },[]);
    return(
        <div>
            <ul className='thread-list'>
                {threads.map((thread) => (
                    <li key={thread.id} className='thread-item'>
                        <button className='thread-button'>{thread.title}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ThreadList;