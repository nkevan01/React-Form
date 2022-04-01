import React, { useState } from 'react'

const Header = () => {
    const [firstName, updateFirstName] = useState('');
    const [lastName, updateLastName] = useState('');
    const handleSubmit = (e) =>{
 e.preventDefault();
 
    }
    return (
    <>
        <form className='px-20 py-20'>
        <input type="text " className="border-slate-900"
          placeholder="First Name"
          require
          value={firstName} 
          onChange={(e) => updateFirstName(e.target.value)} 
          
        /><br/><br/>
        <input type="text" className="border-slate-900"
         value={lastName}
          placeholder="Last Name"
          onChange={(e) => updateLastName(e.target.value)}
          />
        <input type="text" placeholder="Enter your Email" />
        <br/><br/>
        <button onClick={handleSubmit}>Submit</button>
        <p>{firstName}</p>
        <p>{lastName}</p>
        </form>
    </>
    )
}

export default Header; 