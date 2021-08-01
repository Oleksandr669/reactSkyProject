import { Box } from '@material-ui/core'
import React from 'react'
import './test2.css'

const FirstSection = () => {
    return (
        <div className="backGround-container">
            <Box
                height="100vh"
                display="flex"
                maxWidth="1200px"
                margin="0 auto"
            >
                <Box>
                    <div className="rental-item">
                        <div className="rental-link">Equipment rental</div>
                        <div className="rental-text">Sed ultrices magna</div>
                    </div>
                </Box>
                <Box>
                    <div className="shop-item">
                        <div className="rental-link">Our shop</div>
                    </div>
                </Box>
            </Box>
        </div>
    )
}

export default FirstSection
