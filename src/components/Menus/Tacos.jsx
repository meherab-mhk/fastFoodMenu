const Tacos = ({ tacos = [], handleTacosItem }) => {
  return (
    <div className="flex xl:flex-col-reverse sm:flex-row flex-col justify-center items-center gap-2">
      <img className="w-[180px]" src="/images/tacos3.png" alt="" />
      <div>
        <h1 className="text-2xl font-semibold text-center underline">
          <i>TACOS</i>
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
              {tacos.map((tac, idx) => (
                <tbody key={idx}>
                  <tr>
                    <td className="">
                      <i>{tac.name}</i>
                    </td>
                    <td>
                      <i>${tac.price}</i>
                    </td>
                    <td>
                      <button
                        className="btn btn-xs btn-neutral"
                        onClick={() => handleTacosItem(tac)}
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

export default Tacos;
