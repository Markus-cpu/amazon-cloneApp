import React from "react";
import "./Product.css";
import StarRateIcon from '@material-ui/icons/StarRate';
import {useStateValue} from "../../../stateProvider";

const Product = ({ title, price, image, rating, id }) => {
    const [{}, dispatch] = useStateValue()
    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price: price,
                rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarRateIcon />
                    ))}
                </div>
            </div>
            <img src={image} alt=''/>
            <button onClick={ addToBasket }>Add to basket</button>
        </div>
    )
}

export default Product