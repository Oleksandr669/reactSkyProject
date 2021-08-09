import React from 'react'
import PropTypes from 'prop-types'
import './Carts.css'

const CartsListItem = ({ title, text, image }) => {
    return (
        <div className="cartsItem">
            <div className="cartsImages">
                <img src={image} />
            </div>
            <h5>{title}</h5>
            <span>{text}</span>
        </div>
    )
}
CartsListItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.image,
}

export default CartsListItem
