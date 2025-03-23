/* eslint-disable react/prop-types */

const OrderConfirmation = ({ resetFunc, order, total }) => {

  return (
    <div className="absolute top-20 left-0 md:left-1/2 md:-translate-x-1/2 right-0 z-10 bg-[white] w-full md:w-[500px] flex flex-col py-10 px-4 md:px-6 rounded-lg" id="confirmationElement">
      <img className="mb-4" src="/icon-order-confirmed.svg" width={45} height={45} />
      <h2 className="max-w-52 text-4xl font-bold mb-4">Order Confirmed</h2>
      <p className="text-rose-500 mb-6">We hope you enjoy your food!</p>
      <div className="w-full mt-4 mb-8 p-6 rounded-lg bg-rose-50">
        {order.map((item, index) => (
          <div className="w-full" key={index}>
            <div className="flex flex-row justify-between" >
              <div className="flex flex-row justify-center gap-4">
                <img className="w-14 h-14 rounded-md" src={item.image.thumbnail} />
                <div className="flex flex-col justify-between w-[170px]">
                  <p className="text-base font-semibold line-clamp-1">{item.name}</p>
                  <div className="flex flex-row items-end gap-2 mb-2">
                    <p className="font-semibold text-red">x{item.quantity}</p>
                    <p className="text-rose-500">@<span className="ml-[2px]">${item.price.toFixed(2)}</span></p>
                  </div>
                </div>
              </div>
              <p className="text-xl font-semibold">${(item.quantity * item.price).toFixed(2)}</p>
            </div>
            <div className="w-full h-[1px] rounded-full bg-rose-100 my-6" />
          </div>
        )
        )}
        <div className="flex flex-row justify-between items-center">
          <p>Order Total:</p>
          <p className="font-bold text-2xl">${total.toFixed(2)}</p>
        </div>
      </div>
      <button onClick={() => resetFunc()} className="w-full max-w-[300px] rounded-full py-3 mx-auto bg-red text-[white]">Start New Order</button>
    </div>
  )
}

export default OrderConfirmation