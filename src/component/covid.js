import React, { useEffect ,useState} from 'react'
import './covid.css';
const Covid = () => {




   
    const[data,setData]=useState([])
const getCovidData =   () =>{
      fetch('https://data.covid19india.org/data.json').then((coviddata)=>{
        console.log(coviddata);
        return coviddata.json();
      }).then((actualcoviddata)=>{
console.log(actualcoviddata.statewise[0]);
   
    setData(actualcoviddata.statewise[0]);
      })  
   
}

    useEffect(()=>{
getCovidData();
    },[])

  return (
   <>
   <section >

   <h1> 🛑LIVE</h1>
      <h2>COVID LIVE TRACKER</h2>
  
  <ul>
    <li className='card'>
<div className='card__main'>
<div className='card__inner'>
<p className='card__name'><span>OUR</span>COUNTRY</p>
<p className='card__total card__small'>INDIA</p>

</div>

</div>
</li>


<li className='card'>
<div className='card__main'>
<div className='card__inner' style={{backgroundColor:'green'}}>
<p className='card__name'><span>TOTAL</span>RECOVERD</p>
<p className='card__total card__small'>{data.recovered}</p>

</div>

</div>
</li>
<li className='card'>
<div className='card__main'>
<div className='card__inner' style={{backgroundColor:'orange'}}>
<p className='card__name'><span>TOTAL</span>CONFIRMED</p>
<p className='card__total card__small'>{data.confirmed}</p>

</div>

</div>
</li>
<li className='card'>
<div className='card__main'>
<div className='card__inner' style={{backgroundColor:' skyblue'}}>
<p className='card__name'><span>TOTAL</span>DEATHS</p>
<p className='card__total card__small'>{data.deaths}</p>

</div>

</div>
</li>
<li className='card'>
<div className='card__main'>
<div className='card__inner' style={{backgroundColor:'red'}}>
<p className='card__name'><span>TOTAL</span>ACTIVE</p>
<p className='card__total card__small'>{data.active}</p>

</div>

</div>
</li>
<li className='card'>
<div className='card__main'>
<div className='card__inner' style={{backgroundColor:'blue'}}>
<p className='card__name'><span>LAST</span>UPDATED TIME</p>
<p className='card__total card__small'>{data.lastupdatedtime}</p>

</div>

</div>
</li>
  </ul>
   </section>

   </>
      
  )
}

export default Covid
