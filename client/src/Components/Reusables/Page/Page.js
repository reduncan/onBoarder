import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import RoundImg from '../RoundImg/RoundImg';
import './Page.css'

export default class Page extends Component {
  state = { activeItem: '/' }

  componentDidMount() {
    this.setState({ activeItem: window.location.pathname })
  };

  render() {
    const { activeItem } = this.state

    return (
        <Grid>
          <Grid.Column width={4}>
            <RoundImg />
            <Menu fluid vertical tabular>
              <Menu.Item
                name='Dashboard'
                active={activeItem === '/'}
                as={Link}
                to='/'
              />
              <Menu.Item
                name='Add New Employee'
                active={activeItem === '/add-new'}
                as={Link}
                to='/add-new'
              />
              <Menu.Item
                name='Add New Document'
                active={activeItem === '/add-doc'}
                as={Link}
                to='/add-doc'
              />
              <Menu.Item
                name='Add New Form Field'
                active={activeItem === '/add-field'}
                as={Link}
                to='/add-field'
              />
              <Menu.Item
                name='Resend Expired'
                active={activeItem === '/resend'}
                as={Link}
                to='/resend'
              />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Segment raised>
              {this.props.children}
            </Segment>
          </Grid.Column>
        </Grid>
    )
  }
}
