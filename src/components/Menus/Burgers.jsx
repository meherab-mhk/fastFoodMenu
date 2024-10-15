const Burgers = ({ burgers = [], handleBurgerItem }) => {
  // const handleSelect = () => {
  //   console.log("object");
  // };
  return (
    <div className="mx-2 flex flex-col xl:flex-col sm:flex-row-reverse justify-center items-center gap-2">
      <img className="w-[180px]" src="/images/burger5.png" alt="" />
      <div className="">
        <h1 className="text-2xl font-semibold text-center underline">
          <i>BURGERS</i>
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
              {burgers.map((burger, idx) => (
                <tbody key={idx}>
                  <tr>
                    <td className="">
                      <i>{burger.name}</i>
                    </td>
                    <td>
                      <i>${burger.price}</i>
                    </td>
                    <td>
                      <button
                        className="btn btn-xs btn-neutral"
                        onClick={() => handleBurgerItem(burger)}
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

export default Burgers;
