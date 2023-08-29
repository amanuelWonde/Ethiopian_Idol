import React, { useState } from "react";
import EtvBuilding from "../../Images/logos/etv-building.jpeg";
import { PUBLIC_API_KEY } from "../Api/ChapApi";
function Checkout() {
  const [amount, setAmount] = useState();
  function generateTransactionReference() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000);
    return `${timestamp}-${random}`;
  }

  // Example usage:
  const transactionReference = generateTransactionReference();
  return (
    <div>
      <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
        <input type="hidden" name="public_key" value={PUBLIC_API_KEY} />
        <input type="hidden" name="tx_ref" value={transactionReference} />
        <input type="hidden" name="amount" value={amount} />
        <input type="hidden" name="currency" value="ETB" />
        <input type="hidden" name="email" value="" />
        <input type="hidden" name="first_name" value="Amanule" />
        <input type="hidden" name="last_name" value="Wonde" />
        <input type="hidden" name="title" value="Let us do this" />
        <input
          type="hidden"
          name="description"
          value="Paying with Confidence with cha"
        />
        <input
          type="hidden"
          name="logo"
          value="https://chapa.link/asset/images/chapa_swirl.svg"
        />
        <input
          type="hidden"
          name="callback_url"
          value="https://example.com/callbackurl"
        />
        <input
          type="hidden"
          name="return_url"
          value="http://localhost:3000/Ethiopian_Idol"
        />
        <input type="hidden" name="meta[title]" value="test" />
        <div class="container flex flex-col justify-center items-center mx-auto my-8 py-10">
          <div
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1538582709238-0a503bd5ae04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80`,
            }}
            class="max-w-5xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
          ></div>

          <div class="bg-white -mt-24 shadow-md rounded-lg overflow-hidden">
            <div class="items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
              <div class="px-2 -mt-6">
                <div class="text-center">
                  <h1 class=" text-3xl text-grey-800 font-medium leading-loose my-3 w-full">
                    Fill Your Wallet
                  </h1>
                  <div class="w-full text-center">
                    <div class="max-w-sm mx-auto p-1 pr-0 flex items-center">
                      <input
                        type="text"
                        placeholder="Enter amount"
                        class="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
                        onChange={(e) => setAmount(e.target.value)}
                      />
                      <button
                        type="submit"
                        class="bg-yellow-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-yellow-400 p-3"
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
