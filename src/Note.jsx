/* eslint-disable react/prop-types */
const Note = ({ content, date, color, onDeleteNote, id }) => {
  return (
    <div className={`note ${color}`}>
      <span className="note-content">{content}</span>
      <div className="note-info">
        <span className="note-date">{date}</span>
        <div className="note-buttons">
          <button
            type="button"
            className="btn edit-button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-2" id="exampleModalLabel">
                      Edit Note
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary modal-btn"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary modal-btn modal-btn-edit"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <Modal /> */}

            <ion-icon name="create-outline"></ion-icon>
          </button>
          <button
            type="button"
            className="btn delete-button"
            onClick={() => onDeleteNote(id)}
          >
            <ion-icon name="trash-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Note;
