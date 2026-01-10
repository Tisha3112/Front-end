function UserList() {
  const users = [
    { id: 1, name: "Tisha" },
    { id: 2, name: "charmi" },
    { id: 3, name: "poonam" },
    { id: 4, name: "monika" }
  ];

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
