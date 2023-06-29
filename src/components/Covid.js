import React, { useEffect, useState } from 'react';

const Covid = () => {
    const[data , setData] = useState([]);

const getCovidDate = async() => {
    try{
        const res = await fetch("https://data.covid19india.org/data.json");
        const actualData =  await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
        // console.log(res);
    }
    catch(error)
    {
         console.log(error);
    }

};

useEffect(()=> {
          getCovidDate();
},[])

return (
    <>
       <section>
        <h1>🔴 LIVE</h1>
        <h2>COVID-19  CORONA VIRUS LIVE TRACKER</h2>
        <ul>
            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>OUR</span>Country</p>
                       <p className='card__total card__small'>INDIA</p>
                    </div>
                </div>                
            </li>

            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>TOTAL</span>Recovered</p>
                       <p className='card__total card__small'>{data.recovered}</p>
                    </div>
                </div>                
            </li>

            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>TOTAL</span>Confirmed</p>
                       <p className='card__total card__small'>{data.confirmed}</p>
                    </div>
                </div>                
            </li>

            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>TOTAL</span>Deaths</p>
                       <p className='card__total card__small'>{data.deaths}</p>
                    </div>
                </div>                
            </li>

            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>TOTAL</span>Active</p>
                       <p className='card__total card__small'>{data.active}</p>
                    </div>
                </div>                
            </li>

            <li className='card'>
                <div className='card__main'>
                    <div className='card__inner'>
                       <p className='card__name'><span>LAST</span>Country</p>
                       <p className='card__total card__small'>{data.lastupdatedtime}</p>
                    </div>
                </div>                
            </li>
        </ul>
        </section>
    </>
  )
}

export default Covid;