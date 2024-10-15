import Burgers from "./Burgers";
import Drinks from "./Drinks";
import Fries from "./Fries";
import Pizzas from "./Pizzas";
import Tacos from "./Tacos";

const Menus = ({
  menus,
  handleBurgerItem,
  handleTacosItem,
  handlePizzaItem,
  handleDrinkItem,
  handleFriesItem,
}) => {
  const { burgers, tacos, pizzas, drinks, fries } = menus.menu || {};

  return (
    <div className="m-4">
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 mb-5">
        <Burgers
          burgers={burgers}
          handleBurgerItem={handleBurgerItem}
        ></Burgers>
        <Tacos tacos={tacos} handleTacosItem={handleTacosItem}></Tacos>
        <Pizzas pizzas={pizzas} handlePizzaItem={handlePizzaItem}></Pizzas>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 mt-5">
        <Drinks drinks={drinks} handleDrinkItem={handleDrinkItem}></Drinks>
        <Fries fries={fries} handleFriesItem={handleFriesItem}></Fries>
      </div>
    </div>
  );
};

Menus.propTypes = {};

export default Menus;
