import React, { useState, useEffect } from 'react';
import carData from './carData';
import CardItem from './CardItem';

const Card = () => {
  const perPage = 6; // Set the number of cards to display per page
  const [cPage, setCPage] = useState(1);
  const [searchQuery, setQuery] = useState('');

  // Calculate the start and end indexes for the cars to display
  const sIndex = (cPage - 1) * perPage;
  const eIndex = Math.min(sIndex + perPage, carData.length);

  // Filter the carData based on the search query
  const filterCars = carData.filter((car) =>
    car.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Slice the filtered cars array to get the cars for the current page
  const carsDisplay = filterCars.slice(sIndex, eIndex);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCPage(pageNumber);
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setQuery(query);
    setCPage(1); // Reset to the first page when searching
  };

  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: Math.ceil(filterCars.length / perPage) }, (_, index) => index + 1);

  return (
    <>
    <div className='container mb-5 bg-slate-200'>
      <div className="container my-5  rounded-full">
        <div className="row">
          <div className="col-md-4">
            <div className='flex gap-2 px-2 rounded-full  py-2 px-4 font-semibold'>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          {carsDisplay.map((car, index) => (
            <div className="col-md-4" key={car.index}>
              <CardItem brand={car.brand} price={car.price} carName={car.carName} description={car.description} imgUrl={car.imgUrl}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row text-center gap-2 m-auto p-4 absolute right-20">
  
    <ul className="pagination px-2">
      <li className={`page-item ${cPage === 1 ? 'disabled' : ''}`}>
        <button className="page-link rounded-full px-3  mr-3 py-2 bg-violet-300" onClick={() => handlePageChange(cPage - 1)}>
          Previous
        </button>
      </li>
      {pageNumbers.map((pageNumber) => (
        <li
          key={pageNumber}
          className={`page-item ${pageNumber === cPage ? 'active' : ''}`}
        >
          <button className="page-link rounded-1 px-3 py-2 mr-3 bg-violet-200" onClick={() => handlePageChange(pageNumber)}>
            {pageNumber}
          </button>
        </li>
      ))}
      <li className={`page-item ${cPage === Math.ceil(filterCars.length / perPage) ? 'disabled' : ''}`}>
        <button className="page-link rounded-full px-3 py-2 mr-3 bg-violet-300" onClick={() => handlePageChange(cPage + 1)}>
          Next
        </button>
      </li>
    </ul>
  
</div>
</div>
</div>
    </>
  );
};

export default Card;
