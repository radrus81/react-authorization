import { connect } from 'react-redux'
import Authorization from '../components/Authorization/Authorization'
import { auth } from '../store/actions/actionAuthorization'



const mapStateToProps = state => ({
    errMessage: state.authorization.errMessage,
})

const mapDispatchToProps = dispatch => ({
    auth: (login, password) => dispatch(auth(login, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Authorization)
