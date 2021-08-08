import { Box } from '@material-ui/core'
import Menu from './Menu/Menu.js'
import Logo from './Logo/Logo.js'
import './testStyle.css'
import React from 'react'
import headerTextArray from './headerTextArray.js'
import { useState } from 'react'
const Header = () => {
    const [headerText, setHeaderText] = useState(headerTextArray[0])
    return (
        <>
            <div className="start-screen">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    padding="30px 30px 0px 30px"
                    alignItems="center"
                >
                    <Logo />
                    <div>
                        <Menu setHeaderText={setHeaderText} />
                    </div>
                </Box>
                <div className="title">
                    <h1>{headerText}</h1>
                </div>
            </div>
        </>
    )
}

export default Header
