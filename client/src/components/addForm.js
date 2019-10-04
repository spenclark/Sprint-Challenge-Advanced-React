import { useInput } from '../hooks/useInput';
import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function SignupForm() {
  const [name, handleName, setName] = useInput('Name:', '');
  const [country, handleCountry, setCountry] = useInput('Country', '');
  
  const handleSubmit = e => {
    e.preventDefault();
  };

  const clearForm = e => {
    e.preventDefault();
    setName('');
    setCountry('');
  };

  return (
    <div p={2} className="form">

      <form onSubmit={handleSubmit}>
 
          <legend>Request New Player</legend>
          <TextField

            label="Player Name"
            className="textField"
            value={name}
            onChange={handleName}
            margin="normal"

          />
          <TextField
           
            label="Player Country"
            className="textField"
            value={country}
            onChange={handleCountry}
            margin="normal"

          />
          <button color="blue" type="submit">
            Submit
          </button>
          <button color="red" onClick={clearForm}>
            Clear
          </button>
          

      </form>
    </div>
  );
}
