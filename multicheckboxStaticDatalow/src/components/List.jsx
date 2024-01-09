import { useState } from "react";
import { data } from "./data";
const List = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  function checkboxHandler(e) {
    let isSelected = e.target.checked;
    let value = parseInt(e.target.value);

    if (isSelected) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems((prevData) => {
        return prevData.filter((id) => {
          return id !== value;
        });
      });
    }
  }

  function checkAllHandler() {
    if (data.length === selectedItems.length) {
      setSelectedItems([]);
    } else {
      const postIds = data.map((item) => {
        return item.id;
      });

      setSelectedItems(postIds);
    }
  }

  return (
    <>
      <div className="container">
        <div className="left">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  value={item.id}
                  onChange={checkboxHandler}
                />
              </label>
              <h1>Id: {item.id}</h1>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
        <div className="right">
          <div className="results">
            <div>
              <button type="button" onClick={checkAllHandler}>
                {data.length === selectedItems.length
                  ? "Uncheck All"
                  : "Check all"}
              </button>
            </div>

            <h3>Result will print here: {selectedItems.toString()} </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
