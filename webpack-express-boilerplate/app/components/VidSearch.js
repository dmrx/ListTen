import React, { PropTypes } from 'react';
import { Col, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


let vidList = []; 

const VidSearch = (props) => {
  const searchUpdate = props.searchUpdate;
  const boxIndex = props.selection;
  const results = props.searchResults;
  console.log("Props:", props)
  let value = " ";
  let handleChange = function (event) {
    value = event.target.value;
  }
 let handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    console.log('Searching for: ' + value);

    function search() {
      console.log("I ran search")
      var q = value; // Search for a specified string.
      var request = gapi.client.youtube.search.list({
        q: q,
        type: 'video',
        maxResults: 10,
        videoEmbeddable: true,
        part: 'snippet'
      });
        request.execute(function(response) {
        vidList = response.items
        searchUpdate(vidList);
      });
    }
    search();
    
  };

  return (
    <div>
    <h4>#{boxIndex} : Search Videos</h4>
    <Form onSubmit={handleSubmit} >
      <FormGroup>  
        <FormControl className="titleBar" type="text" placeholder={"I want to search for..."} onChange={handleChange}  />
        {' '}
        <Button className="btn-inverse" bsSize="small" value="Submit" type="submit">
        Search
        </Button>
      </FormGroup>
      </Form>
    </div>
  );
};

VidSearch.propTypes = {
  searchUpdate: PropTypes.func.isRequired,
  selection: PropTypes.string.isRequired,
};

export default VidSearch;
