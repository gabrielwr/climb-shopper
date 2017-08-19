import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import styled from 'styled-components'

import Login from '../Authentication/Login'
import WhoAmI from '../Authentication/WhoAmI'

import SiteName from './SiteName'
import NavLink from './NavLink'


/* -----------------    NAV STYLED COMPONENT     ------------------ */
const Nav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  background-color: lightgrey;
  justify-content: space-between;
  color: ${ props => props.theme.text ? props.theme.text : 'white' };
  min-height: ${ props => props.theme.height ? props.theme.height + 'px' : '50px' };

  @media (max-width: 768px) {
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    min-width: 200px;
    min-height: 100%;
  }
`

/* -----------------    DIV STYLED COMPONENT     ------------------ */
const Div = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  background-color: lightblue;
  color: ${ props => props.theme.text ? props.theme.text : 'white' };
  min-height: ${ props => props.theme.height ? props.theme.height + 'px' : '50px' };

`

/* -----------------    COMPONENT     ------------------ */
class Navbar extends React.Component {
  constructor( props ) {
    super( props )
  }

  render() {
    return (
      <Nav >
        <SiteName />
          <Div>
            <NavLink
              to='/products'
              name='Climbing Areas'
              logo=''
            />
            <NavLink
              to='/cart'
              name='Cart'
              logo='shopping-cart'
            />
            <NavLink
              to='/authenticate'
              name='Sign Up'
              logo=''
            />
            <a>
              { this.props.user ? <WhoAmI/> : <Login/> }
            </a>
          </Div>
      </Nav>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */
const mapState = ({ auth }) => ({ user: auth })
const mapDispatch = null

export default connect( mapState, mapDispatch )( Navbar )