import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';

class GalleryComponent extends Component {
  constructor(props) {
    super(props)
  }

  createPhoto = (string) => {
    return {
      original: `assets/${string}.jpg`,
      thumbnail: `assets/${string}.thumb.jpg`
    }
  }

  render() {

    const images = this.props.libraries[`${this.props.selectedLibrary}`].map(photo =>
      this.createPhoto(photo)
    );

    return (
      <div className="gallery-component">
        <ImageGallery slideDuration={300} lazyLoad={true} thumbnailPosition="top" items={images} />
      </div>
    );
  }

}

export default GalleryComponent;
