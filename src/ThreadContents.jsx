import './ThreadContent.css';
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function ThreadContents(){ 
    const {threadId} = useParams();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const detailData = async () => {
            try {
                const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`);
                const data = await response.json();
                setPosts(data.posts);
                setLoading(false);
            } catch (error) {
                console.error('エラーです');
                setLoading(false);
            }
        };
        detailData();
    }, [threadId]);

    if (loading) return <p>読み込み中...</p>;
    return(
        <div className='ThreadContents'>
            <p>投稿の詳細</p>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ThreadContents;