import Header from './componenets/Header';
import Blogs from './componenets/Blogs';
import Pagination from './componenets/Pagination';
import { AppContext } from './context/AppContext';
import './App.css';
import { useContext, useEffect } from 'react';

function App() {
  const {fatchdata}=useContext(AppContext);
  useEffect(()=>{
    fatchdata();
  },[])
  return (
    <div className="App">
      <div>
      <Header/>
      <Blogs/>
      <Pagination/>
      </div>
      
    </div>
  );
}

export default App;
