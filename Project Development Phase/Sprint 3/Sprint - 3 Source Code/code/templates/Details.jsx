import React from 'react';
import { Card, CardContent } from '@mui/material';
import { Doughnut, Pie, PolarArea, Radar } from 'react-chartjs-2';
import './details.css';
import useTransactions from '../../useTransactions';
import 'chart.js/auto';

const Details = ({ title }) => {

    /*const [doughnatC, setDoughnatC] = useState(true);
    const [polarAreaC, setPolarAreaC] = useState(false);
    const [pieC, setPieC] = useState(false);
    const [radarC, setRadarC] = useState(false);*/

    const { chartData } = useTransactions(title);

    console.log(chartData);

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', marginTop: '10px' }}>
            
            <Card style={{}} className={title === 'Income' ? "income" : "expense"} >
            {/*<div className="chartButtonContainer" >
                <button className={title === 'Income' ? (doughnatC ? "selectedIn" : "btnIn") : (doughnatC ? "selectedEx" : "btnEx") }
                    onClick={() => {
                        setDoughnatC(true);
                        setPolarAreaC(false);
                        setPieC(false);
                        setRadarC(false);
                    }}
                >Doughnat</button>
                <button className={title === 'Income' ? (polarAreaC ? "selectedIn" : "btnIn") : (polarAreaC ? "selectedEx" : "btnEx")}
                    onClick={() => {
                        setDoughnatC(false);
                        setPolarAreaC(true);
                        setPieC(false);
                        setRadarC(false);
                    }}
                >PolarArea</button>
                <button className={title === 'Income' ? (pieC ? "selectedIn" :"btnIn") : (pieC ? "selectedEx" : "btnEx")}
                    onClick={() => {
                        setDoughnatC(false);
                        setPolarAreaC(false);
                        setPieC(true);
                        setRadarC(false);
                    }}
                >Pie</button>
                <button className={title === 'Income' ? (radarC ? "selectedIn" : "btnIn") : (radarC ? "selectedEx" : "btnEx")}
                    onClick={() => {
                        setDoughnatC(false);
                        setPolarAreaC(false);
                        setPieC(false);
                        setRadarC(true);
                    }}
                >Radar</button>
            </div>*/}
                {/*<CardHeader style={{ textAlign: "center", }} title={title+": Rs. "+total} />*/}
                <CardContent>
                    <Doughnut data={chartData} />
                </CardContent>
            </Card>

            <Card className={title === 'Income' ? "income" : "expense"} >
                <CardContent>
                    <PolarArea data={chartData} />
                </CardContent>
            </Card>
            <Card className={title === 'Income' ? "income" : "expense"} >
                <CardContent>
                    <Pie data={chartData} />
                </CardContent>
            </Card>
            <Card className={title === 'Income' ? "income" : "expense"} >
                <CardContent>
                    <Radar data={chartData} />
                </CardContent>
            </Card>
            

                {/*{doughnatC &&
                    <Doughnut data={chartData} />
                }
                {polarAreaC &&
                    <PolarArea data={chartData} />
                }
                {pieC &&
                    <Pie data={chartData} />
                }
                {radarC &&
                    <Radar data={chartData} />
                }*/}
            </div>
        </div>
        
    );
};

export default Details;