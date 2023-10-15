import React, {useState} from 'react'
import './Style.css';

function Inputres({setInput}) {

    const[value, setValue] = useState("")

    const handleClick = () =>  {

        setInput(value);
        setValue("")

    }

  return (
    <div>
        <div className='center'>
        <h1>Link Shortner</h1>
        <br></br>
        Enter the Link<input type="text" placeholder='Enter the Link' value = {value} onChange={ e => setValue(e.target.value)}></input>
        <button type="button" onClick={handleClick}>Shorten</button><br></br>
        </div>

    </div>
  )
}

export default Inputres