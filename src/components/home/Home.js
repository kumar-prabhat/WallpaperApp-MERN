import React, { useEffect } from 'react';
import ImagePaging from '../pagination/ImagePaging';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getImages } from '../../actions/imagedata';

const Home = ({ getImages }) => {
  useEffect(() => {
    getImages();
  }, [getImages]);
  return <ImagePaging favourite={false} />;
};

Home.propTypes = {
  getImages: PropTypes.func.isRequired,
};

export default connect(null, { getImages })(Home);
