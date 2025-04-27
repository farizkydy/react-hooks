import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [job, setJob] = useState("")
  const API_URL = 'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/employee'


  // Load data dari localStorage saat pertama kali render
  useEffect(() => {
    getData()
  }, []);


  const getData = () => {
    axios.get(API_URL)
    .then(response => {
      console.log(response)
      setData(response.data); // reqres.in return { data: [...] }
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
      setLoading(false);
    });
  }

  const postData = () => {
    axios.post(API_URL, {
      name: name,
      email: job
    }).then(() => {
    getData()
  }).catch((error) => {
    alert('something when wrong')
  })
  }

  if (loading) return <p>loading</p>
  return (
    <div>
    <h1>User List</h1>
    <div className="form" style={{ marginBottom: '20px'}}>
      <input type="text"
      value={name}
      onChange={e => setName(e.target.value)}
      placeholder='Input your name' />

      <input type="text"
      value={job}
      onChange={e => setJob(e.target.value)}
      placeholder='Input your job' />  

      <button onClick={postData}>Create User</button>
    </div>
    <ul>
      {data.map(user => (
        <li key={user.id}>
          {user.name} {user.email}
        </li>
      ))}
    </ul>
  </div>
  );
}

export default App;
