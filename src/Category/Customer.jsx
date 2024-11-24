import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const Customer = () => {
  // State to hold customer data
  const [customerName, setCustomerName] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [price, setPrice] = useState('');
  const [customers, setCustomers] = useState([]);

  // Load customers from localStorage on component mount
  useEffect(() => {
    const storedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
    setCustomers(storedCustomers);
  }, []);

  // Handle form submission and store data in localStorage
  const handleAddCustomer = () => {
    const newCustomer = {
      customerName,
      propertyName,
      imageURL,
      price,
    };

    const updatedCustomers = [...customers, newCustomer];
    setCustomers(updatedCustomers);
    localStorage.setItem('customers', JSON.stringify(updatedCustomers));

    // Clear form inputs after submission
    setCustomerName('');
    setPropertyName('');
    setImageURL('');
    setPrice('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Add Customer and Property Details
      </h2>

      {/* Form for adding customer and property details */}
      <div className="mb-6">
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Customer Name"
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          value={propertyName}
          onChange={(e) => setPropertyName(e.target.value)}
          placeholder="Property Name"
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          placeholder="Image URL"
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full p-4 mb-6 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleAddCustomer}
          className="w-full bg-blue-500 text-white p-4 rounded-lg font-semibold"
        >
          Add Customer
        </button>
      </div>

      {/* Display added customers with animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={customer.imageURL}
              alt={customer.propertyName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{customer.propertyName}</h3>
              <p className="text-gray-600">Customer: {customer.customerName}</p>
              <p className="text-lg font-bold text-green-500">${customer.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
