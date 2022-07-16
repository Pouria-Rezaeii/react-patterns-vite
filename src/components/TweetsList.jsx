export default function TweetsList(props) {
  return (
    <div className="tweets_list-section">
      <h4>{props.title}</h4>
      {props.items.map((item, index) => (
        <p key={index}>{item.text}</p>
      ))}
    </div>
  );
}
