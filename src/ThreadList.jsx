import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './ThreadList.css'

function ThreadList(){
    const [threads, setThreads] = useState([]);
    useEffect(() => {
        try {
            const fetchThreads = async() => {
                const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads')
                const data = await response.json();
                setThreads(data);
                };
            fetchThreads();
        } catch (error) {
            console.error("エラーです", error);
        }
        
    },[]);
    return(
        <div>
            <p>新着スレッド</p>
            <ul className='thread-list'>
                {threads.map((thread) => (
                    <li key={thread.id} className='thread-item'>
                        <Link to={`/threads/${thread.id}`} className='thread-button'>{thread.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ThreadList;