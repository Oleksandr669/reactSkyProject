import React from 'react'
import { Box } from '@material-ui/core'
import Menu from './Menu/Menu.js'
import Logo from './Logo/Logo.js'
import './testStyle.css'

const Header = () => {
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
                        <Menu />
                    </div>
                </Box>
                <div className="title">
                    <h1>Explore the resort</h1>
                </div>
            </div>
        </>
    )
}

export default Header
