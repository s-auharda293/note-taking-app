const App = () => {
  return (
    <>
      <div className="center-container">
        <SideBar />
        <Main />
      </div>
    </>
  );
};

const SideBar = () => {
  return (
    <div className="sidebar">
      <h3>Memento</h3>
      <div className="button-container">
        <div className="top">
          <button type="button" className="btn btn-primary">
            +
          </button>
        </div>
        <div className="bottom">
          <button type="button" className="color-btn btn-yellow"></button>
          <button type="button" className="color-btn btn-orange"></button>
          <button type="button" className="color-btn btn-purple"></button>
          <button type="button" className="color-btn btn-blue"></button>
          <button type="button" className="color-btn btn-green"></button>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="main">
      <SearchBar />
      <h1 className="notes-heading">Notes</h1>
      <NoteContainer />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="input-group mb-3">
        <button className="btn" type="button" id="button-addon1">
          <ion-icon name="search-outline"></ion-icon>
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        ></input>
      </div>
    </div>
  );
};

const NoteContainer = () => {
  return (
    <div className="notes-container">
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

const Note = () => {
  return (
    <div className="note">
      <span className="note-content">jlaskd;jf;lkajdsf</span>
      <div className="note-info">
        <span className="note-date">May 21,2020</span>
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
          <button type="button" className="btn delete-button">
            <ion-icon name="trash-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

// const Modal = () => {
//   <div
//     className="modal fade"
//     id="exampleModal"
//     tabIndex="-1"
//     aria-labelledby="exampleModalLabel"
//     aria-hidden="true"
//   >
//     <div className="modal-dialog">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h1 className="modal-title fs-5" id="exampleModalLabel">
//             Modal title
//           </h1>
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="modal"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className="modal-body">...</div>
//         <div className="modal-footer">
//           <button
//             type="button"
//             className="btn btn-secondary"
//             data-bs-dismiss="modal"
//           >
//             Close
//           </button>
//           <button type="button" className="btn btn-primary">
//             Save changes
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>;
// };

export default App;
