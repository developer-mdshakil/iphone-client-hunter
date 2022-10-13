import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData();
    console.log(phones)
    return (
        <div>
            <h2>This is all information pages: {phones.length}</h2>
            {
                phones.map(phone => <li><Link to={`/phone/${phone.id}`}>{phone.name}</Link></li>)
            }
        </div>
    );
};

export default Home;