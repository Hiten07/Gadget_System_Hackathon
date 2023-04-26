import React from 'react'
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import Sidebar from '../components/Sidebar'
import "./styles/dashboard.css"

Chart.register(CategoryScale);

const Dashboard = () => {
    const labels = [1, 2, 3, 4, 5, 6];
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 68, 240],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };
    return (
        <div className='dashboard admin-container'>
            <Sidebar />
            <div className="main-content-container">
                <h2>Today Count</h2>
                <div className="day-numbers">
                    <div className="day">
                        <div className='title'>
                            <li className='material-symbols-outlined'>Monitoring</li>
                            <span>Total Revenue</span>
                        </div>
                        <p>INR 3600</p>
                    </div>
                    <div className="day">
                        <div className='title'>
                            <li className='material-symbols-outlined'>Inventory_2</li>
                            <span>Sell product</span>
                        </div>
                        <p>14</p>
                    </div>
                    <div className="day">
                        <div className='title'>
                            <li className='material-symbols-outlined'>Currency_Rupee</li>
                            <span>Total Profit</span>
                        </div>
                        <p>INR 1200</p>
                    </div>
                </div>

                <div className="charts">
                    <h3>Revenue Chart</h3>
                    <div className="chart">
                        <Bar
                            data={data}
                            options={{
                                plugins: {
                                    title: {
                                        display: true,
                                        text: "Data wise revenue"
                                    },
                                    legend: {
                                        display: false
                                    }
                                }
                            }}
                        />
                    </div>

                    {/* <div className="chart">
                        <Line
                            data={data}
                            options={{
                                plugins: {
                                    title: {
                                        display: true,
                                        text: "Month wise revenue"
                                    },
                                    legend: {
                                        display: false
                                    }
                                }
                            }}
                        />
                    </div> */}
                </div>

                <div className="less-stock">
                    <div>
                        <h3>Cover less stock</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Brand</th>
                                    <th>Model</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Apple</td>
                                    <td>iphone 14 pro</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Vivo</td>
                                    <td>V15</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>samsung</td>
                                    <td>F42</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h3>Glass less stock</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Brand</th>
                                    <th>Model</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>samsung</td>
                                    <td>F42</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Oppo</td>
                                    <td>Rano 2 pro</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Apple</td>
                                    <td>iphone 14 pro</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Vivo</td>
                                    <td>V15</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h3>Accessories less stock</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Brand</th>
                                    <th>Model</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Boat</td>
                                    <td>Headphone</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>samsung</td>
                                    <td>USB Cable</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard
