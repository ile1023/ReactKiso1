import React, {useState, useEffect} from 'react';
import './ThreadList.css'
function ThreadList(){
    const [threads, setThreads] = useState([]);
    useEffect(() => {
        const fetchThreads = () => {
            fetch('https://railway.bulletinboard.techtrain.dev/threads')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setThreads(data);
            })
            .catch((error) => {
                console.error("エラーです", error);
            })
            
            };
        fetchThreads();
    },[]);
    return(
        <div>
            <p>新着スレッド</p>
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