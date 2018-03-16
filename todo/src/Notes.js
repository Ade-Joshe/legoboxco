import React, {Component} from "react";
import FlipMove from "react-flip-move";
import "./NoteHeader"

class Notes extends Component {
  constructor(props) {
    super(props)
  }
    render() {

      return (
              <div id="noting">
                <FlipMove duration={250} easing="ease-out">
                  <h3 id="title"> {this.props.title}</h3>
                  <p id="description">{this.props.description} </p>
                </FlipMove>
              </div>
      );
    }
};

export default Notes;
