import React from 'react'
import { Form } from 'semantic-ui-react'

const DocumentBox = () => (
    <div>
        <h3>Documents</h3>
        <Form>
            <Form.Checkbox inline label='GA ICA' />
            <Form.Checkbox inline label='FL ICA' />
            <Form.Checkbox inline label='MO ICA' />
            <Form.Checkbox inline label='GA Firm - Realtor' />
            <Form.Checkbox inline label='GA Firm - Non-Reaeltor' />
            <Form.Checkbox inline label='FL Firm' />
            <Form.Checkbox inline label='MO Firm' />
            <Form.Checkbox inline label='Payment to an Entity' />
            <Form.Checkbox inline label='ACH Authorization Form' />
        </Form>
    </div>
)

export default DocumentBox