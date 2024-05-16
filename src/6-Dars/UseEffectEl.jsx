import React, { useState, useEffect } from 'react';
import './style.css'

const UseEffectEl = () => {

    let [data, setDate] = useState([]);

    const Api = () => {
        fetch('https://themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(res => setDate(res.meals))
    }
    
    useEffect(() => {
        Api()
    }, []);

    return (
        <>
           {data.map(db => (
                <div className="card">
                    <img width={'100%'} src={db.strMealThumb} alt="" /><br/><br/>
                    <h1>{db.strMeal}</h1>
                    <p>{db.strInstructions}</p>
                    <button className='btns' onClick={Api}>Next</button>
                    <button className='btns'><a href={db.strYoutube}>YouTube</a></button>
                </div>
           ))} 

           <footer>
                <h1 className='footerTitle'>IT - Park Margilan</h1>
           </footer>
        </>
    );
};


export default UseEffectEl;