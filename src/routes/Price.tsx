import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import styled from 'styled-components';

const PriceBox = styled.ul`
    display: flex;
    flex-direction:column;
  justify-content: center;
  align-items: center;
`;

const PriceList = styled.li`
    width:80%;
    display:flex;
    border: gray solid 2px;
    border-radius:20px;
    padding: 15px 25px;
    margin: 10px 0px;
    :hover{
        background-color:black;
        color:white;
    }
`;

const Title = styled.div`
    font-weight: 600;
    margin-right:10px;
`;

const Dollor = styled.div`
    font-weight:900;
`;

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
function Price({ coinId }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(
        ["ohlcv", coinId], 
        () => fetchCoinHistory(coinId),
        { refetchInterval: 10000,}
    );
    return (
        <div>
            {isLoading? ("Loading Price...") : (
                <PriceBox>
                    <PriceList>
                        <Title>Open:</Title>
                        <Dollor>
                            ${data?.[28].open.toFixed(3)}
                        </Dollor>
                    </PriceList>
                    <PriceList>
                        <Title>High:</Title>
                        <Dollor>
                            ${data?.[28].high.toFixed(3)}
                        </Dollor>
                    </PriceList>
                    <PriceList>
                        <Title>Low:</Title>
                        <Dollor>
                            ${data?.[28].low.toFixed(3)}
                        </Dollor>
                    </PriceList>
                    <PriceList>
                        <Title>Close:</Title>
                        <Dollor>
                            ${data?.[28].close.toFixed(3)}
                        </Dollor>
                    </PriceList>
                </PriceBox>
            )}
        </div>
    );
}

export default Price;