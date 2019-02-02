import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const InfoBox = () => (
    <div>
        <h3>Employee Info</h3>
        <Form>
            <Form.Field required>
                <label>First Name</label>
                <Input placeholder='First Name' />
            </Form.Field>
            <Form.Field required>
                <label>Last Name</label>
                <Input placeholder='Last Name' />
            </Form.Field>
            <Form.Field required>
                <label>Email Address</label>
                <Input placeholder='Email Address' />
            </Form.Field>
            <Form.Field required>
                <label>Hire Date</label>
                <Input placeholder='Hire Date' />
            </Form.Field>
            <Form.Field required>
                <label>Office</label>
                <Input placeholder='Office' />
            </Form.Field>
        </Form>
    </div>
)

export default InfoBox