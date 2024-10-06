import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const data = [
  { id: 1, category: "bags", name: "Leather Bag" },
  { id: 2, category: "watch", name: "Wrist Watch" },
  { id: 3, category: "perfume", name: "Eau de Parfum" },
  { id: 4, category: "bags", name: "Tote Bag" },
  { id: 5, category: "watch", name: "Smart Watch" },
  { id: 6, category: "perfume", name: "Cologne" },
];
function App() {
  // const [setcategory, setSelectedCategory] = useState(data);
  const [searchData, setSearchData] = useState("");
  const newData = data.filter((item) => {
    item.name.toLowerCase().includes(searchData.toLowerCase());
  });
  // const filterData = (category) => {
  //   const newData = data.filter((item) => item.category === category);
  //   setSelectedCategory(newData);
  // };
  return (
    <>
      {/* <h1>Filter Data</h1>
      <button onClick={() => filterData("bags")}>Bags</button>
      <button onClick={() => filterData("watch")}>Watch</button>
      <button onClick={() => filterData("perfume")}>Perfume</button>
      <button onClick={() => setSelectedCategory(data)}>All</button>
      <div>
        {setcategory.length > 0 ? (
          setcategory.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
            </div>
          ))
        ) : (
          <h1>Not found</h1>
        )}
      </div> */}
      <h1>Search Data</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />
      <ul>
        {newData.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
