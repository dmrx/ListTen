import React, { PropTypes } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const VidList = (props) => {
  const {vidObj, videoID, vidClick} = props;
  console.log(vidClick);
  let vidTitle = vidObj.snippet.title;
  let vidThumbnail = vidObj.snippet.thumbnails.medium.url;
  let embedUrl= 'http://www.youtube.com/embed/' + videoID;
  return (
    <li id="vidList" onClick={() => { vidClick(vidObj); }}>
      <h5>{vidTitle}</h5>
      <img src={vidThumbnail}/>
    </li>
  );
};


VidList.propTypes = {
  vidObj: PropTypes.object.isRequired,
  videoID: PropTypes.string.isRequired,
  vidClick: PropTypes.func.isRequired,
};

export default VidList;
