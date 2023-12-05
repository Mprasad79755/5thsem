import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState('none');
  const [selectedBranch, setSelectedBranch] = useState('none');

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || phone ==='') {
      alert('Please enter all the fields');
    } else {
      setSubmitted(true);
    }
  };

  const successMessage = () => {
    if (submitted) {
      return (
        <form>
        <h3>Student Profile</h3>
        <p>Name: <span id="pname">{name}</span></p>
        <p>Email: <span id="pemail">{email}</span></p>
        <p>Phone: <span id="pphone">{phone}</span></p>
        <p>Semester: <span id="psem">{selectedSemester}</span></p>
        <p>Branch: <span id="pbranch">{selectedBranch}</span></p>


        </form>
      );
    }
  };

  return (
    <div className="form">

      {/* Calling to the methods */}
      <div className="messages">{successMessage()}</div>
      {/* Conditionally render the form or success message */}
      {!submitted && (
        <form>
                <div>
        <h1>User Registration</h1>
      </div>
          {/* Labels and inputs for form data */}
          <label className="label">Name</label>
          <input onChange={handleName} className="input" value={name} type="text" />
          <br></br>
          <label className="label">Email</label>
          <input onChange={handleEmail} className="input" value={email} type="email" />
          <br></br>

          <label className="label">Phone Number</label>
          <input onChange={handlePhone} className="input" value={phone} type="number" />
          <br></br>
          <label htmlFor="sem">Semester</label>
      <select id="sem" value={selectedSemester} onChange={handleSemesterChange}>
        <option value="none" disabled>
          Select your semester
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <br></br>
      <label htmlFor="branch">Branch</label>
      <select id="branch" value={selectedBranch} onChange={handleBranchChange}>
        <option value="none" disabled>
          Select your branch
        </option>
        <option value="cs">CS</option>
        <option value="ec">EC</option>
        <option value="ee">EE</option>
        <option value="mech">Mech</option>
        <option value="civil">Civil</option>
      </select>
      <br></br>
          <label className="label">Password</label>
          <input onChange={handlePassword} className="input" value={password} type="password" />
          <br></br>
          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
