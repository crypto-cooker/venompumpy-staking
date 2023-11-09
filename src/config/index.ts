import _json_YIELDZ from "../constant/yieldzapi.json";
import _json_BYIELDZ from "../constant/byieldzabi.json";
import _json_STAKE from "../constant/stakeabi.json";

// Chain ID
export const CHAIN_ID = 1116; 
// export const CHAIN_ID = 97  //bscscan Chain testnet

//API URL
// export const API_URL = "http://185.143.223.55:443/";
export const API_URL = process.env.API_URL || "http://192.168.124.13:8000/";
// Contract Address
export const YIELDZ_ADDRESS = "0xe191a4d47A6be111C75139757CDDBb61BEEd88FB";
export const BYIELDZ_ADDRESS = "0xA6AC3761F24eaE86EA0641f966CFdB284cfe8337";
export const STAKE_ADDRESS = "0x1dFB60ff447c18306ad5C8Ed9ACd544947BDdB6F";
// Contract Abi
export const YIELDZ_ABI = _json_YIELDZ;
export const BYIELDZ_ABI = _json_BYIELDZ;
export const STAKE_ABI = _json_STAKE;
export const REWARD_CLAIM_PERIOD = 6 ; //hours

//Error Message
export const ERROR_DEPOSIT_BYIELDZ_SLOWMODE = "Transaction Error! You can stake again after 12 hours from your last staking."
export const ERROR_CLAIM_BYIELDZ_SLOWMODE = "Transaction Error!"
