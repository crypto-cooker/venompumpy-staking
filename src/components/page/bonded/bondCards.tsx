import GraButton from '@/components/common/Buttons'
import { YIELDZ_ABI, YIELDZ_ADDRESS } from '@/config';
import React from 'react'
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import BondCard from './bondCard';

interface BondCardsProps {
  bondList: any
  tenBondTotal: string
  tenBondPrice: string
  twentyBondTotal: string
  twentyBondPrice: string
}


const BondCards: React.FC<BondCardsProps> = ({ bondList, tenBondTotal, tenBondPrice, twentyBondTotal, twentyBondPrice }) => {
  //console.log('bondcards')
  return (<>
    {bondList.map((val, index) => {
      return (<div key={index}>
        <BondCard
          index={index}
          tenBondPrice={tenBondPrice}
          twentyBondPrice={twentyBondPrice}
          tenBondTotal={tenBondTotal}
          twentyBondTotal={twentyBondTotal} />
      </div>)
    })}
  </>)
}

export default BondCards