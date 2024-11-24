import CountUp from "react-countup";
import { FaEthereum } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { AiFillApi } from "react-icons/ai";
import { PieChart } from 'react-minimal-pie-chart';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Monday', reservations: 5 },
  { day: 'Tuesday', reservations: 8 },
  { day: 'Wednesday', reservations: 3 },
  { day: 'Thursday', reservations: 7 },
  { day: 'Friday', reservations: 10 },
  { day: 'Saturday', reservations: 6 },
  { day: 'Sunday', reservations: 4 },
];

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-2 p-4 ">
            {/* Total Revenue */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl col-span-1 sm:col-span-3 md:col-span-3 dark:bg-[#89dfee]">
                <div className="flex gap-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">Total Revenue</h2>
                    <FaEthereum className="text-indigo-600 text-2xl dark:text-white" />
                </div>
                <div className="flex items-center space-x-2">
                    <CountUp className="text-3xl font-bold text-gray-900 dark:text-white" suffix="$" end={2000} duration={4} />
                </div>
                <div className="text-lg text-green-500 mt-2 flex items-center gap-3">
                    <CountUp className="text-lg font-medium" suffix="%" end={3.67} duration={6} />
                    <FaArrowUpRightDots />
                </div>
            </div>

            {/* Total Expense */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl col-span-1 sm:col-span-3 md:col-span-3  dark:bg-[#9e8ff3]">
                <div className="flex gap-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Total Expenses</h2>
                    <AiFillApi className="text-indigo-600 text-2xl" />
                </div>
                <div className="flex items-center space-x-2">
                    <CountUp className="text-3xl font-bold text-gray-900" suffix="$" end={1000} duration={4} />
                </div>
                <div className="text-lg text-green-500 mt-2 flex items-center gap-3">
                    <CountUp className="text-lg font-medium" suffix="%" end={3.67} duration={6} />
                    <FaArrowTrendDown />
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl col-span-1 sm:col-span-3 md:col-span-3">
                <div className="flex gap-6">
                    <h2 className="text-xl w-full  font-semibold text-gray-800 mb-2">Total Rexavtion</h2>
                    <AiFillApi className="text-indigo-600 text-2xl" />
                </div>
                <div className="flex items-center space-x-2">
                    <CountUp className="text-3xl font-bold text-gray-900" suffix="$" end={800} duration={4} />
                </div>
                <div className="text-lg text-green-500 mt-2 flex items-center gap-3">
                    <CountUp className="text-lg font-medium" suffix="%" end={3.67} duration={6} />
                    <FaArrowTrendDown />
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl col-span-1 sm:col-span-3 md:col-span-3  dark:bg-[#b9c963]">
                <div className="flex gap-6">
                    <h2 className="text-xl w-full  font-semibold text-gray-800 mb-2">Total Rexavtion</h2>
                    <AiFillApi className="text-indigo-600 text-2xl" />
                </div>
                <div className="flex items-center space-x-2">
                    <CountUp className="text-3xl font-bold text-gray-900" suffix="$" end={800} duration={4} />
                </div>
                <div className="text-lg text-green-500 mt-2 flex items-center gap-3">
                    <CountUp className="text-lg font-medium" suffix="%" end={3.67} duration={6} />
                    <FaArrowTrendDown />
                </div>
            </div>


            {/* Customer Reservation */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl col-span-1 sm:col-span-6 md:col-span-6 h-[210px] dark:bg-[#7ceecc]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Customer Reservation</h2>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        View All
                    </button>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Customer Profile"
                        className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-grow">
                        <p className="text-sm font-medium text-gray-900">John Doe</p>
                        <p className="text-sm text-gray-500">Date: 2024-11-25</p>
                        <p className="text-sm text-gray-500">
                            Check-In: 3:00 PM | Check-Out: 11:00 AM
                        </p>
                    </div>
                    <span className="px-3 py-1 text-sm font-medium rounded-lg bg-green-100 text-green-800">
                        Confirmed
                    </span>
                </div>
            </div>

            {/* Reservation per Day */}
            <div className="col-span-1 sm:col-span-6 md:col-span-6 bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl  dark:bg-[#b9c963]">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Reservations for the Week</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="reservations" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Status Chart */}
            <div className="col-span-1 sm:col-span-6 md:col-span-6 bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl mt-[-180px]  dark:bg-[#dd8ff5]">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Status Chart</h2>
                <div className="flex flex-col items-center">
                    <PieChart
                        data={[
                            { title: 'Rent', value: 40, color: '#E38627' },
                            { title: 'Booked', value: 30, color: '#C13C37' },
                            { title: 'Sold', value: 30, color: '#6A2135' },
                        ]}
                        animate
                        animationDuration={1000}
                        animationEasing="ease-out"
                        style={{ height: '150px' }}
                        labelStyle={{
                            fontSize: '8px',
                            fontFamily: 'sans-serif',
                            fill: '#fff',
                        }}
                        radius={42}
                        labelPosition={70}
                    />
                    <div className="mt-4 flex justify-around w-full">
                        <div className="text-center">
                            <div className="w-4 h-4 rounded-full bg-[#E38627] inline-block"></div>
                            <p className="text-sm mt-1">Rent</p>
                        </div>
                        <div className="text-center">
                            <div className="w-4 h-4 rounded-full bg-[#C13C37] inline-block"></div>
                            <p className="text-sm mt-1">Booked</p>
                        </div>
                        <div className="text-center">
                            <div className="w-4 h-4 rounded-full bg-[#6A2135] inline-block"></div>
                            <p className="text-sm mt-1">Sold</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
