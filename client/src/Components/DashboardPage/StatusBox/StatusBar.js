import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const StatusBar = (props) => (
    <Card.Group centered>
        <Card>
            <Card.Content>
                <Image floated='right' src='http://placeimg.com/100/100/people' />
                <Card.Header>Steve Sanders</Card.Header>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Image floated='right' src='http://placeimg.com/100/100/people' />                        <Card.Header>Steve Sanders</Card.Header>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Image floated='right' src='http://placeimg.com/100/100/people' />                        <Card.Header>Steve Sanders</Card.Header>
            </Card.Content>
        </Card>
    </Card.Group>
)

export default StatusBar