import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, seteEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password });
  };
  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            required
          />

          <input
            type="email"
            className="form-control mb-4 p4"
            value={email}
            onChange={(e) => setNEmail(e.target.value)}
            placeholder="Email"
            required
          />

          <input
            type="password"
            className="form-control mb-4 p4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </form>
      </h1>
    </>
  );
};

export default Register;
