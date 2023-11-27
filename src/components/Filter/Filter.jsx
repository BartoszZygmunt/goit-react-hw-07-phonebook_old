// Filter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilter } from '../../redux/store';
import './Filter.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="filter-container">
      <h2>Filter</h2>
      <input
        type="text"
        placeholder="Search"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

Filter.propTypes = {
  children: PropTypes.node,
};

export default Filter;
