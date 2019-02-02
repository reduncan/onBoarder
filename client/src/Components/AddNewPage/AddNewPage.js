import React from 'react'
import { Grid } from 'semantic-ui-react';
import Page from '../Reusables/Page/Page'
import PageTitle from '../Reusables/PageTitle/PageTitle'
import InfoBox from './InfoBox/InfoBox'
import DocumentBox from './DocumentBox/DocumentBox'
import EmailBox from './EmailBox/EmailBox'

export default class AddNewPage extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <Page>
                    <PageTitle />
                    <Grid columns={3}>
                        <Grid.Row>
                            <Grid.Column>
                                <InfoBox />
                            </Grid.Column>
                            <Grid.Column>
                                <DocumentBox />
                            </Grid.Column>
                            <Grid.Column>
                                <EmailBox />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Page>
            </div>
        )
    }
}