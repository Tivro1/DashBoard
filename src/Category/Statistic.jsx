import { FaChartBar, FaHome, FaUserAlt, FaBuilding } from "react-icons/fa";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Registering chart components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const Statistic = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Properties Sold',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Statistics Overview</h2>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Properties Sold */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-md">
                    <div className="text-white">
                        <h3 className="text-xl font-semibold">Properties Sold</h3>
                        <p className="text-3xl font-bold">56</p>
                    </div>
                    <FaHome className="text-white text-4xl" />
                </div>
                {/* Total Properties */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md">
                    <div className="text-white">
                        <h3 className="text-xl font-semibold">Total Properties</h3>
                        <p className="text-3xl font-bold">120</p>
                    </div>
                    <FaBuilding className="text-white text-4xl" />
                </div>
                {/* Users */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500 to-lime-500 rounded-lg shadow-md">
                    <div className="text-white">
                        <h3 className="text-xl font-semibold">Users</h3>
                        <p className="text-3xl font-bold">34</p>
                    </div>
                    <FaUserAlt className="text-white text-4xl" />
                </div>
                {/* Pending Properties */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-md">
                    <div className="text-white">
                        <h3 className="text-xl font-semibold">Pending Properties</h3>
                        <p className="text-3xl font-bold">18</p>
                    </div>
                    <FaChartBar className="text-white text-4xl" />
                </div>
            </div>

            {/* Line Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Properties Sold Trend</h3>
                <Line data={data} options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Properties Sold Over Time',
                        },
                    },
                }} />
            </div>
        </div>
    );
};

export default Statistic;
