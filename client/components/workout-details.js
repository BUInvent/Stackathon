

import React from 'react'
import Button from '@material-ui/core/Button'
import { Row, Col } from 'reactstrap'

class WorkoutDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            details: []
        }
    }

    componentDidMount() {
        fetch('/api/sets')
            .then(res => res.json())
            .then(out => {
                this.setState({ details: out })
            })
            .catch(err => {
                throw err
            })
    }

    render() {
        return (
            <center>
                <h1>Workout Details</h1>
                <h2>Shoulders - Jan 16, 2019</h2>
                <Row>
                    <Col xs="2">Bnch Press</Col>
                </Row>
                <Row>
                    <Col xs="1">1</Col>
                    <Col xs="1">150 x 8</Col>
                </Row>
            </center >
        )
    }

}

export default WorkoutDetails
