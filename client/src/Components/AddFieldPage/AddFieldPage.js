import React from 'react'
import Page from '../Reusables/Page/Page'
import { Dimmer, Loader } from 'semantic-ui-react'

export default class AddFieldPage extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <Page>
                    <Dimmer active>
                        <Loader size='massive'>Page Under Construction</Loader>
                    </Dimmer>
                </Page>
            </div>
        )
    }
}