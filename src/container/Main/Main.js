import { Route, Switch } from 'react-router-dom'
import React from 'react'
import TestComponent from '../../components/TestComponent'
import Explore from '../../pages/Explore/Explore'

const Main = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => <TestComponent />} />
                <Route path="/explore" component={Explore} />
            </Switch>
        </>
    )
}

export default Main
