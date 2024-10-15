const Pizzas = ({ pizzas = [], handlePizzaItem }) => {
  return (
    <div className="flex flex-col xl:flex-col sm:flex-row-reverse justify-center items-center gap-2">
      <img className="w-[180px]" src="/images/pizza.png" alt="" />
      <div>
        <h1 className="text-2xl font-semibold text-center underline">
          <i>PIZZAS</i>
        </h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              {/* row 1 */}
              {pizzas.map((pizza, idx) => (
                <tbody key={idx}>
                  <tr>
                    <td className="">
                      <i>{pizza.name}</i>
                    </td>
                    <td>
                      <i>${pizza.price}</i>
                    </td>
                    <td>
                      <button
                        className="btn btn-xs btn-neutral"
                        onClick={() => handlePizzaItem(pizza)}
                      >
                        select
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizzas;
