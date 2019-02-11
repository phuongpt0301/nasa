import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faPlus
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import { Grid } from '../components/common/grid.css';
import '../styles/index.scss';

import PageNotFound from './errors';
import List from './list';
import Search from './search';

library.add(faPlus);

export class App extends Component {
    render() {
        return (
            <Grid>
                <Router>
                    <Switch>
                        <Route exact path='/' component={List} />
                        <Route path='/search' component={Search} />
                        <Route path='*' component={PageNotFound} />
                    </Switch>
                </Router>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return { ...state };
};
// const mapDispatchToProps = dispatch => {
//     return {
//         setDataAuthFromStore: (dataAuth) => { dispatch(setDataAuthFromStore(dataAuth)); }
//     };
// };
export default withRouter(connect(mapStateToProps)(App));
