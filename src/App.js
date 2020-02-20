import React, {useState} from 'react';
import './App.css';
import Team from './team_member';
import Person from "./person"


function App() {
  const [member, setMember] = useState([
    {
      id: Date.now(),
      name: "Jerry",
      email: "Happy@.com",
    }
  ]);
console.log(member);
  const addNewMember = people => {
    const newMember = {
      id: Date.now(),
      name: people.name,
      email: people.email
    };

    setMember([...member, newMember]);
  };

  return (
    <div className="App">

    <Team addNewMember={addNewMember}/>
    <Person member={member}/>
          
    </div>
  );
}

export default App;
