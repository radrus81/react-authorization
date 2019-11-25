import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import AuthorizationFormSchema from './AuthorizationFormSchema'
import './Authorization.scss'
import login from '../../img/login.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { Alert } from 'reactstrap'

class Authorization extends Component {

    render() {
        return (
            <section className="mainBlockAuth">
                <div className="Authorization wrap">
                    <img src={login} alt="Scanfcode" />
                    <h1>Введите свои данные</h1>
                    <Formik
                        initialValues={{
                            login: '',
                            pass: ''
                        }}
                        validationSchema={AuthorizationFormSchema}
                        onSubmit={async (values, { resetForm, setSubmitting }) => {
                            this.props.auth(values.login, values.pass)
                            setSubmitting(false)
                        }}
                        render={({ errors, touched, values, isSubmitting }) => (
                            < Form >
                                {
                                    errors.login && touched.login &&
                                    <Alert color="danger" className="messErr">{errors.login}</Alert>
                                }
                                {
                                    this.props.errMessage !== '' ?
                                        <Alert color="danger" className="messErr">{this.props.errMessage}</Alert>
                                        : null
                                }
                                <div className="iconInput">
                                    <FontAwesomeIcon icon={faUser} size="lg" />
                                    <Field
                                        name="login"
                                        placeholder="Введите логин"
                                        type="text"
                                        value={values.login || ''}
                                    />
                                </div>
                                {
                                    errors.pass && touched.pass &&
                                    <Alert color="danger" className="messErr">{errors.pass}</Alert>
                                }
                                <div className="iconInput">

                                    <FontAwesomeIcon icon={faKey} size="lg" />
                                    <Field
                                        name="pass"
                                        placeholder="Введите пароль"
                                        type="password"
                                        value={values.pass || ''}
                                    />
                                </div>
                                <button id="send" className="btn-primary" type="submit" disabled={isSubmitting}>Войти</button>
                            </Form>
                        )}
                    />
                </div>
            </section>
        )
    }
}

export default Authorization