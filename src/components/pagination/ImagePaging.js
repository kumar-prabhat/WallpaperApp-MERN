import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImageItem from '../imageList/ImageItem';

const ImagePaging = ({ imageData, favourite }) => {
  const [pagingData, setPagingData] = useState({
    offset: 0,
    perPage: 10,
    currentPage: 0,
  });

  useEffect(() => {
    const slice = imageData.slice(
      pagingData.offset,
      pagingData.offset + pagingData.perPage
    );
    const postData = slice.map((pd) => (
      <ImageItem key={pd._id} item={pd} favourite={favourite} />
    ));

    setPagingData({
      ...pagingData,
      pageCount: Math.ceil(imageData.length / pagingData.perPage),
      postData,
    });
  }, [imageData]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * pagingData.perPage;

    setPagingData({
      ...pagingData,
      currentPage: selectedPage,
      offset: offset,
    });

    const slice = imageData.slice(
      pagingData.offset,
      pagingData.offset + pagingData.perPage
    );

    const postData = slice.map((pd) => (
      <ImageItem key={pd._id} item={pd} favourite={favourite} />
    ));

    setPagingData({
      ...pagingData,
      pageCount: Math.ceil(imageData.length / pagingData.perPage),
      postData,
    });
  };

  return (
    <div>
      <div className='image-content'>{pagingData.postData}</div>
      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pagingData.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

ImagePaging.propTypes = {
  imageData: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  imageData: state.imagedata.images,
});

export default connect(mapStateToProps)(ImagePaging);
