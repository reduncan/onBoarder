import React from 'react'
import { Grid, Button } from 'semantic-ui-react';
import * as $ from 'axios';
import Page from '../Reusables/Page/Page'
import PageTitle from '../Reusables/PageTitle/PageTitle'
import InfoBox from './InfoBox/InfoBox'
import DocumentBox from './DocumentBox/DocumentBox'
import EmailBox from './EmailBox/EmailBox'

export default class AddNewPage extends React.Component {
    state = {
        inputFirstName: '',
        inputLastName: '',
        inputEmail: '',
        inputOffice: '',
        inputHireDate: '',
        inputRequiredDocuments: [],
        inputEmailBody: ''
    }

    handleChangeFirst = (event) => {
        this.setState({ inputFirstName: event.target.value})
    }

    handleChangeLast = (event) => {
        this.setState({ inputLastName: event.target.value})
    }

    handleChangeEmail = (event) => {
        this.setState({ inputEmail: event.target.value})
    }

    handleChangeOffice = (event) => {
        this.setState({ inputOffice: event.target.value})
    }

    handleChangeHire = (event) => {
        this.setState({ inputHireDate: event.target.value})
    }

    handleChangeDocuments = (event) => {
        let newArr = this.state.inputRequiredDocuments;
        
        if(event.target.checked) {
            newArr.push(event.target.name);
        } else if(!event.target.checked) {

        }
        this.setState({ [event.target.name]: event.target.checked })
    }

    handleChangeBody = (event) => {
        this.setState({ inputEmailBody: event.target.value})
    }

    handleCreateNew = (event) => {
        event.preventDefault();
        let newEmployee = this.state;
        $.post('/preEmployees', newEmployee);
        console.log(newEmployee);
    }

    render() {
        return (
            <div>
                <Page>
                    <PageTitle />
                    <Grid columns={3}>
                        <Grid.Row>
                            <Grid.Column>
                                <InfoBox 
                                    fNameChange={this.handleChangeFirst}
                                    lNameChange={this.handleChangeLast}
                                    emailChange={this.handleChangeEmail}
                                    officeChange={this.handleChangeOffice}
                                    hireChange={this.handleChangeHire}
                                    bodyChange={this.handleChangeBody}
                                    fNameValue={this.state.inputFirstName}
                                    lNameValue={this.state.inputLastName}
                                    emailValue={this.state.inputEmail}
                                    officeValue={this.state.inputOffice}
                                    hireValue={this.state.inputHireDate}
                                    bodyValue={this.state.inputEmailBody}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <DocumentBox />
                            </Grid.Column>
                            <Grid.Column>
                                <EmailBox />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Button fluid onClick={ this.handleCreateNew }>Create New Employee</Button>
                </Page>
            </div>
        )
    }
}