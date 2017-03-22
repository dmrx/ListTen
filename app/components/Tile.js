import React, { PropTypes } from 'react';
import {Col, OverlayTrigger,Tooltip, Image} from 'react-bootstrap';

import styles from '../styles.css'

const Tile = (props) => {
  const { handleClick, number, index, vidList, selection } = props;
  const boxClick = props.boxClick;
  let bgImage="#"
  let tip="Click and add a video below!"
  let addStyle = {};

  if (vidList[index].snippet){
    bgImage = vidList[index].snippet.thumbnails.high.url;
    addStyle.backgroundImage =  'url(' + bgImage + ')';
    console.log("bg registered", bgImage,  addStyle);
    tip = vidList[index].snippet.title;
  } 

  if(selection === number) {
    addStyle.border = '2px solid chartreuse';
  } 

  const tooltip = (
    <Tooltip id="tooltip"><strong>{tip}</strong></Tooltip>
  );

  return (
    <Col xs={12} md={4}>
    <OverlayTrigger placement="top" overlay={tooltip}>
    <div className={styles.tile} style={addStyle} onClick={() => { boxClick(number); }}></div>
    </OverlayTrigger>
    </Col>  
  );
};

Tile.propTypes = {
  selection: PropTypes.string,
  vidList: PropTypes.array.isRequired,
  boxClick: PropTypes.func.isRequired,
  number: PropTypes.string,
  index: PropTypes.number.isRequired
};

export default Tile;
