import React from 'react';
import { connect } from 'react-redux';

class NoteView extends React.Component {
  handleClick = id => {
    this.props.deleteNote(id);
  };

  render() {
    const notes = this.props.notes.map(note => (
      <div key={note.id} onClick={() => this.handleClick(note.id)}>
        {note.text}
      </div>
    ));
    return <div className="ui comments">{notes}</div>;
  }
}

const mapStateToProps = state => {
  return {notes: state.notes}
};

export default connect(mapStateToProps)(NoteView);
