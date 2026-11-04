import React from "react";
import { useEffect, useState } from "react";
import Usuarios from "./Usuarios";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const fetchEmployees = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://randomuser.me/api/?results=10");

      if (!response.ok) {
        throw new Error("No se pudieron obtener los empleados.");
      }

      const data = await response.json();
      setEmployees(data.results);
    } catch (error) {
      console.error("Error al obtener empleados:", error);
      setError("No fue posible cargar el directorio. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    return (
      fullName.includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.location.country.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <main className="container">
      <header className="page-header">
        <div>
          <p className="eyebrow">PERSONAL</p>
          <h1>Directorio de empleados</h1>
          <p className="subtitle">Consulta la información de contacto de tu equipo.</p>
        </div>
        <button className="refresh-button" type="button" onClick={fetchEmployees} disabled={loading}>
          <span aria-hidden="true">↻</span>
          Actualizar
        </button>
      </header>

      <section className="toolbar" aria-label="Controles del directorio">
        <div className="search-field">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Buscar por nombre, correo o país..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Buscar empleados"
          />
        </div>
        <div className="directory-count">
          <strong>{employees.length}</strong>
          <span>empleados registrados</span>
        </div>
      </section>

      {loading ? (
        <div className="message loading-state" role="status">
          <span className="spinner" aria-hidden="true" />
          <p>Cargando directorio...</p>
        </div>
      ) : error ? (
        <div className="message error-state" role="alert">
          <p>{error}</p>
          <button type="button" onClick={fetchEmployees}>Reintentar</button>
        </div>
      ) : filteredEmployees.length === 0 ? (
        <div className="message empty-state">
          <span aria-hidden="true">⌕</span>
          <p>No encontramos empleados con esa búsqueda.</p>
        </div>
      ) : (
        <section className="employee-grid">
          {filteredEmployees.map((user) => (
            <Usuarios key={user.login.uuid} user={user} />
          ))}
        </section>
      )}
    </main>
  );
}

export default App;
