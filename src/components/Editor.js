import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";

class Editor extends Component {
  state = {
    data: null,
  };
  render() {
    return (
      <div className="App">
        <h2>Using CKEditor 5 build in React</h2>
        <CKEditor
          editor={ClassicEditor}
          data={this.state.data}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log(event);
            this.setState({ data });
          }}
        />

        <button
          onClick={(event) => {
            event.preventDefault();
            console.log(this.state.data);
          }}
        >
          Submit
        </button>

        <div>{ReactHtmlParser(this.state.data)}</div>
      </div>
    );
  }
}

export default Editor;
