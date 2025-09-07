
import { useDispatch, useSelector } from 'react-redux';
import { asyncgetusers } from './store/reducer/userAction';


function App() {
    const dispatch = useDispatch();
    const data = useSelector((state)=> state);
    console.log(data);
    
  return (
    <>
      <h1 onClick={()=>{dispatch(asyncgetusers())}}>hello</h1>
      
    </>
  )
}

export default App
