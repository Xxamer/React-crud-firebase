import React, { Component } from 'react'
import './Title.css'
import { Row, Col, Jumbotron } from 'reactstrap';
export default class Title extends Component {
    render() {
         return (
            <div>
                <Row>
                    <Col xs="12">
                        <Jumbotron className="text-center">
                            <h1 className="display-5">Crud React & Firebase</h1>
                            <p className="lead">ReactJS + Firebase</p>
                        </Jumbotron>
                    </Col>
                </Row>
            </div>
        )
    }
}
