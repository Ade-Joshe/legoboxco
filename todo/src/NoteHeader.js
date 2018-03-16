import React, { Component } from "react";
import Notes from "./Notes.js";
import "./NoteHeader.css";
import FlipMove from "react-flip-move";

var prevNotes = [];

var prev_notes = [];
for(var i = 1; i < 10; i++) {
  var oldNote = {text: '', descr: '', id: ''};
  oldNote.text = localStorage.getItem('title' + i);
  oldNote.descr = localStorage.getItem('descr' + i);
  oldNote.id = localStorage.getItem('id' + i);
  if((oldNote.text != null) &&(oldNote.descr != null)) {
    prev_notes[i] = oldNote;
  }
}
// prev_notes.forEach((elm) => console.log(elm.title));

prevNotes = prev_notes.map((elm) =>
  <Notes title={elm.text} description={elm.descr} key={elm.key} id={elm.id} />
);

function Header() {
  return(
    <div id="headItems">
      <span id="content1 headItems">Joshes Note App</span>
    </div>
  );
}


class NoteHeader extends Component {
  constructor(props){
    super(props);

    this.state = {
      //this.state = { hits: null };
      items: [
        {
          text: " ",
          descr: " ",
          key: new Date(),
          id: 1,
        }
      ],
    };

          this.addItem = this.addItem.bind(this)
          this.deleteItem = this.deleteItem.bind(this)
                          }

//doing for the items
  addItem(e){
          if (this._inputElement.value !== ""){
            var newItem ={
              text: this._inputElement.value,
              descr: this._inputElem.value,
              key: new Date()
            };

            this.setState((prevState) => {
              return {
                items: prevState.items.concat(newItem)
              };
            });
            this._inputElement.value = "";
            this._inputElem.value = "";
          }
           localStorage.setItem('title' + this.state.items[0].id, newItem.text );
           localStorage.setItem('descr' + this.state.items[0].id, newItem.descr );
           localStorage.setItem('id' + this.state.items[0].id, newItem.id );
             this.state.items[0].id++;

          e.preventDefault();
        }
  deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
        this.setState({
          items: filteredItems
        });
      }
  render() {

    var newNotes = this.state.items.map((elm) =>
      <Notes title={elm.text} description={elm.descr} key={elm.key} id={elm.id} />
    );
    return (
      <div id="cont">
        <Header />
        <div id="nav">
          <span id="content3"> <input type="text" autoFocus autoComplete="true" placeholder="search notes via title" id="search"/> </span>
            <div id="notes">
              <h6><a style={{color: '#4c4c4c'}}> Saved notes </a></h6>
              <ul id="flipNew">
                <FlipMove duration={250} easing="ease-out">
                  {newNotes}
                </FlipMove>
                  {prevNotes}
              </ul>
            </div>
        </div>

        <div id="section" >
          <div className="NoteHeaderMain header">
          <p style={{color: "#4c4c4c"}}> Welcome to the Note App </p>
            <form onSubmit = {this.addItem}>
              <input required id="heading" style={{height: '40px', width: '350px'}} ref={(a) => this._inputElement = a }
    placeholder="Enter Heading/Title" />
              <textarea ref={(d) => this._inputElem = d } placeholder="Enter Description for title" required />
              <button id="button" type="submit"> + Add Note </button>
            </form>
          </div>
            <Notes entries = {this.state.items}
            delete={this.deleteItem} />
          </div>
        </div>
    );
  }
}

export default NoteHeader;
