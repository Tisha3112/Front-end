function UserCard(props) {
  return (
    <div style={cardStyle}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  padding: "15px",
  width: "250px",
  borderRadius: "8px"
};

export default UserCard;
