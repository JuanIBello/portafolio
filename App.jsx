import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const addUser = () => {
    setUsers([...users, { id: Date.now(), name }]);
    setName("");
  };

  return (
    <div>
      <h1>Usuarios</h1>

      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Nombre"
      />
      <button onClick={addUser}>Agregar</button>

      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
