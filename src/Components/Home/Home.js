import React from 'react';
import Fooditems from '../Fooditems/Fooditems';
import SearchBox from './SerchBox/SearchBox';

const Home = () => {
    return (
        <div>
            <SearchBox></SearchBox>
            <Fooditems></Fooditems>
        </div>
    );
};

export default Home;