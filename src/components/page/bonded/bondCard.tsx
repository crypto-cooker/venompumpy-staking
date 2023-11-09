import GraButton from "@/components/common/Buttons";
import { YIELDZ_ABI, YIELDZ_ADDRESS } from "@/config";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { toast } from "react-toastify";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useWeb3Context } from "@/context/Web3Context";
import * as utils from "@/utils";
import { ethers } from "ethers";

interface BondCardProps {
  index: number;
  tenBondTotal: string;
  tenBondPrice: string;
  twentyBondTotal: string;
  twentyBondPrice: string;
}

const BondCard: React.FC<BondCardProps> = ({
  index,
  tenBondTotal,
  twentyBondTotal,
  tenBondPrice,
  twentyBondPrice,
}) => {
  const [amount, setAmount] = useState<number>(0);
  const [period, setPeriod] = useState<number>(0);
  const [flag, setFlag] = useState<boolean>(false);
  const [openClaim, setOpenClaim] = React.useState(false);
  const { provider, address, yzContract, byzContract, sContract } =
    useWeb3Context();
  const handleClickClaim = async () => {
    let claimable = false;
    try {
      claimable = await yzContract.claimable(address, index).call();
      if (claimable) {
        onClaim();
      } else {
        setOpenClaim(true);
      }
    } catch (error) {
      console.log(error);
      toast.error("Transaction Error!");
    }
  };
  const handleClose = () => {
    setOpenClaim(false);
  };
  // useEffect(() => {
  //   let interval = null;
  //   interval = setInterval(() => {
  //     getData();
  //   }, 60000);
  // }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const currentTime = utils.getCurrentBlockTime();
    console.log(currentTime);
    const bondItem = await yzContract.userBond(address, index);

    setPeriod(bondItem.period);

    let newRate = ethers.utils.formatUnits(String(bondItem.rate));
    let bondAmount = (
      (Number(currentTime) - Number(bondItem.startTime)) *
      Number(newRate)
    ).toFixed(5);
    setAmount(Number(bondAmount));
  };

  const onClaim = async () => {
    if (window.ethereum == undefined) {
      toast.error("Install Extension !");
      return;
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const web3Instance = new Web3(window.ethereum);
    //console.log(await web3Instance.eth.getChainId());
    const yieldzContract = new web3Instance.eth.Contract(
      YIELDZ_ABI as AbiItem[],
      YIELDZ_ADDRESS
    );
    await yieldzContract.methods
      .claimBond(index)
      .send({ from: accounts[0] })
      .on("receipt", function (receipt) {
        // console.log('asdfasdfasdf', receipt)
      });
    setFlag(!flag);
  };

  return (
    <>
      <div className="flex-row justify-between flex border-[1px] rounded-lg bg-white/5  border-white/10 m-[15px] relative p-[10px] px-[20px] max-[537px]:flex-col ">
        <div className="grid justify-between max-[537px]:m-auto">
          <p className="flex items-center">
            Total Amount:{" "}
            {period == 10
              ? (Number(tenBondTotal) / Number(tenBondPrice)).toFixed(5)
              : (Number(twentyBondTotal) / Number(twentyBondPrice)).toFixed(5)}
            {/* Total Amount: {} */}
          </p>
          <p className="flex items-center">
            Received Amount: {String(amount)}
            {/* Received Amount: {() => {}} */}
          </p>
        </div>
        <div className="items-center content-center flex  max-[537px]:m-auto  max-[537px]:py-[10px]">
          <GraButton
            className="w-[133px] mt-[3px] h-[36px] font-bold text-[18px] ml-[10px]"
            onClick={() => handleClickClaim()}
          >
            Claim
          </GraButton>
        </div>
      </div>
      {/* Claim */}
      <Dialog
        onClose={handleClose}
        open={openClaim}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ backdropFilter: "blur(5px)" }}
        maxWidth="xs"
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "green",
            bgcolor: "#caffdb",
          }}
        >
          Claim Lock Time
        </DialogTitle>
        <DialogContent
          sx={{
            display: "block",
            bgcolor: "#caffdb",
          }}
        >
          <div className="justify-center flex">
            <TextField
              label="Time Lock:"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch", textAlign: "center" }}
              defaultValue="12"
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">Houers </InputAdornment>
                ),
              }}
            />
          </div>

          <DialogContentText
            id="alert-dialog-description"
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "green",
              textAlign: "center",
            }}
          >
            The lock period is not over ! Once it has expired, you can claim the
            rewards you have earned so far.
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            bgcolor: "#caffdb",
          }}
        >
          <Button onClick={handleClose} sx={{ color: "green" }}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BondCard;
