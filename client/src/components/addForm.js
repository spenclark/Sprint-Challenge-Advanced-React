import { useInput } from '../hooks/useInput';
import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function SignupForm() {
  const [username, handleUsername, setUsername] = useInput('username', '');
  const [email, handleEmail, setEmail] = useInput('email', '');
  const [password, handlePassword, setRole] = useInput('role', '');

  const handleSubmit = e => {
    e.preventDefault();
  };

  const clearForm = e => {
    e.preventDefault();
    setUsername('');
    setEmail('');
    setRole('');
  };

  return (
    <div p={2} className="form">

      <h2>Start Trading Crypto Currencies</h2>
      <p>All we need is an email!</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="Username"
            className="textField"
            value={username}
            onChange={handleUsername}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="email"
            className="textField"
            value={email}
            onChange={handleEmail}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="password"
            className="textField"
            value={password}
            onChange={handlePassword}
            margin="normal"
            variant="outlined"
          />
          <button color="blue" type="submit">
            Submit
          </button>
          <button color="red" onClick={clearForm}>
            Clear
          </button>
          
        </fieldset>
      </form>
    </div>
  );
}
