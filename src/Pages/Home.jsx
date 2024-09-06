import React from 'react';
// import Navbar from '../Layout/Navbar';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Displayproduct from '../Components/Products/Displayproduct';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const items = useLoaderData()
    return (
        <div>
            
            <Header></Header>
            <Displayproduct items={items}></Displayproduct>
            <Footer></Footer>
        </div>
    );
};

export default Home;