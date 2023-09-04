import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="login-form">
      <fieldset className="login-form__details">
        <input
          placeholder="Enter your email..."
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          placeholder="Enter a password..."
          type="password"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <button type="submit">Sign up</button>
      </fieldset>
    </form>
  );
}
