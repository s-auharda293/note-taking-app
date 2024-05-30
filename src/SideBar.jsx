/* eslint-disable react/prop-types */
const SideBar = ({
  showColorButtons,
  onClickShowColorButtons,
  onHoldColor,
}) => {
  return (
    <div className="sidebar">
      <h3>Memento</h3>
      <div className="button-container">
        <div className="top">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onClickShowColorButtons}
          >
            +
          </button>
        </div>
        {showColorButtons ? (
          <div className="bottom">
            <button
              type="button"
              className="color-btn btn-yellow"
              onClick={(e) => {
                onHoldColor(e);
              }}
            ></button>
            <button
              type="button"
              className="color-btn btn-orange"
              onClick={(e) => {
                onHoldColor(e);
              }}
            ></button>
            <button
              type="button"
              className="color-btn btn-purple"
              onClick={(e) => {
                onHoldColor(e);
              }}
            ></button>
            <button
              type="button"
              className="color-btn btn-blue"
              onClick={(e) => {
                onHoldColor(e);
              }}
            ></button>
            <button
              type="button"
              className="color-btn btn-green"
              onClick={(e) => {
                onHoldColor(e);
              }}
            ></button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SideBar;
