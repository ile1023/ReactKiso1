import {Link} from 'react-router-dom'
import React, {useState} from 'react';
import './NewThread.css'
function NewThread ()  {
    
        const[title, setTitle] = useState('');
        const handleTitleChange = (e) => {
            setTitle(e.target.value);
        };
        const handleSubmit = async (e) => {
            e.preventDefault();
            if(!title) return;
            try {
                const response =  await fetch('https://railway.bulletinboard.techtrain.dev/threads', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({title}),
                })
                if(response.ok){
                    setTitle('');
                    alert('スレッドが作成されました！');
                }
    
            } catch (error) {
                console.error("エラーです", error);
            }
           
        }
       
    
    return(
        <div className='NewThread'>
            <p>スレッド新規作成</p>
            <Link to='/'>Topに戻る</Link>
            <form onSubmit={handleSubmit}>
                <div className='title'>
                    <label htmlFor='thread-title'>スレッドのタイトル</label>
                    <input
                        id='thread-title'
                        type='text'
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                </div>
                <button type='submit'>登録</button>
            </form>
        </div>
    );
}


export default NewThread;