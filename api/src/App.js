import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './component/UserList';
import Header from './component/Header';

function App() {
  const [users, setUsers] = useState()

 useEffect(() => {
  try {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setUsers(res.data));
  } catch (error) {
    console.log(error)
  }

  
 }, [])
 console.log(users)
 
  return (
    <div>
      <Header />
  
    <div className="App">
{users?users.map((el)=><UserList user={el}/>): <img src="https://c.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif"/>}
    </div>
    </div>
  );
}

export default App;
