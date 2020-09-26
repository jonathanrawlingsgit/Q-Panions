import React from 'react';
import { Route } from 'react-router-dom';

import { UserList } from './Users';


const Router = () => {
    return (
        <>
        <Route exact path="/user" render={UserList} />
        </>
    )
}

export default Router;