import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import DPA from '../partials/allfoods/DPA';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '42vh',
    background: '#F9F9F9',
    border: '1px solid red',
    padding: '40px',
    display: 'flex',
    '@media (max-width: 910px)': {
      '& $resturant_name': {
        fontSize: '1.5rem',
      },
      '& $opening_time': {
        fontSize: '.8rem',
      },
      '& $location_container': {
        '& $location_icon': {
          fontSize: '1rem',
        },
        '& $resturant_location': {
          fontSize: '0.9rem',
        },
      },
    },
    '@media (max-width: 850px)': {
      padding: '20px',
      '& $root_img': {
        maxHeight: '110px',
        maxWidth: '210px',
        marginRight: '20px',
      },
      '& $dpa_section': {
        gap: '10px',
        marginTop: '20px',
      },
    },
    '@media (max-width: 574px)': {
      padding: '10px',
      flexDirection: 'column',
      alignItems: 'center',
      '& $root_img': {
        marginBottom: '7px',
      },
      '& $resturant_name': {
        fontSize: '1.3rem',
      },
      '& $location_container': {
        alignItems: 'flex-start',
        marginTop: '3px',
        '& $location_icon': {
          fontSize: '1.3rem',
          marginRight: '2px',
        },
        '& $resturant_location': {
          fontSize: '0.9rem',
        },
      },
    },
  },
  root_img: {
    maxHeight: '190px',
    maxWidth: '320px',
    marginRight: '40px',
  },
  resturant_name: {
    fontSize: '1.8rem',
    color: '#333333',
    fontWeight: '500',
  },
  resturant_description: {
    color: '#666666',
    fontSize: '0.8rem',
    fontFamily: 'Montserrat',
  },
  location_container: {
    display: 'flex',
    alignItems: 'center',
  },
  resturant_location: {
    color: '#666666',
    lineHeight: '15px',
  },
  location_icon: {
    color: '#666666',
    fontSize: '1.2rem',
  },
  opening_time: {
    color: '#666666',
    fontSize: '0.9rem',
    marginTop: '30px',
  },
  dpa_section: {
    display: 'flex',
    marginTop: '40px',
  },
}));

export default function Resturantdetails() {
  const {
    root,
    root_img,
    resturant_name,
    resturant_description,
    resturant_location,
    opening_time,
    location_container,
    location_icon,
    dpa_section,
  } = useStyles();
  return (
    <div className={root}>
      <img className={root_img} src="./252.png"></img>
      <div>
        <Typography className={resturant_name} variant="h2" component="h1">
          Gheomeals resturant
        </Typography>
        <Typography className={resturant_description} component="p">
          nigerian ghanian south-african mexican delicacies
        </Typography>
        <div className={location_container}>
          <LocationOnOutlinedIcon className={location_icon} />
          <Typography className={resturant_location} component="p">
            Moremi Hall, Tafawa Balewa Way, University Of Lagos
          </Typography>
        </div>
        <Typography className={opening_time} component="p">
          RESTAURANT TIMING - 12:00 AM TO 11:30 PM
        </Typography>

        <div className={dpa_section}>
          {[
            { time: '30 MINS', min: 'DELIVERY TIME' },
            { time: 'PAYMENT', min: 'ONLINE PAYMENT' },
            { time: '#,4000', min: 'AVG COST' },
          ].map((data) => (
            <DPA {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}
