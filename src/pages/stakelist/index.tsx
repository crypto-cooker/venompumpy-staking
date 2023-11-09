import { StakeCard } from "@/components/page/stakelist/StakeCard";
import React, { useEffect, useState } from "react";
import { useWeb3Context } from "@/context/Web3Context";
import { API_URL } from "@/config";

const StakeList = () => {
  const [stakedList, setstakedList] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [rateForFour, setrateForFour] = useState(0);
  const [rateForTwo, setrateForTwo] = useState(0);

  const { web3Provider, address, yzContract, byzContract, sContract } =
    useWeb3Context();
  useEffect(() => {
    if (web3Provider) {
      // getStakedInfoList();
      getStakedInfoFetch();
    }
  }, [web3Provider]);

  /**
   * Get Staked Informations from Backend
   */
  const getStakedInfoFetch = async () => {
    //Twinstar added 3.16
    try {
      setrateForTwo(await byzContract.rateForTwo());
      setrateForFour(await byzContract.rateForFour());
    } catch (error) {
      console.log(error);
    }
    const res = await fetch(`${API_URL}yieldz/stakelist/${address}`)
      .then((res) => res.json())
      .then((response) => {
        const templist = response;
        console.log(templist);
        setstakedList(templist);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    return res;
  };
  /**
   * Get Staked Informations from Contract
   */
  const getStakedInfoList = async () => {
    //Twinstar added 3.16
    try {
      setrateForTwo(await byzContract.rateForTwo());
      setrateForFour(await byzContract.rateForFour());
    } catch (error) {
      console.log(error);
    }

    //  staker address, stakeTime uint256, lockTime uint256, amount uint256, rate uint256  by props:id
    let templist = [];
    for (let index = 0; ; index++) {
      try {
        const stakedItem = await byzContract.userData(address, index);
        templist.push(stakedItem);
      } catch {
        break;
      }
    }
    setstakedList(templist);
    console.log(templist);
  };

  return (
    <>
      <div className="flex justify-center max-w-[1060px] m-auto mt-[55px] pb-[40px]">
        <div className="flex justify-center align-middle border-[1px] bg-[#1C1C1C]/[.6]  border-white/10 backdrop-blur-md rounded-2xl lg:w-[100%] pb-[20px]">
          <div className="py-[15px] px-[30px] w-[80%]">
            {/* Page title */}
            <h2 className="text-white text-[32px] font-bold">Stake List</h2>
            <h6 className="text-[#898CA9] text-[16px] font-normal">
              Description of stake list.
            </h6>
            {web3Provider
              ? stakedList.map((item, index) => {
                  return (
                    <StakeCard
                      key={index}
                      id={index}
                      transId={item._id}
                      staker={item.staker}
                      stakeTime={item.stakeTime}
                      lockTime={item.lockTime}
                      amount={item.amount}
                      reward={item.reward}
                      fee={item.unlockfee}
                      rate={item.rate}
                      rateForFour={rateForFour}
                      rateForTwo={rateForTwo}
                    ></StakeCard>
                  );
                })
              : "Disconnected"}
            {/*  */}
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="w-[323px] h-[182px] bg-[#C9CDD4] z-[999999] rounded-[10px] flex-row justify-center backdrop-blur-md border border-white border-solid box-border ">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That&apos;s the main
                    thing people are controlled by! Thoughts- their perception
                    {/* of themselves! They're slowed down by their perception of */}
                    {/* themselves. If you're taught you can’t do anything, you */}
                    won&apos;t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default StakeList;
