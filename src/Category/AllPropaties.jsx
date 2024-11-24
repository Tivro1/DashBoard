import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllPropaties = () => {
  const data = useLoaderData(); // Get data from loader

  // Get data from Local Storage
  const [properties, setProperties] = useState([]);
  let [filter, setFilter] = useState([]);
  const [displayfilter, setDisplayfilter] = useState(false);
  const [displayAll, setAlldisplayPropaties] = useState(true);

  useEffect(() => {
    // Fetch properties from localStorage when the component mounts
    const storedProperties = JSON.parse(localStorage.getItem('customers')) || [];
    setProperties(storedProperties);
  }, []);

  // Function to delete a property from localStorage
  const handleDelete = (index) => {
    const updatedProperties = properties.filter((_, i) => i !== index); // Remove the property at the given index
    setProperties(updatedProperties); // Update the state
    localStorage.setItem('customers', JSON.stringify(updatedProperties)); // Update localStorage
  };

  // Adding filter option
  const filterOption = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const num = parseInt(e.target.number.value); // Get the input number and convert to integer
    const propatiesType = e.target.text.value.trim().toLowerCase(); // Normalize input for case-insensitive comparison

    // Validate inputs
    if (!num || !propatiesType) {
      console.log("Please provide valid inputs for both price and property type.");
      return;
    }

    // Assuming `data` is your dataset
    const properties = data[0].properties;

    // Filter properties based on price and type
    const filteredProperties = properties.filter(
      (property) =>
        num <= property.price && propatiesType === property.type.toLowerCase()
    );

    if (filteredProperties.length > 0) {
      console.log("Filtered Properties:", filteredProperties);
      setFilter(filteredProperties); // Update the state with filtered properties
    } else {
      console.log("No matching properties found.");
      setFilter([]); // Clear the filter state if no matches found
    }
  };

  const handelDisplay = () => {
    setDisplayfilter(true);
  };
  const handelAllDisplay = () => {
    setAlldisplayPropaties(false);
  };
  const showAll = () => {
    setAlldisplayPropaties(true);
  };

  return (
    <div className="container mx-auto p-6 ">
      <h2 className="text-3xl font-bold text-center text-orange-300 mb-6">
        Available Properties
      </h2>
      {/* Filter option */}
      <div className="bg-transparent mb-3">
        <form onSubmit={filterOption} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 justify-center">
          <label className="input input-bordered w-full sm:w-[300px] flex items-center gap-2">
            <input
              type="number"
              name="number"
              className="grow p-2"
              placeholder="Price :"
            />
          </label>
          <label className="input input-bordered w-full sm:w-[300px] flex items-center gap-2">
            <input
              type="text"
              name="text"
              className="grow p-2 focus:bg-teal-100"
              placeholder="Properties Type :"
            />
          </label>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <button
              type="submit"
              onClick={() => {
                handelAllDisplay(), handelDisplay();
              }}
              className=" px-4 py-2 bg-transparent border-green-100 border text-white rounded shadow hover:bg-blue-600 w-full sm:w-auto"
            >
              Filter
            </button>
            <button
              className=" px-4 py-2 bg-transparent border-green-100 border text-white rounded shadow hover:bg-blue-600 w-full sm:w-auto"
              onClick={showAll}
            >
              Show All
            </button>
          </div>
        </form>
      </div>

      {/* After Filter div */}
      {displayfilter && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
          {filter.length > 0 ? (
            filter.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-out"
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {property.name}
                  </h3>
                  <p className="text-gray-600">{property.type}</p>
                  <p className="text-gray-600">Location: {property.location}</p>
                  <p className="text-lg font-bold text-green-500">
                    ${property.price}/month
                  </p>
                  <p
                    className={`text-sm mt-2 ${
                      property.status === "Available"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {property.status}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No properties found with the given criteria.</p>
          )}
        </div>
      )}

      {/* Properties Grid with Scroll */}
      <div className={!displayAll ? "hidden" : "overflow-auto max-h-[80vh]"}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data && data[0].properties ? (
            data[0].properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-out"
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {property.name}
                  </h3>
                  <p className="text-gray-600">{property.type}</p>
                  <p className="text-gray-600">Location: {property.location}</p>
                  <p className="text-lg font-bold text-green-500">
                    ${property.price}/month
                  </p>
                  <p
                    className={`text-sm mt-2 ${
                      property.status === "Available"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {property.status}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No properties available</p>
          )}
        </div>
      </div>

      {/* Displaying Properties from LocalStorage */}
      <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
          {properties.length > 0 ? (
            properties.map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-out"
              >
                {property.image && (
                  <img
                    src={property.image}
                    alt={property.propertyName}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-xl text-gray-800">
                    {property.propertyName}
                  </h3>
                  <p className="text-gray-600">Customer: {property.customerName}</p>
                  <p className="text-gray-600">Location: {property.location}</p>
                  <p className="text-lg font-bold text-green-500">
                    ${property.price}
                  </p>
                  <p
                    className={`text-sm mt-2 ${
                      property.status === "Available"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {property.status}
                  </p>
                  <button
                    onClick={() => handleDelete(index)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No saved properties</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllPropaties;
