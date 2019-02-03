import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const EmailBox = (props) => (
    <div>
        <h3>Body of Email</h3>
        <Form>
            <TextArea onChange={props.bodyChange} value={props.bodyValue}/>
        </Form>
    </div>
)

export default EmailBox