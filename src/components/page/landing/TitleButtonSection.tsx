import React from "react";
import ConnectCard from "@/components/ui/ConnectCard";
import { Fade } from "react-awesome-reveal";

interface Props { }
// Second Section
const TileButtonSection = (props: Props) => {
  return (
    <section className="second-panel md:mt-40">
      <Fade triggerOnce direction="left" duration={2000}>
        <div className="flex flex-wrap justify-center p-5 lg:pt-30">
          <ConnectCard
            title="TOKEN STAKING"
            iconUrl="/icon/bonding.svg"
            contents="Stake your VenomPumppy token to get daily reward"
          />
          <ConnectCard
            title="VPUMPY NFT STAKING "
            iconUrl="/icon/auto_shaking.svg"
            contents="Stake your VPUMPY NFT on Ventory here to boost your APY"

          />
          <ConnectCard
            title="VPUMPY NFT STAKING "
            iconUrl="/icon/rewarding.svg"
            contents="Stake your VPUMPY NFT on VenomArt here to boost your APY"
          />
        </div>
      </Fade>
    </section>
  );
};

export default TileButtonSection;
