import React from 'react';
import { data } from '../data/tweets';
import FilterComponent from './FilterComponent';
import TweetsList from './TweetsList';

export default function Tweets() {
  const [filterText, setFilterText] = React.useState('');
  const [isLocal, setIsLocal] = React.useState(false);

  let tweets = data;
  if (isLocal) {
    tweets = tweets.filter((item) => item.isLocal);
  }
  if (filterText) {
    tweets = tweets.filter((item) => item.text.includes(filterText));
  }

  const twoDimensionalData = tweets.reduce((acc, item) => {
    !acc.hasOwnProperty(item.category)
      ? (acc[item.category] = [item])
      : acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="tweets">
      <FilterComponent
        filterText={filterText}
        onChangeSearchText={setFilterText}
        isLocal={isLocal}
        onChangeIsLocal={setIsLocal}
      />
      <div className="tweets_list">
        {!tweets.length && <h4 style={{ marginTop: '2rem' }}>No Result!</h4>}
        {Object.keys(twoDimensionalData).map((category) => (
          <TweetsList
            key={category}
            title={category}
            items={twoDimensionalData[category]}
          />
        ))}
      </div>
    </div>
  );
}
