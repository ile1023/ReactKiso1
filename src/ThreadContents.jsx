import './ThreadContent.css';
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function ThreadContents(){ 
    const {threadId} = useParams();
    console.log("threadId:", threadId); 
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newPost, setNewPost] = useState('');
    const [error, setError] = useState('');

    const detailData = async () => {
        try {
            console.log("Thread ID:", threadId);
            const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`);
            const data = await response.json();
            setPosts(data.posts);
            setLoading(false);
        } catch (error) {
            console.error('エラーです');
            setLoading(false);
        }
    };

    useEffect(() => {
        detailData();
    }, [threadId]);

    const NewPostSubmit = async (e) => {
        e.preventDefault();
        if (newPost.trim() === ''){
            setError('投稿内容がありません');
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({post: newPost}),

            });

            if(response.ok){
                setNewPost('');
                setError('');
                await detailData();
                alert('投稿されました!')
            }else{
                console.error('サーバーエラー:投稿ができません');
            }
        }catch (error) {
            console.error('ネットワークエラー:', error);
        }finally{
            setLoading(false);
        }
    };

    if (loading) return <p>読み込み中...</p>;
    return(
        <div className='ThreadContents'>
            <form onSubmit={NewPostSubmit}>
                <input
                    type='text'
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                />
                <button type='submit'>投稿</button>
            </form>
            <ul className='postList'>
                {posts.length > 0 ? (
                    posts.map(post => (
                    <li key={post.id}>
                        <p>{post.post}</p>
                    </li>
                    ))
                ) : (
                    <p>投稿がありません</p>
                 )}
            </ul>

            
        </div>
    );
}
export default ThreadContents;