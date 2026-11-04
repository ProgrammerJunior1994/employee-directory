import React from "react";

function Usuarios({ user }) {
  const nombre = `${user.name.first} ${user.name.last}`;
  const iniciales = `${user.name.first[0]}${user.name.last[0]}`;

  return (
    <article className="employee-card">
      <div className="card-top">
        <img className="avatar" src={user.picture.large} alt={`Foto de ${nombre}`} />
        <span className="status"><span />Activo</span>
      </div>
      <h2>{nombre}</h2>
      <p className="role">{user.name.title} · Equipo general</p>
      <div className="contact-list">
        <p><span aria-hidden="true">✉</span><a href={`mailto:${user.email}`}>{user.email}</a></p>
        <p><span aria-hidden="true">♧</span>{user.phone}</p>
        <p><span aria-hidden="true">⌖</span>{user.location.country}</p>
      </div>
    </article>
  );
}

export default Usuarios;
