import React, {useState} from 'react';


function Team (props) {

    const [newMember, setNewMember] = useState({
        name: "", 
        email: "",
      });

      const handleChanges = event => {
        console.log("event", event.target.value); 
        console.log("name", event.target); 
       
        setNewMember({...newMember,  [event.target.name]: event.target.value });
    
      };

      const submitForm = event => {
        console.log("submitting!");
        event.preventDefault(); 
        props.addNewMember(newMember);
        setNewMember({ name: "", email: "" }); 
      };
    



    return (
        <form onSubmit={submitForm}>
      
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="oooo"
          id="name"
          name="name"
          value={newMember.name}
           onChange={handleChanges}
        />
       
        <label htmlFor="email">email</label>
        <textarea
          id="email"
          name="email"
          placeholder="Add your note"
          value={newMember.email}
           onChange={handleChanges}
        />

        <button type="submit">Add Member</button>
      </form>
    );
    
  }

export default Team;