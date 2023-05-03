import React from 'react';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt='product' style={{width:"200px"}} />
            <h3>{productData.title}</h3>
            <p>{productData.price}</p>
            <div>
                <a href="#">Details</a>
                <button>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;