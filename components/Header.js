import React, { PropTypes } from 'react';

const Header = (props) => {
  const { playClick, vidList } = props;
  const filteredList = vidList.filter((obj) => obj.snippet);
  let playStyle={};
  if(filteredList.length > 0) {playStyle.color = "chartreuse"}

return(
  <h1>
    ListTen
    <small><span className="glyphicon glyphicon-play-circle" style={playStyle} onClick={() => { playClick(vidList); } } aria-hidden="true"></span></small>
  </h1>

)

}


Header.propTypes = {
  vidList: PropTypes.array.isRequired,
  playClick: PropTypes.func.isRequired,
};

export default Header;
