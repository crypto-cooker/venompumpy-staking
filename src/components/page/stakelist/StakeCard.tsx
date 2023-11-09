import GraButton from "@/components/common/Buttons";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
/**
 *
 * @returns New StakeCard Jsx Component
 */

interface StakeCardProps {
  id: number;
  transId: string;
  staker: string;
  stakeTime: number;
  lockTime: number;
  amount: number;
  rate: number;
  reward: number;
  fee: number;
  rateForFour: number;
  rateForTwo: number;
}
const myround = (amount: string) => {
  //in: String
  const samount =
    Math.round((parseFloat(amount) + Number.EPSILON) * 10000) / 10000;
  return samount.toString(); //out: string 100.0020030442 -> 100.002
};
const toHHMMSS = (sec_num: number) => {
  // var sec_num:number = parseInt(this, 10); // don't forget the second param
  var hours: string = Math.floor(sec_num / 3600).toString();
  var minutes: string = Math.floor(
    (sec_num - parseInt(hours) * 3600) / 60
  ).toString();
  var seconds: string = (
    sec_num -
    parseInt(hours) * 3600 -
    parseInt(minutes) * 60
  ).toString();

  if (Number(hours) < 10) {
    hours = "0" + hours;
  }
  if (Number(minutes) < 10) {
    minutes = "0" + minutes;
  }
  if (Number(seconds) < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
};
export const StakeCard: React.FC<StakeCardProps> = () => {
  // To get stake infos ... amount, leftRewardClaim,....
  const [totalStaked, settotalStaked] = useState<number>(0);
  const [rewardClaim, setrewardClaim] = useState<number>(60 * 60 * 6);
  const [stakingPeriod, setstakingPeriod] = useState<number>();
  const [totalPeriod, settotalPeriod] = useState<number>();
  const [unlockfee, setunlockFee] = useState<number>(0);
  const [byzrewards, setbyzrewards] = useState<string>("0");
  const [iswithDraw, setiswithDraw] = useState<boolean>(false);
  const [openWithdraw, setOpenWithdraw] = React.useState(false);
  const [openClaim, setOpenClaim] = React.useState(false);

  const handleClickWithdraw = () => {
    setOpenWithdraw(true);
  };

 

  // getCurrentBlockTime().then(console.log);
  const handleClickClaim = async () => {
    
  };
  const handleClose = () => {
    setOpenWithdraw(false);
    setOpenClaim(false);
  };

  //Timer
  useEffect(() => {
    if (stakingPeriod < 0) return;
    let interval = setInterval(() => {
      if (rewardClaim == 0) {
        setrewardClaim(60 * 60 * 6);
        // setstakingPeriod(stakingPeriod - 1); //test

        getReward();
      } else setrewardClaim((rewardClaim) => rewardClaim - 1);
    }, 1000);
    // }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rewardClaim]);
  // Get Rewards as BYZ from Contract
  const getReward = async () => {
    
  };
  /**
   * 2023.3.23 Twinstar Added
   * post claim data to backend
   */
  const onWithdraw = async () => {
    
  }

  return (
    !iswithDraw && (
      <>
        <div className="divider border-t-2 border-white/10 my-5"></div>
        <div className="md:flex md:justify-between">
          <div className="max-md:w-[100%] px-[21px] pt-6 pb-[10px] border-[1px] rounded-lg bg-white/5  border-white/10 w-[25%] max-md:m-0 max-md:my-5">
            <h2 className="text-white/60 mb-5 text-[18px] my-auto  text-center ">
              Staked $YZ
            </h2>
            <h2 className="text-white mb-8 text-[22px] my-auto  text-center ">
              {totalStaked}
              {/* this is the value of stacked which read from contract */}
            </h2>
            <div className="flex justify-center">
              <GraButton
                className="w-[133px] mb-6 h-[36px] font-bold text-[18px] mx-auto"
                onClick={handleClickWithdraw}
              >
                Withdraw
              </GraButton>
            </div>
          </div>
          <div className="max-md:w-[100%] relative px-[21px] pt-[20px] pb-[21px] border-[1px] rounded-xl bg-white/5  border-white/10 w-[40%] max-md:m-0 max-md:my-5">
            <h2 className="text-white/60 mb-3 text-[18px] my-auto  text-center ">
              Reward Claim
            </h2>
            <h2 className="text-white mb-5 text-[20px] my-auto font-semibold text-center ">
              {toHHMMSS(rewardClaim)}
            </h2>
            <h2 className="text-white/60 mb-3 text-[18px] my-auto  text-center">
              Staking period (Left / Total) day
            </h2>
            <h2 className="text-white mb-5 text-[20px] my-auto  text-center ">
              {stakingPeriod == -1
                ? "Ended"
                : `${stakingPeriod} / ${totalPeriod}`}
            </h2>
            <h2 className="text-white/60 mb-3 text-[18px] my-auto  text-center ">
              Unlock fee
            </h2>
            <h2 className="text-white mb-2 text-[20px] my-auto  text-center ">
              {unlockfee}%
            </h2>
          </div>
          <div className=" max-md:m-0 max-md:my-5 max-md:w-[100%] px-[21px] pt-6 pb-[10px] border-[1px] rounded-lg bg-white/5  border-white/10 w-[25%]">
            <h2 className="text-white/60 mb-7 text-[18px] my-auto  text-center ">
              Your Rewards
            </h2>
            <div className="text-white mb-5 text-[22px] my-auto  text-center  flex justify-center items-center content-center">
              {byzrewards} BYZ
              <Image
                className="mt-[2px]"
                src="./icon/purpleysmallicon.svg"
                alt="slider pannel"
                width={23}
                height={23}
              />
            </div>
            <div className="flex justify-center">
              <GraButton
                className="w-[133px] mb-6 h-[36px] font-bold text-[18px]"
                onClick={handleClickClaim}
                disabled={stakingPeriod == -1 ? true : false}
              >
                Claim
              </GraButton>
            </div>
          </div>
        </div>
        {/* Withdraw */}
        <Dialog
          onClose={handleClose}
          open={openWithdraw}
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
            Early Unlock Fee
          </DialogTitle>
          <DialogContent
            sx={{
              display: "block",
              bgcolor: "#caffdb",
            }}
          >
            <div className="justify-center flex">
              <TextField
                label="Current Fee"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "25ch" }}
                defaultValue={unlockfee + "%"}
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
                color: "green",
                textAlign: "center",
              }}
            >
              Note: You may be subject to a fee if you wish to unstake &
              withdraw your Yieldz tokens early.
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "#caffdb",
            }}
          >
            <Button
              onClick={handleClose}
              sx={{ color: "green", borderColor: "green", border: "1px" }}
            >
              Close
            </Button>
            <Button onClick={onWithdraw} sx={{ color: "green" }}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>

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
                color: "green",
                textAlign: "center",
              }}
            >
              The lock period is not over ! Once it has expired, you can claim
              the rewards you have earned so far.
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
    )
  );
};
