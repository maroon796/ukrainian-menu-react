import React from 'react';

const Categories = ({ filterItems }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filterItems('усе меню')}>
        усе меню
      </button>
      <button className="filter-btn" onClick={() => filterItems('обід')}>
        обід
      </button>
    </div>
  );
};

export default Categories;
