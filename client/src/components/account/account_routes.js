import React from 'react';
import { Route, Switch } from 'react-router-dom';
import auth from '../../hoc/auth';
import SignIn from './sign_in';
import SignUp from './sign_up';
import NotFound from '../general/404'

export default ({match: {path}}) => {

    return (
        <Switch>
            <Route path={`${path}/sign_in`} component={ auth(SignIn, '/account', false) }/>
            <Route path={`${path}/sign_up`} component={ auth(SignUp, '/account', false) }/>
            <Route component={NotFound}/>
        </Switch>
    )
}
