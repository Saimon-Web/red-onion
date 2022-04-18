import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <h1>Products</h1>

            <nav>
                <Link to='featured'>Featured</Link>
                <Link to='new'>new</Link>
            </nav>
            <Outlet></Outlet>

        </div>
    );
};

export default Products;