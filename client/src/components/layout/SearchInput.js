import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = () => {
  return (
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
  );
};

/*
<InputGroup className="input-group-sm">
      <div className="input-group-prepend">
        <InputGroup.Text id="basic-addon1">
          <FontAwesomeIcon className="icon" icon={faSearch} />
        </InputGroup.Text>
      </div>
      <FormControl
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
*/

export default SearchInput;
