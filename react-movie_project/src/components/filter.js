import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const handleTitleChange = (e) => {
    setFilter({ ...filter, title: e.target.value });
  };

  const handleRatingChange = (e) => {
    setFilter({ ...filter, rating: parseInt(e.target.value, 10) });
  };

  return (
    <div className="filter">
      <label>
        Title:
        <input
          type="text"
          value={filter.title}
          onChange={handleTitleChange}
          placeholder="Search by title"
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          value={filter.rating}
          onChange={handleRatingChange}
          min="0"
          max="10"
          placeholder="Min rating"
        />
      </label>
    </div>
  );
};

export default Filter;
