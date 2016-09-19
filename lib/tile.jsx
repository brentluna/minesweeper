import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

    this.props.updateGame(this.props.tile, e.altKey);

  }

  render() {

    let  cName = ''
    let tileStyle = null;
    let currTile  = this.props.tile;
    if (currTile.bombed && currTile.explored) {
      tileStyle = 'b'
      cName = 'bomb'
    } else if (currTile.flagged) {
      tileStyle = 'f'
      cName = 'flag'
    } else if (currTile.explored) {
      tileStyle =  currTile.adjacentBombCount();
      if (tileStyle === 0) { tileStyle = ' '}
      cName = 'explored'
    } else {
      tileStyle = ' '
    }
    cName = 'tile ' + cName;
    console.log(cName);
    return (
      <div className={cName} onClick={this.handleClick}>{tileStyle}</div>
    );
  }
}

export default Tile;
