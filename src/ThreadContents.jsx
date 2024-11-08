import './ThreadContent.css'
import { useParams } from 'react-router-dom'

function ThreadContents(){ 
    const {thread_id} = useParams();
    const detailData = async () => {
        const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads');
        const data = response.json();
    }
    return(
        <div>
            <p>{thread_id}</p>
           
        </div>
    );
}
export default ThreadContents;