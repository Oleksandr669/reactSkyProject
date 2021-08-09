import React from 'react'
import cartsArray from './cartsArray'
import CartsListItem from './CartsListItem'

const CartsList = () => {
    return (
        <>
            {cartsArray.map(({ id, title, text, image }) => (
                <div key={id}>
                    <CartsListItem title={title} text={text} image={image} />
                </div>
            ))}
        </>
    )
}

export default CartsList
