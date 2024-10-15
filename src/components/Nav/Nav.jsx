const Nav = ({ getTableNo }) => {
  const handleTable = (e) => {
    e.preventDefault();
    getTableNo(e.target.value);
  };

  return (
    <div className="">
      <div className="py-20 bg-[url('/images/bg.png')] sm:bg-contain bg-[length:170px_220px] bg-no-repeat bg-left-top sm:bg-center">
        <div className="flex justify-end mr-5 md:mr-20">
          <div className="flex flex-col p-4 border rounded-lg shadow-xl">
            <p className="underline text-xl font-semibold mb-2">
              <i>Select Table No</i>
            </p>
            <form action="" method="" onChange={handleTable}>
              <select
                className="select select-sm select-bordered w-full"
                defaultValue={`Select Table No:`}
              >
                <option disabled>Select Table No:</option>
                <option value={`Percel`}>Percel Delivery</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
              {/* <button className="btn btn-sm btn-neutral mt-2 w-full">
                Set Table
              </button> */}
            </form>
          </div>
        </div>
      </div>
      <p className="text-center pt-2 text-3xl font-semibold font-serif text-[#3f3f41]">
        Fast Food
      </p>

      <div className="flex justify-center">
        <img
          className="w-20"
          src="/images/menu-restaurant-hand-drawn-lettering-phrase.png"
          alt=""
        />
      </div>
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
