import {Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Header.jsx';
import ThreadList from './ThreadList.jsx';
import NewThread from './NewThread.jsx'
import ThreadContents from './ThreadContents.jsx'


function App() {
  return (
    <div>
      
      <Header />
      <Routes>
        <Route path='/' element={<ThreadList />}/>
        <Route path='/threads/new' element={<NewThread />} />
        <Route path='/threads/:threadId' element={<ThreadContents />} />
      </Routes>
    </div>
    
  );
}

export default App;