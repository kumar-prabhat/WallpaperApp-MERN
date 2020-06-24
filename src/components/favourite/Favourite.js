import React, { useEffect } from 'react';
import ImagePaging from '../pagination/ImagePaging';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFavourites } from '../../actions/imagedata';

const Favourite = ({ getFavourites }) => {
  useEffect(() => {
    getFavourites();
  }, [getFavourites]);
  return <ImagePaging favourite={true} />;
};

Favourite.propTypes = {
  getFavourites: PropTypes.func.isRequired,
};

export default connect(null, { getFavourites })(Favourite);
