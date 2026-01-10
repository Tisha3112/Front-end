function FruitList() {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default FruitList;
