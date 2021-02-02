import React from 'react';

import PropTypes from 'prop-types';

function Dot(props) {
  return (
    <span
      style={{
        display: 'inline-block',
        height: '8px',
        width: '8px',
        borderRadius: '4px',
        backgroundColor: '#00c4b3',
        margin: '7px 5px',
        opacity: props.selected ? '1' : '0.3',
        transitionDuration: '300ms',
      }}
    />
  );
}

const IndicatorDots = (props) => {
  const wrapperStyle = {
    position: 'absolute',
    width: '100%',
    zIndex: '100',
    top: '206px',
    textAlign: 'center',
  };

  if (props.total < 2) {
    // Hide dots when there is only one dot.
    return <div style={wrapperStyle} />;
  }
  return (
    <div style={wrapperStyle}>
      {Array.apply(null, Array(2)).map((x, i) => <Dot key={i} selected={props.index === i} />)}
    </div>
  );
};

IndicatorDots.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
export default IndicatorDots;
