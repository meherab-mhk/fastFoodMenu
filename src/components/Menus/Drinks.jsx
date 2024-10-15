const Drinks = ({ drinks = [], handleDrinkItem }) => {
  return (
    <div className="flex xl:flex-row-reverse sm:flex-row flex-col justify-center items-center gap-2">
      <img className="w-[150px]" src="/images/drinks.png" alt="" />
      <div>
        <h1 className="text-2xl font-semibold text-center underline">
          <i>DRINKS</i>
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
              {drinks.map((drink, idx) => (
                <tbody key={idx}>
                  <tr>
                    <td className="">
                      <i>{drink.name}</i>
                    </td>
                    <td>
                      <i>${drink.price}</i>
                    </td>
                    <td>
                      <button
                        className="btn btn-xs btn-neutral"
                        onClick={() => handleDrinkItem(drink)}
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

export default Drinks;
