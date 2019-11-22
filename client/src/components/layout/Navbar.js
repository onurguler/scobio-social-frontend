import React, { Fragment, useState } from 'react';
import {
  Navbar,
  Container,
  Button,
  ButtonToolbar,
  Dropdown,
  InputGroup,
  FormControl,
  Modal
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSellcast } from '@fortawesome/free-brands-svg-icons';
import {
  faUser,
  faExternalLinkAlt,
  faSignInAlt,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import Login from '../auth/Login';

const customStyles = {
  content: {
    top: '60%',
    left: '60%',
    right: 'auto',
    bottom: '60%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '0'
  }
};
const NavBar = ({ isAuthenticated }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Fragment>
      <Navbar className="border-bottom border-gray-400" bg="white">
        <Container fluid={false}>
          <Link to="/" className="text-decoration-none text-gray-900">
            <FontAwesomeIcon
              className="mr-2 align-middle"
              icon={faSellcast}
              size={'2x'}
            />

            <Navbar.Brand
              className="font-weight-bold align-middle"
              href="#home">
              Scobio
            </Navbar.Brand>
          </Link>

          <InputGroup className="input-group-sm mr-auto col-5 col-sm-9 col-md-5 col-lg-5">
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button className="px-3" variant="outline-secondary">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup.Append>
          </InputGroup>

          <ButtonToolbar className="auth-buttons d-none d-md-block">
            <Link to="/login">
              <Button className="mr-3" variant="outline-primary" size="sm">
                LOG IN
              </Button>
            </Link>

            <Link to="/register">
              <Button className="mr-3" variant="primary" size="sm">
                SIGN UP
              </Button>
            </Link>
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

              <Dropdown.Item onClick={e => setModalIsOpen(!modalIsOpen)}>
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

      <Modal size="xl" show={modalIsOpen}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body style={{ padding: '0', margin: '0' }}>
          <Login />
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default NavBar;
