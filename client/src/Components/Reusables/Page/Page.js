import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class MenuExampleTabularOnLeft extends Component {
  state = { activeItem: '/' }

  // handleItemClick = (e, {name}) => {
  //   e.preventDefault();
  //   this.setState({ activeItem: name })
  // }

  componentDidMount() {
    this.setState({ activeItem: window.location.pathname })
  };

  componentDidUdpate() {

  };

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='Dashboard'
              active={activeItem === '/'}
              // onClick={this.handleItemClick}
              as={Link}
              to='/'
            />
            <Menu.Item
              name='Add New Employee'
              active={activeItem === '/add-new'}
              // onClick={this.handleItemClick}
              as={Link}
              to='/add-new'
            />
            <Menu.Item
              name='Add New Document'
              active={activeItem === '/add-doc'}
              // onClick={this.handleItemClick}
              as={Link}
              to='/add-doc'
            />
            <Menu.Item
              name='Add New Form Field'
              active={activeItem === '/add-field'}
              // onClick={this.handleItemClick}
              as={Link}
              to='/add-field'
            />
            <Menu.Item
              name='Resend Expired'
              active={activeItem === '/resend'}
              // onClick={this.handleItemClick}
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
