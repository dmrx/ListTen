import React, { PropTypes } from 'react';
import {OverlayTrigger,Tooltip } from 'react-bootstrap';

const Tile = (props) => {
  const { handleClick, number, index, vidList, selection } = props;
  const boxClick = props.boxClick;
  let bgImage="#"
  let tip="Click and add a video below!"
  let tipDesc="";
  
  if (vidList[index].snippet){
    bgImage = vidList[index].snippet.thumbnails.high.url;
    tip = vidList[index].snippet.title;
    tipDesc = 
    console.log("BackgroundURL: ", bgImage)

  } 
  let divStyle={
    backgroundImage: 'url(' + bgImage + ')',
  }
  
  if(selection === number) {
    console.log("Looking for selected")
    divStyle.border = '2px solid chartreuse';
  } 


const tooltip = (
  <Tooltip id="tooltip"><strong>{tip}</strong>{tipDesc}</Tooltip>
);

  return (
     <OverlayTrigger placement="top" overlay={tooltip}>
    <div className="tile" style={divStyle} onClick={() => { boxClick(number); }}>{number}</div>
    </OverlayTrigger>
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
