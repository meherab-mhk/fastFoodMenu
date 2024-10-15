import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ListCart = ({ tableNo, selectItems, handleRemoveItem }) => {
  const totalAmount = selectItems.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = () => {
    console.log(tableNo);
    if (tableNo == 0) {
      toast.error("Select table no or order category first!");
    } else if (totalAmount == 0) {
      toast.error("Please select an item!");
    } else {
      toast("You placed an order!");
    }
  };
  return (
    <div className="m-5">
      <ToastContainer></ToastContainer>
      <p className="text-2xl font-semibold underline text-center uppercase">
        <i>Selected items</i>
      </p>
      <div>
        <p className="text-center">
          Table No or order category:{" "}
          <span className="font-bold">{tableNo}</span>
        </p>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                {/* <th>Table No</th> */}
                <th>SL</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {selectItems.map((item, idx) => (
              <tbody key={idx}>
                <tr>
                  <th>{idx + 1}</th>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => handleRemoveItem(item)}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <p>Total Amount:${totalAmount}</p>
        <button
          className="float-end btn btn-neutral btn-sm my-2"
          onClick={placeOrder}
        >
          Place Order
        </button>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

ListCart.propTypes = {};

export default ListCart;
