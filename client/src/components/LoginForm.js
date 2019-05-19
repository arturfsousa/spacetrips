import React, { useState } from 'react';

function LoginForm({ handleLogin }) {
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleLogin({ variables: { email } });
  }

  function handleEmailChange(event) {
    const email = event.target.value.trim();
    setEmail(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="email"
          name="email"
          required
          placeholder="E-mail"
          onChange={handleEmailChange}
        />
      </p>
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginForm;
