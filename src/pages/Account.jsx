import React from 'react'
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import Sidebar from '../components/Sidebar'
import "./styles/account.css"

Chart.register(CategoryScale);

function Account() {
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

    const add = true;
    return (
        <div className='admin-container'>
            <Sidebar />
            <div className="main-content-container">
                <h2>Account</h2>
                <div className="chart account-chart">
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

                    <div className="change-btn">
                        <button>Daily</button>
                        <button>Monthly</button>
                        <button>Yearly</button>
                    </div>
                </div>
                <div className="history">
                    <h3>History</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Date</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>F42 cover</td>
                                <td>1</td>
                                <td>24/4</td>
                                <td className={add ? 'transactionIcon add' : 'transactionIcon remove'}><li className='material-symbols-outlined' >Add</li> 150</td>
                            </tr>
                            <tr>
                                <td>F42 cover</td>
                                <td>20</td>
                                <td>24/4</td>
                                <td className={false ? 'transactionIcon add' : 'transactionIcon remove'}><li className='material-symbols-outlined' >Remove</li> 1200</td>
                            </tr>
                            <tr>
                                <td>F42 cover</td>
                                <td>1</td>
                                <td>24/4</td>
                                <td className={add ? 'transactionIcon add' : 'transactionIcon remove'}><li className='material-symbols-outlined' >Add</li> 150</td>
                            </tr>
                            <tr>
                                <td>F42 cover</td>
                                <td>1</td>
                                <td>25/4</td>
                                <td className={add ? 'transactionIcon add' : 'transactionIcon remove'}><li className='material-symbols-outlined' >Add</li> 150</td>
                            </tr>
                            <tr>
                                <td>F42 cover</td>
                                <td>1</td>
                                <td>25/4</td>
                                <td className={add ? 'transactionIcon add' : 'transactionIcon remove'}><li className='material-symbols-outlined' >Add</li> 150</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Account
