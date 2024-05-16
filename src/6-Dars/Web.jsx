import React from 'react';
import Baza from './Baza.json';
import './style.css';

const Web = () => {
    return (
        <>
            <div className="cardBar">
                {Baza.map(db => (
                    <div className="card">
                        <img width={'100%'} src={db.rasm} alt="" />
                        <h1>{db.nomi}</h1>
                        <h3>{db.holati}</h3>
                        <h3>{db.rangi}</h3>
                        <h3>{db.batareya}</h3>
                        <h3>{db.xotira}</h3>
                        <h3>{db.narxi}</h3>
                    </div>
                ))}
            </div>
        </>
    );
};


export default Web;