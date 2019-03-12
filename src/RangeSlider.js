import React, { Component } from 'react'

import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};
const wrapperStyle = { width: 400, margin: 50 };
class RangeSlider extends Component {
  constructor(props) {
    super(props);
 
    this.state = { value: 5 };
  }
 
  render() {
    return (
      <div>
        <div style={wrapperStyle}>
          <p>Year</p>
          <Range min={1990} max={2017} defaultValue={[2008, 2014]} tipFormatter={value => `${value}`} />
        </div>
        <div style={wrapperStyle}>
          <p>Rating</p>
          <Range min={0} max={10} defaultValue={[7, 10]} tipFormatter={value => `${value}`} />
        </div>
        <div style={wrapperStyle}>
          <p>Runtime</p>
          <Range min={0} max={300} defaultValue={[45, 120]} tipFormatter={value => `${value}`} />
        </div>
        <input type="button" onClick="https://www.npmjs.com/package/rc-tooltip" value="Search" style={{marginLeft:200, backgroundColor:"#f49b42", paddingLeft: 20, paddingRight: 20, paddingBottom: 10, paddingTop: 10}}/>
      </div>
    );
  }
}

export default RangeSlider;
