import React,{useEffect, useState} from 'react'
import './Style.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import axios from 'axios';


function ResultLink({input}) {
   


  const[shortenlink, setShortenLink] = useState("");
  const[error, setError] = useState(false);

  // const[copy, setCopy] = useState({shortenlink});

  const fetchdata = async () => {


  try{
    const res = await axios(`https://api.shrtco.de/v2/shorten?url=${input}`)
    setShortenLink(res.data.result.full_short_link2)
    console.log(shortenlink)

  }
  catch(err){
    setError(err)

  }
}

useEffect(
  () => {

    fetchdata();


  },[input]
)





  return (
    <div>
        {shortenlink && <div className='centerhr'>
        <p className='para'>{shortenlink}</p> 
        <CopyToClipboard text= {shortenlink} >
        <button type='button' value={shortenlink}>Copy to Clipboard</button>


        </CopyToClipboard>

      </div>} 
      
    </div>
  )
}

export default ResultLink