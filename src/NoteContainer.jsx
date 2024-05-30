/* eslint-disable react/prop-types */
import Note from "./Note";

const NoteContainer = ({ notes, onDeleteNote }) => {
  return (
    <div className="notes-container">
      {notes.map((note) => (
        <Note
          content={note.content}
          date={note.date}
          color={note.color}
          key={note.id}
          onDeleteNote={onDeleteNote}
          id={note.id}
        />
      ))}
    </div>
  );
};

export default NoteContainer;
