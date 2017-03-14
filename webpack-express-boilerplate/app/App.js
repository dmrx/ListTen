import fetch from 'isomorphic-fetch';
import React from 'react';
import {Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import Tile from './components/Tile';
import VidSearch from './components/VidSearch';
import VidList from './components/VidList';
import Header from './components/Header';
import styles from './styles.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      vidList: [{},{},{},{},{},{},{},{},{},{}],
      title: "Your Playlist Title",
      selection: null,
      searchResults: [],
    };
  }
  
  vidClick = (videoObj) => {
    let { selection , vidList } = this.state;
    vidList[parseInt(selection) - 1] = videoObj;
    this.setState({ vidList });
  }

  boxClick = (index) =>  {
    let { selection } = this.state;
    selection = index;
    this.setState({ selection });
  }
  playClick = (vidList) => {
    const filteredList = vidList.filter((obj) => obj.snippet);
    let src = "https://www.youtube.com/embed/VIDEO_ID?playlist=";
    if (vidList[0].snippet) vidList.forEach((obj) => { if (obj.id) src += obj.id.videoId + ","});
    window.open(src,'Your TenList');
  }

  searchUpdate = (results) => {
    console.log("Results:", results)
    let { searchResults } = this.state;
    searchResults = results;
    this.setState({
       searchResults
    });
    console.log('I searched', this.state);
  }

  handleSubmit = (event) => {
   event.preventDefault();
  };

  handleChange = (event) => {
    let { title } = this.state;
     title = event.target.value;
    this.setState({
       title
     });
  };

  render() {
    const { tiles, vidList, title, selection, searchResults } = this.state;
    let titleForm = ( 
      <Form onSubmit={this.handleSubmit}>
      <FormGroup>
        <FormControl className={styles.titleBar}  type="text" placeholder={title} onChange={this.handleChange}  />
        {' '}
        <Button className={styles.btnInverse} bsSize="small" type="submit">
        Save
        </Button>
      </FormGroup>
      </Form>
    );    
  

    const tileElements = tiles.map((number, i) => (
      <Tile key={i} index={i} selection={selection} number={number} vidList={vidList} boxClick={this.boxClick}/>
    ));
  
    let currSearch;
    let itemList;
    if (selection) { currSearch = (<VidSearch selection={selection} searchUpdate={this.searchUpdate} searchResults={searchResults} />);}
    if (searchResults) { itemList = searchResults.map((vidObj) => {
      return <VidList key={vidObj.id.videoId} videoID={vidObj.id.videoId} vidObj={vidObj } vidClick={this.vidClick} />
    })}; 
 
    return (
      <div>
      <Header vidList={vidList} playClick={this.playClick} />
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

