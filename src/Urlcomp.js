import React, { useState } from 'react'
import Inputres from './components/Url/Inputres';
import ResultLink from './components/Url/ResultLink';


function Urlcomp() {

  const [input, setInput] = useState("")

  return (
    <div>
        
        <Inputres setInput = {setInput}/>
        <ResultLink input = {input}/>

    </div>
  )
}

export default Urlcomp