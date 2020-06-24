import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFavourites, removeFavourites } from '../../actions/imagedata';
const ImageItem = ({ item, addFavourites, removeFavourites, favourite }) => {
  const handleFavourites = () => {
    if (favourite) {
      removeFavourites(item._id);
    } else {
      addFavourites(item._id);
    }
  };
  return (
    <div className='wrapper'>
      <img src={item.download_url} alt={item.author}></img>
      <ul className='member-icons animate'>
        <li className='author-name'>{item.author.split(' ')[0]}</li>
        <li className='list-inline-item'>
          <a
            href={item.download_url}
            target='_blank'
            rel='noopener noreferrer'
            download
            style={{ color: 'maroon' }}
          >
            <i className='fa fa-download'></i>
          </a>
        </li>
        <li className='list-inline-item'>
          <i className='fa fa-heart' onClick={handleFavourites}></i>
        </li>
      </ul>
    </div>
  );
};

ImageItem.protoTypes = {
  addFavourites: PropTypes.func.isRequired,
  removeFavourites: PropTypes.func.isRequired,
};

export default connect(null, { addFavourites, removeFavourites })(ImageItem);
