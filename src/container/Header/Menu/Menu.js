import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import headerTextArray from '../headerTextArray'
import PropTypes from 'prop-types'

const Menu = ({ setHeaderText }) => {
    return (
        <>
            <Button
                color="black"
                onClick={() => setHeaderText(headerTextArray[0])}
            >
                <Link to="/">Home</Link>
            </Button>
            <Button
                color="inherit"
                onClick={() => setHeaderText(headerTextArray[1])}
            >
                <Link to="explore">EXPLORE THE RESORT</Link>
            </Button>

            <Button
                color="inherit"
                onClick={() => setHeaderText(headerTextArray[2])}
            >
                THE MOUNTAIN
            </Button>
            <Button
                color="inherit"
                onClick={() => setHeaderText(headerTextArray[3])}
            >
                OUR OFFER
            </Button>
            <Button
                color="inherit"
                onClick={() => setHeaderText(headerTextArray[4])}
            >
                CONTACT US
            </Button>
        </>
    )
}

Menu.propTypes = {
    setHeaderText: PropTypes.string,
}

export default Menu
