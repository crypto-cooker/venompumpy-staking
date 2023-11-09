import GraButton from "@/components/common/Buttons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import {
  API_URL,
  ERROR_CLAIM_BYIELDZ_SLOWMODE,
  ERROR_DEPOSIT_BYIELDZ_SLOWMODE,
  STAKE_ADDRESS,
} from "@/config";
import { ethers } from "ethers";
import { useWeb3Context } from "@/context/Web3Context";
import axios from "axios";
import { getCurrentBlockTime } from "@/utils";
import Head from "next/head";
const myround = (amount: string) => {
  //in: String
  const samount =
    Math.round((parseFloat(amount) + Number.EPSILON) * 100000) / 100000;
  return samount.toString(); //out: string 100.0020030442 -> 100.002
};
const Boosted = () => {
  const [eth, setEth] = useState("");
  const [usdt, setUsdt] = useState("");
  const [byz, setByz] = useState("");
  const [rewardCore, setrewardCore] = useState("0");
  const [rewardShdw, setrewardShdw] = useState("0");
  const [stakedAmount, setstakedAmount] = useState("0");

  const [depositAmount, setDepositAmount] = useState<number>();

  const [openClaim, setOpenClaim] = React.useState(false);

  const {
    provider,
    web3Provider,
    address,
    yzContract,
    byzContract,
    sContract,
  } = useWeb3Context();

  const handleClose = () => {
    setOpenClaim(false);
  };
  const handleClickClaim = async () => {
    let claimable = false;
    try {
      claimable = await sContract.claimable(address);
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
  useEffect(() => {
    if (web3Provider) {
      getCurrentPool();
      getYZBalance();
      getStakedAmount();
      getPendingReward();
    }
    // if (!netstatus) {
    //   return;
    // }
  }, [web3Provider]);
  const handleChange = (event) => {
    if (event.target.value < 0) return;
    setDepositAmount(event.target.value);
  };
  const getCurrentPool = async () => {
    try {
      const poolAmount = await sContract.getVaultBalance();
      const ethBalance = ethers.utils.formatUnits(poolAmount[0]);
      const shdwBalane = ethers.utils.formatUnits(poolAmount[1]);
      setEth(myround(ethBalance));
      setUsdt(myround(shdwBalane));
    } catch (error) {
      console.log(error);
      return;
    }
  };
  const getYZBalance = async () => {
    try {
      const byzAmount = ethers.utils.formatUnits(
        await byzContract.balanceOf(address)
      );

      setByz(myround(byzAmount));
    } catch (error) {
      console.log(error);
    }
  };
  const getStakedAmount = async () => {
    try {
      const stakedAmount = await sContract.userInfo(address);
      let amount = ethers.utils.formatUnits(stakedAmount[0]);
      setstakedAmount(amount);
    } catch (error) {
      console.log(error);
    }
  };
  const getPendingReward = async () => {
    try {
      const rewardAmount = await sContract.pendingReward(address);
      const ethBalance = ethers.utils.formatUnits(rewardAmount[0]);
      const shdwBalane = ethers.utils.formatUnits(rewardAmount[1]);
      setrewardCore(myround(ethBalance));
      setrewardShdw(myround(shdwBalane));
    } catch (error) {
      console.log(error);
    }
  };
  const onDeposit = async () => {
    if (depositAmount > parseFloat(byz)) {
      toast.error("Stake amount is exceeded !");
      return;
    }
    if (depositAmount <= 0 || depositAmount === undefined) {
      toast.error("Input the correct amount to stake!");
      return;
    }
    const sAmount = ethers.utils.parseEther(depositAmount.toString());
    const stakeApprove = await byzContract.approve(STAKE_ADDRESS, sAmount);
    try {
      const depoist = await sContract.deposit(sAmount);
      await depoist.wait();

      sContract.on("Deposit", async (sender, amount) => {
        const stakeTime = await getCurrentBlockTime();

        const depositData = {
          address: sender,
          amount: sAmount.toString(),
          stakeTime: stakeTime.toString(),
        };
        console.log(depositData);
        axios
          .post(`${API_URL}byieldz/depositbyz`, depositData)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        toast.success("Success BYZ Staking!");
      });
    } catch (error) {
      console.log(error.reason);
      if (error.reason.includes("Slow Mode") == true) {
        toast.error(ERROR_DEPOSIT_BYIELDZ_SLOWMODE);
      }
    }
    getYZBalance();
    getStakedAmount();
    setDepositAmount(0);
  };
  const onClaim = async () => {
    if (parseFloat(rewardCore) == 0 || parseFloat(rewardShdw) == 0) {
      toast.error("There is nothing to get rewards!");
      return;
    }
    const claimtime = await getCurrentBlockTime();
    console.log(claimtime);
    try {
      const depoist = await sContract.deposit(0);
      await depoist.wait();
      sContract.on("Claim", (sender, amount) => {
        if (amount != 0) return;
        const depositData = {
          address: sender,
          core: rewardCore,
          shdw: rewardShdw,
          claimtime: claimtime.toString(),
        };
        console.log(depositData);
        axios
          .post(`${API_URL}byieldz/rewards`, depositData)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        toast.success("Success Claim Rewards");
        getPendingReward();
      });
    } catch (error) {
      if (error.reason.includes("Slow Mode")) {
        toast.error(ERROR_CLAIM_BYIELDZ_SLOWMODE);
      }
    }
  };
  return (
    <>
      <Head>
        <title>Boost APY</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="flex justify-center mt-[55px] align-middle border-[1px] bg-[#1C1C1C]/[.6]  border-white/10 backdrop-blur-md rounded-2xl p-[20px] mb-10 max-w-[915px] md:px-[85px] px-[20px] pb-[46px] m-auto">
        <div className="w-[100%] pt-6">
          {/* Page title */}
          <h2 className="text-white text-[32px] font-bold px-3">Boost APY</h2>
          <div className="">
            <div className="p-[8px] w-[100%]">
              {/* Current Pool Card Started */}
              <div className="relative pt-0 pb-[21px] border-[1px] rounded-xl bg-white/5 mdh-[120px] border-white/10 max-md:w-[100%] max-md:mx-0 box-border h-[30%]">
                <div className="bg-white/5 border-b-[1px] border-white/10 rounded-xl flex w-full h-[43px] align-middle pl-4">

                  <h4 className="text-white font-semibold text-[20px] m-auto">
                    Current pool
                  </h4>

                </div>
                <h2 className="text-white text-[32px] uppercase font-bold text-center my-[5%]  leading-10 flex-row justify-center">
                  {web3Provider ? `${eth} CORE + ${usdt} SHDW` : "Disconnected"}
                </h2>
              </div>
              {/* Distributed Rewards Ended */}
            </div>
          </div>
        </div>
      </div>{" "}
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
            color: "#7f16ba",
            bgcolor: "#e8aef7",
          }}
        >
          Claim Lock Time
        </DialogTitle>
        <DialogContent
          sx={{
            display: "block",
            bgcolor: "#e8aef7",
          }}
        >
          <div className="flex justify-center">
            <TextField
              label="Time Lock:"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              defaultValue="12 Hours"
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">YZ</InputAdornment>
                ),
              }}
            />
          </div>

          <DialogContentText
            id="alert-dialog-description"
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#7f16ba",
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
            bgcolor: "#e8aef7",
          }}
        >
          <Button onClick={handleClose} sx={{ color: "#7f16ba" }}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Boosted;
