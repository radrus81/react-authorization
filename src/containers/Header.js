import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import { logout } from '../store/actions/actionAuthorization'


const mapStateToProps = state => ({
    isAuthenticated: !!state.authorization.token,
    fio: state.authorization.fio,
    login: state.authorization.login
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)
