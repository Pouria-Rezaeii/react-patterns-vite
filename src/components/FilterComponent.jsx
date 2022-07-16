import React from 'react';

export default function FilterComponent(props) {
  return (
    <div className="tweets_filter-box">
      <label>
        <input
          type="text"
          value={props.filterText}
          onChange={(e) => props.onChangeSearchText(e.target.value)}
          placeholder="Search between tweets..."
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={props.isLocal}
          onChange={(e) => props.onChangeIsLocal(e.target.checked)}
        />{' '}
        Only show tweets in my local.
      </label>
    </div>
  );
}
