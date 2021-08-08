import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const CartsListItem = ({ title, text, image }) => {
    return (
        <Card>
            <CardContent>
                <div>
                    <img src={image} />
                    <h4>{title}</h4>
                    <span>{text}</span>
                </div>
            </CardContent>
        </Card>
    )
}
CartsListItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.image,
}

export default CartsListItem
