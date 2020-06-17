import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const PriceRange = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
    {
        value: 60,
        label: '60',
    },
    {
        value: 90,
        label: '90',
    },
      {
          value: 120,
          label: '120',
      },
];

function valuetext(value) {
  return `${value} BHD`;
}

export default function RangeSlider() {
  const classes = PriceRange();

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-range-slider"
        getAriaValueText={valuetext}
        defaultValue={[60, 120]}
        marks={marks}
      />
    </div>
  );
}