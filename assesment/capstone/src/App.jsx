import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>User Management</h1>
      </header>

      <UserForm />
      <UserTable />
    </div>
  );
};

export default App;