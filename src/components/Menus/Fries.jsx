const Fries = ({ fries = [], handleFriesItem }) => {
  return (
    <div>
      <div className="flex lg:flex-row-reverse sm:flex-row-reverse flex-col justify-center items-center gap-2">
        <img
          className="w-[180px] lg:rotate-90 sm:rotate-90 rotate-0 sm:my-4"
          src="/images/fries.png"
          alt=""
        />
        <div>
          <h1 className="text-2xl font-semibold text-center underline">
            <i>FRIES</i>
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
                {fries.map((fry, idx) => (
                  <tbody key={idx}>
                    <tr>
                      <td className="">
                        <i>{fry.name}</i>
                      </td>
                      <td>
                        <i>${fry.price}</i>
                      </td>
                      <td>
                        <button
                          className="btn btn-xs btn-neutral"
                          onClick={() => handleFriesItem(fry)}
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
    </div>
  );
};

export default Fries;
