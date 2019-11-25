import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import Layout from '../components/Layout'
import Authorization from '../containers/Authorization'
import Mainpage from '../components/Mainpage/Mainpage'
import { connect } from 'react-redux'
import { autoAuth } from '../store/actions/actionAuthorization'


class Main extends Component {

    componentDidMount() {
        this.props.autoAuth()
    }

    render() {

        var routes;

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/" component={Mainpage} />
                </Switch>
            )
        } else {
            routes = (
                <Switch>
                    <Route path="/" component={Authorization} />
                </Switch>
            )
        }

        return (
            <Layout>
                {routes}
            </Layout >
        )
    }
}

const mapStateToProps = state => ({//общий state из всех reduceres, описаны в папке state/reducer      
    isAuthenticated: !!state.authorization.token,//нужно для того чтобы записать в props значение из store->authorization     
    isMainpage: state.authorization.isMainpage
})

function mapDispatchToProps(dispatch) {
    return {
        autoAuth: () => dispatch(autoAuth())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
