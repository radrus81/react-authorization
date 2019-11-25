import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Header from '../containers/Header'
import Footer from './Footer/Footer'

class Layout extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <main>
                            {this.props.children}
                        </main>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Footer />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Layout