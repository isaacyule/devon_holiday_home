import React from "react"
import PropTypes from "prop-types"

import Library from "./Library.jsx";

class LibraryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <React.Fragment>
        <ul className="LibraryList">
          {this.props.libraryList.map(library =>
            <li className="library" key={library} >
              <Library library={library} selectedLibrary={this.props.selectedLibrary} selectLibrary={this.props.selectLibrary} />
            </li>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

export default LibraryList;
