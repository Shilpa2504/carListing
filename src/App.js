
import React, { useState } from 'react';
import Card from './components/Card';


function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <div className="container bg-slate-200">
        <div className="container align-center py-7">
          <h2 className="text-center font-semibold text-5xl" style={{ margin: '20px 0px', marginTop: '30px' }}>
            Featured Listed Car
          </h2>
          <h6 className="text-center font-semibold text-1xl" style={{ margin: '0px 20px', marginTop: '20px' }}>
            Lorem, Libero doloremque, quae expedita nobis numquam accusantium. Corporis?
          </h6>
        </div>
        <div className="container mb-4 ">
        <Card searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}

export default App;
