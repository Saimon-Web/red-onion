import React from 'react';
import { useParams } from 'react-router-dom';

const BreakfastDetail = () => {
    const { breakfastId } = useParams();
    return (
        <div>
            <h1>detail:{breakfastId}</h1>


        </div>
    );
};

export default BreakfastDetail;