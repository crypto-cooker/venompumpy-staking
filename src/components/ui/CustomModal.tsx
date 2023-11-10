import React, { useEffect } from "react";
import { FC } from "react";

const data = {
  title: ["Early Unlock Fee", "Claim Lock Time", "successfully bonded"],
  content: [
    ""
  ],
  btn: [["Close", "Confirm"], "Confirm", "Confirm"],
  display: ["Current fee:", "Time Lock:", "Claim in:"],
};
interface ModalProps {
  index: number;
  open:any;
  // close:any;
  // hide:any;
  // isOpen: boolean;
}
const CustomModal: FC<ModalProps> = ({ index,  open }) => {
  const [showModal, setShowModal] = React.useState(false);
  
  useEffect(() => {
    setShowModal(open);
  }, []);
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed w-[323px] h-[182px] bg-[#C9CDD4] z-[999999] rounded-[10px] flex-row justify-center backdrop-blur-md border border-white border-solid box-border ">
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
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    {/* of themselves! They're slowed down by their perception of */}
                    {/* themselves. If you're taught you can’t do anything, you */}
                    won’t do anything. I was taught I could do everything.
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
export default CustomModal;
