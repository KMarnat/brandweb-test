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
          className="login-form__input"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Enter a password..."
          type="password"
          onChange={(e) => setEmail(e.target.value)}
          className="login-form__input"
        />

        <button type="submit" className="login-form__btn btn-secondary">
          Sign up
        </button>
      </fieldset>
    </form>
  );
}
