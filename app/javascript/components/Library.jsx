import React from "react"
import PropTypes from "prop-types"

class Library extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.selectLibrary(this.props.library);
  }

  render () {

    let classes = "library";
    if (this.props.library === this.props.selectedLibrary) {
      classes += " selected";
    }

    return (
      <React.Fragment>
        <div className={classes} onClick={this.handleClick} >
          <p>{this.props.library}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Library;
