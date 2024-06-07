import StarList from './components/StarList';
import Dialog from './components/Dialog.js'
import './style/style.css'
import { useState} from 'react';

function App() {
  const [open,setOpen] = useState(false);
  
  return (
    <main>
      <div className='container flex'>
        <StarList/>
        <button className='show-dialog' onClick={()=>{setOpen(true)}}>Show Dialog</button>
      </div>
      <Dialog open={open}/>
    </main>
  );
}

export default App;
