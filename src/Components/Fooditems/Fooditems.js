import React, { useEffect, useState } from 'react';

// import Breakfast from './Breakfast/Breakfast';
import './Fooditems.css'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Breakfast from './Breakfast/Breakfast';
import Lunch from './Lunch/Lunch';
import Dinner from './Dinner/Dinner';


const Fooditems = () => {
    const [breakfast, setBreakfast] = useState([]);
    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfast(data))
    }, [])
    const [lunch, setLunch] = useState([]);
    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => setLunch(data))
    }, [])
    const [dinner, setDinner] = useState([]);
    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinner(data))
    }, [])

    return (
        <div >
            <Tabs className="Tabs">
                <TabList className='tablist'>
                    <Tab className='tab'>BreakFast</Tab>
                    <Tab className='tab'>Lunch</Tab>
                    <Tab className='tab'>Dinner</Tab>
                </TabList>
                <TabPanel>
                    <p>Length {breakfast.length}</p>
                    <div className='container'>
                        <div className="row">
                            {
                                breakfast.map(allbreakfast => <Breakfast
                                    key={breakfast.id}
                                    allbreakfast={allbreakfast}
                                ></Breakfast>)
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='container'>
                        <div className="row">
                            {
                                lunch.map(allLunch => <Lunch
                                    key={lunch.id}
                                    allLunch={allLunch}
                                ></Lunch>)
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='container'>
                        <div className="row">
                            {
                                breakfast.map(allDinner => <Dinner
                                    key={dinner.id}
                                    allDinner={allDinner}
                                ></Dinner>)
                            }
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Fooditems;