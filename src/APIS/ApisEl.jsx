import React, { useState } from 'react';

const ApisEl = () => {

    let [data, setData] = useState([]);

    const Api = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(res => setData(res))
    }
    Api()

    return (
        <>
            {data.map(db => (
                <div className="box">
                    <h1>{db.name}</h1>
                    <p>{db.username}</p>
                    <p>{db.email}</p>
                    <p>{db.address.city}</p><hr />
                </div>
            ))}
        </>
    );
};


export default ApisEl;