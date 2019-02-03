import React from 'react';
import Page from '../Reusables/Page/Page';
import StatusBar from './StatusBox/StatusBar';
import EmployeeGraph from './EmployeeGraph/EmployeeGraph';

export default class Dashboard extends React.Component {
    state = {
        employee: {
            
        }

    }

    render() {
        return(
            <div>
                <Page>
                    <StatusBar />
                    <EmployeeGraph />
                </Page>
            </div>
        )
    }
}