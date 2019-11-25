import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from '../store/actions/actionAuthorization'

class Logout extends Component {

    componentDidMount() {
        this.props.logout()
    }

    render() {
        return <Redirect to={'/'} />
    }

}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout)//отработка клика на кнопку выйти
})

export default connect(null, mapDispatchToProps)(Logout)