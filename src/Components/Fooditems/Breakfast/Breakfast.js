import React from 'react';
import { useNavigate } from 'react-router-dom';
import SingleFood from '../SingleFood/SingleFood';
import './Breakfast.css'
const Breakfast = (props) => {
    const { img, price, name, description, id } = props.allbreakfast;
    const navigate = useNavigate();

    const singleFood = (id, name) => {
        navigate(`/breakfast/${id}`)

    }
    return (

        <div className='food-box col-lg-4 col-md-6 col-sm-12 breakfast-container'>

            <img src={img} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <button onClick={() => singleFood(id, name)} className='mb-2'>View Details</button>
            </div>
        </div>
    );
};

export default Breakfast;