import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Link from "next/link";
import { YIELDZ_ADDRESS } from "@/config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // animations: {
  //   radius: {
  //     duration: 400,
  //     easing: 'linear',
  //     loop: (context) => context.active
  //   }
  // },
  // hoverRadius: 12,
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "CORE vs USD Coin Statistics",
    },
  },
};
export interface MultiLineChart {
  setCorePrice?: () => void;
}

export default function MultiLineChart({ setCorePrice }) {
  const days = 1;
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - days);
  const [coindata, setCoindata] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    // const timer = setTimeout(() => console.log("Hello, World!"), 3000);
    setLoading(true);
    console.log(`https://api.coingecko.com/api/v3/coins/core/market_chart/range?vs_currency=usd&from=${Math.floor(
      startDate.getTime() / 1000
    )}&to=${Math.floor(endDate.getTime() / 1000)}`);
    fetch(
      `https://api.coingecko.com/api/v3/coins/coredaoorg/market_chart/range?vs_currency=usd&from=${Math.floor(
        startDate.getTime() / 1000
      )}&to=${Math.floor(endDate.getTime() / 1000)}`
    )
      .then((res) => res.json())
      .then((response) => {
        // }
        let templabels = [],
          tempprices = [];
        const prices = response.prices.map(([time, price]) => ({
          time,
          price,
        }));
        // setTotalsupply(response.pri)
        setCorePrice(prices[prices.length - 1].price);
        for (let i = prices.length - 1; i >= prices.length - 100; i--) {
          const event = new Date(prices[i].time);
          let h = event.getHours();
          let m = event.getMinutes();
          let label = `${h}:${m}`;
          let price = prices[i].price;

          templabels.unshift(label);
          tempprices.unshift(price);
        }
        // console.log([templabels, tempprices]);


        setCoindata([templabels, tempprices]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // if (isLoading) return <p>Loading...</p>;
  if (!coindata)
    return (
      <div className="flex m-5 text-center p-30 h-80 bg-white/10">
        <div className="m-auto">
          Can not display coin statistics. You have to purchase api key from ou&apos;ve exceeded the Rate Limit. Please visit <Link href="https://www.coingecko.com/en/api/pricing" className="underline hover:text-blue-200">https://www.coingecko.com/en/api/pricing</Link> to subscribe to our API plans for higher rate limits.
        </div>

      </div>
    );

  const labels = coindata[0];

  const data = {
    labels,
    datasets: [
      {
        label: "Prices",

        // borderColor: "rgb(255, 99, 132)",
        // backgroundColor: "rgba(255, 99, 132, 0.5)",
        backgroundColor: "rgba(75,192,192,0.2)",
        // backgroundColor: randoColour(reportOneValue),
        borderColor: "rgba(75,192,192,1)",
        data: coindata[1],
        fill: true,
        // borderWidth: "2",
      },
      //   {
      //     label: "market_caps",
      //     data: [7, 3, 8, 3, 4, 6, 2],
      //     borderColor: "rgb(53, 162, 235)",
      //     backgroundColor: "rgba(53, 162, 235, 0.5)",
      //   },
    ],
  };


  //

  return (
    <Line
      options={options}
      data={data}
      className="px-10 py-[20px]"
    />
  );
}
