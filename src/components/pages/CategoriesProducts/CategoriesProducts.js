import React from 'react';
import { useParams } from 'react-router-dom';
import PrimaryProductCard from './../../shared/PrimaryProductCard/PrimaryProductCard';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '../../shared/Loading/Loading';

const CategoriesProducts = () => {
    const { cty } = useParams();

    const {data:products, isLoading} = useQuery(['categories-products', cty], ()=>(
        axios.get(`http://localhost:5000/categories-products?cty=${cty}`)
        .then(res => res?.data)
    ));

    // Set loading status
    if(isLoading) <Loading />;

    return (
        <div className='margin-top'>
            <div className='container'>
                <h1 style={{ textTransform: "uppercase", marginBottom: '20px', fontSize: '24px' }}> {cty?.split('-').join(' ')} </h1>

                <div className='product-container'>
                    {
                        products?.map(product => (
                            <PrimaryProductCard
                                key={product?._id}
                                product={product} />
                        ))
                    }
                </div>
            </div>
        </div >
    );
};

export default CategoriesProducts;