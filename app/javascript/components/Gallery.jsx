import React from "react"
import PropTypes from "prop-types"

import LibraryList from "./LibraryList.jsx";
import GalleryComponent from "./GalleryComponent.jsx";

import { all, bedrooms, garden, kitchen, lounge, localArea } from "../photos.js";

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      libraryList: ["all", "bedrooms", "garden", "kitchen", "lounge", "nearby"],
      libraries: {
        all: all,
        bedrooms: bedrooms,
        garden: garden,
        kitchen: kitchen,
        lounge: lounge,
        nearby: localArea
      },
      selectedLibrary: "all",
    }
  }

  selectLibrary = (library) => {
    this.setState({
      selectedLibrary: library
    })
  }

  render () {

    let props = this.props;
    let state = this.state;

    return (
      <React.Fragment>
        <div className="gallery">
          <LibraryList libraryList={state.libraryList} selectLibrary={this.selectLibrary} libraries={state.libraries} selectedLibrary={state.selectedLibrary} />
          <GalleryComponent libraries={state.libraries} selectedLibrary={state.selectedLibrary} />
        </div>
      </React.Fragment>
    );
  }
}

export default Gallery;
