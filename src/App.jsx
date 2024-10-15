import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ListCart from "./components/ListCart/ListCart";
import Menus from "./components/Menus/Menus";
import Nav from "./components/Nav/Nav";

function App() {
  const [menus, setMenus] = useState({});
  const [tableNo, setTableNo] = useState("");
  const [selectItems, setSelectItems] = useState([]);

  const getTableNo = (tableNo) => {
    setTableNo(tableNo);
  };
  //for burger
  const handleBurgerItem = (burger) => {
    setSelectItems([...selectItems, burger]);
  };
  // for tacos
  const handleTacosItem = (tac) => {
    setSelectItems([...selectItems, tac]);
  };
  //for pizza
  const handlePizzaItem = (pizza) => {
    setSelectItems([...selectItems, pizza]);
  };
  //for drinks
  const handleDrinkItem = (drink) => {
    setSelectItems([...selectItems, drink]);
  };
  //for fries
  const handleFriesItem = (fry) => {
    setSelectItems([...selectItems, fry]);
  };

  //remove selected items
  let remove = false;
  const handleRemoveItem = (item) => {
    const remaining = selectItems.filter((i) => {
      if (i === item && !remove) {
        remove = true;
        return false;
      }
      return true;
    });
    setSelectItems(remaining);
  };
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  return (
    <>
      <div className="bg-gray-100 sm:bg-[url('/images/bglights.png')]  sm:bg-[length:250px_250px] sm:bg-no-repeat sm:bg-left-top">
        <Nav getTableNo={getTableNo}></Nav>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <Menus
              menus={menus}
              handleBurgerItem={handleBurgerItem}
              handleTacosItem={handleTacosItem}
              handlePizzaItem={handlePizzaItem}
              handleDrinkItem={handleDrinkItem}
              handleFriesItem={handleFriesItem}
            ></Menus>
          </div>
          <div className="col-span-1">
            <ListCart
              tableNo={tableNo}
              selectItems={selectItems}
              handleRemoveItem={handleRemoveItem}
            ></ListCart>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
