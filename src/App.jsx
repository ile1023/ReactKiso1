import {Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Header.jsx';
import ThreadList from './ThreadList.jsx';
import NewThread from './NewThread.jsx'


function App() {
  return (
    <div>
      
      <Header />
      <Routes>
        <Route path='/' element={<ThreadList />}/>
        <Route path='/threads/new' element={<NewThread />} />
      </Routes>
    </div>
    
  );
}

export default App;