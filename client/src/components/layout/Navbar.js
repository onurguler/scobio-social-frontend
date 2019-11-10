import React from 'react';
import {
  Navbar,
  Container,
  Button,
  ButtonToolbar,
  Dropdown
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSellcast } from '@fortawesome/free-brands-svg-icons';
import {
  faUser,
  faExternalLinkAlt,
  faSignInAlt
} from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import SearchInput from './SearchInput';

const NavBar = ({ isAuthenticated }) => {
  return (
    <Navbar className="border-bottom" bg="white">
      <Container fluid={false}>
        <FontAwesomeIcon className="mr-2" icon={faSellcast} size={'2x'} />

        <Navbar.Brand href="#home">Scobio</Navbar.Brand>

        <SearchInput />

        <ButtonToolbar className="auth-buttons d-none d-md-block">
          <Button className="mr-3" variant="outline-primary" size="sm">
            LOG IN
          </Button>
          <Button className="mr-3" variant="primary" size="sm">
            SIGN UP
          </Button>
        </ButtonToolbar>

        <Dropdown>
          <Dropdown.Toggle
            className="text-secondary"
            size="sm"
            variant="default"
            id="dropdown-basic">
            <FontAwesomeIcon icon={faUser} />
          </Dropdown.Toggle>

          <Dropdown.Menu className="font-weight-bolder dropdown-menu-right">
            <Dropdown.Item href="#/action-3">
              <FontAwesomeIcon
                className="align-middle mr-2 icon-left"
                icon={faQuestionCircle}
              />
              Help Center
              <FontAwesomeIcon
                className="align-middle ml-1 icon-right"
                icon={faExternalLinkAlt}
              />
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item href="#/action-4">
              <FontAwesomeIcon
                className="align-middle mr-2 icon-left"
                icon={faSignInAlt}
              />
              Log In / Sign Up
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default NavBar;
