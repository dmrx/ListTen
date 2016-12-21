import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import Tile from './Tile';
import VidSearch from './VidSearch';
import VidList from './VidList';
import Header from './Header';


import {Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


function getInitialState() {
  return {
    tiles: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    vidList: [{},{},{},{},{},{},{},{},{},{}],
    title: "Your Playlist Title",
    selection: null,
    searchResults: [],
  };
}


class App extends Component {
  constructor(props) {
    super(props);
    this.vidClick = this.vidClick.bind(this);
    this.boxClick = this.boxClick.bind(this);
    this.playClick = this.playClick.bind(this);
    this.searchUpdate = this.searchUpdate.bind(this);
    this.state = getInitialState();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

 
  vidClick(videoObj){
    console.log("You clicked a video!")
    let { selection , vidList } = this.state;
    vidList[parseInt(selection) - 1] = videoObj;
    this.setState({
       vidList
    });
    console.log("State after vidCLick", this.state)
  }

  boxClick(index) {
    let { selection } = this.state;
    selection = index;
    this.setState({
       selection
    });
    console.log('I clicked', this.state);
  }

 playClick(vidList) {
  const filteredList = vidList.filter((obj) => obj.snippet);
  console.log(filteredList); 
  let src = "https://www.youtube.com/embed/VIDEO_ID?playlist=";
  if (vidList[0].snippet) vidList.forEach((obj) => { if (obj.id) src += obj.id.videoId + ","});
  window.open(src,'Your TenList');
  }


  searchUpdate(results) {
    console.log("Results:", results)
    let { searchResults } = this.state;
    searchResults = results;
    this.setState({
       searchResults
    });
    console.log('I searched', this.state);
  }

 handleSubmit(event) {
   event.preventDefault();
 }
   
    
 handleChange (event) {
   let { title } = this.state;
   title = event.target.value;
   console.log("Curr Title", title)
   this.setState({
       title
    });
  }

  render() {
    const { tiles, vidList, title, selection, searchResults } = this.state;
    const boxClick = this.boxClick;
    const vidClick = this.vidClick;
    const playClick = this.playClick;
    const searchUpdate = this.searchUpdate;
    const handleSubmit = this.handleSubmit;
    const handleChange = this.handleChange;
    
    let titleForm = ( 
      <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormControl className="titleBar"  type="text" placeholder={title} onChange={handleChange}  />
        {' '}
        <Button className="btn-inverse" bsSize="small" type="submit">
        Save
        </Button>
      </FormGroup>
      </Form>
    );    
      
    const tileElements = tiles.map((number, i) => (
      <Tile key={i} index={i} selection={selection} number={number} vidList={vidList} boxClick={boxClick} />
    ));
  
    let currSearch;
    let itemList;
    if (selection) { currSearch = (<VidSearch selection={selection} searchUpdate={searchUpdate} searchResults={searchResults} />);}
    if (searchResults) { itemList = searchResults.map((vidObj) => {
      return <VidList key={vidObj.id.videoId} videoID={vidObj.id.videoId} vidObj={vidObj } vidClick={vidClick} />
    })}; 
 
    return (
      <div>
      <Header vidList={vidList} playClick={playClick} />
        {titleForm}
        <div id="board">
          {tileElements}
        </div>
        {currSearch}
        <ul>
        {itemList}
        </ul>
      </div>
    );
  }
}

export default App;
