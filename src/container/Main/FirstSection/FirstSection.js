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
                justifyContent="space-between"
                flex="0 1 100%"
            >
                <Box flex="0 1 100%">
                    <div className="first-collum column">
                        <div className="rental-item">
                            <div className="link">Equipment rental</div>
                            <div className="text">Sed ultrices magna</div>
                        </div>

                        <div className="shop-item">
                            <img src="./images/logo.png" />
                            <div className="link">Our shop</div>
                        </div>
                    </div>
                </Box>
                <Box flex="0 1 100%">
                    <div className="second-collum column">
                        <div className="lessons-item">
                            <div className="link">
                                Ski and Snowboard Lessons
                            </div>
                        </div>
                    </div>
                </Box>
                <Box flex="0 1 100%">
                    <div className="third-collum column">
                        <div className="jumping-item">
                            <div className="link">
                                Ski <br /> jumping
                            </div>
                            <div className="text">Fusce lobortis vel</div>
                        </div>

                        <div className="resort-item">
                            <div className="link str2192">
                                Explore the resort
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
        </div>
    )
}

export default FirstSection
