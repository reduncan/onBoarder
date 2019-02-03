import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const InfoBox = (props) => (
    <div>
        <h3>Employee Info</h3>
        <Form>
            <Form.Field required>
                <label>First Name</label>
                <Input placeholder='First Name' onChange={props.fNameChange} value={props.fNameValue}/>
            </Form.Field>
            <Form.Field required>
                <label>Last Name</label>
                <Input placeholder='Last Name' onChange={props.lNameChange} value={props.lNameValue}/>
            </Form.Field>
            <Form.Field required>
                <label>Email Address</label>
                <Input placeholder='Email Address' onChange={props.emailChange} value={props.emailValue}/>
            </Form.Field>
            <Form.Field required>
                <label>Hire Date</label>
                <Input placeholder='Office' onChange={props.hireChange} value={props.hireValue}/>
            </Form.Field>
            <Form.Field required>
                <label>Office</label>
                <Input placeholder='Office' onChange={props.officeChange} value={props.officeValue}/>
            </Form.Field>
        </Form>
    </div>
)

export default InfoBox