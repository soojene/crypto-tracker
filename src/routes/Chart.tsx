import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}
function Chart({ coinId }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(
        ["ohlcv", coinId], 
        () => fetchCoinHistory(coinId),
        { refetchInterval: 10000,}
    );
    return (
        <div>
        {isLoading ? (
            "Loading chart..."
        ) : (
            <ApexChart 
            type="candlestick" 
            series={[
                {
                name: "Price",
                data: data?.map((price) => ({
                    x: price.time_close,
                    y: [price.open, price.high, price.low, price.close],
                })),
                },
            ]} 
            options={{
                theme:{mode:"dark"},
                chart:{
                    type: 'candlestick',
                    height: 300,
                    width:500,
                    toolbar: {
                        show: false,
                    },
                },
                grid: { show: true },
                yaxis: {
                    show: false,
                },
                xaxis: {
                    type: 'datetime'
                },
            }} />
        )}
        </div>
    );
}
export default Chart;