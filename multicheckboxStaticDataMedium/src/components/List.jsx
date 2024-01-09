import { useState } from "react";
import { products_List } from "./data";
import "./css/list.css"
const List = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  function checkboxHandler(e) {
    let isSelected = e.target.checked;
    let value = e.target.value;

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

console.log(products_List,".........products_List");
  function checkAllHandler() {
    if (products_List.length === selectedItems.length) {
      setSelectedItems([]);
    } else {
      const postIds = products_List.map((item) => {
        return item.id;
      });

      setSelectedItems(postIds);
    }
  }

  return (
    <>
      <div className="container">
        <div className="left">
          {products_List.map((item, index) => (
            <div className="card" key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  value={item.id}
                  onChange={checkboxHandler}
                />
              </label>
              <p style={{border:"1px solid red"}}>Id: {item.id}</p>
              <p style={{border:"1px solid red"}}>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="right">
          <div className="results">
            <div>
              <button type="button" onClick={checkAllHandler}>
                {products_List.length === selectedItems.length
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
