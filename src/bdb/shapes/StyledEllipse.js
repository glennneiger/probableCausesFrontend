import React, {Component} from 'react';
import {Circle} from 'react-konva';

/**
 * Konva shape that extends to the midpoints of a bounding rectangle
 * Exposes x, y, width and height as props
 * x and y are the centre of the ellipse
 */
class StyledEllipse extends Component {
  render() {
    const scaleX = Math.floor(this.props.width*0.5);
    const scaleY = Math.floor(this.props.height*0.5);
    return (
      <Circle
        x={this.props.x}
        y={this.props.y}
        radius={1}
        fill="green"
        scaleX={scaleX}
        scaleY={scaleY}
      />
    );
  }
}

export default StyledEllipse;