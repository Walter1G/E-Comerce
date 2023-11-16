import React from 'react';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
const {all_product} = useContext(ShopContext)
const {productId} = useParams();

    return (
        <div>
            
        </div>
    );
}

export default Product;
