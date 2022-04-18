import React from 'react';

const Dinner = (props) => {
    const { img, price, name, description } = props.allDinner;
    return (
        <div className='food-box col-lg-4 col-md-6 col-sm-12 breakfast-container'>
            <img src={img} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default Dinner;