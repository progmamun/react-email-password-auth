import { getAuth } from 'firebase/auth';
import './App.css';
import app from './firebase.init';

const auth = getAuth(app);

const handleEmailBlur = event => {
  console.log(event.target.value);
};
const handlePasswordBlur = event => {
  console.log(event.target.value);
};
const handleFormSubmit = event => {
  console.log('form submitted');
  event.preventDefault();
};

function App() {
  return (
    <div className="App">
      <form action="" onSubmit={handleFormSubmit}>
        <input onBlur={handleEmailBlur} type="email" name="" id="" />
        <input onBlur={handlePasswordBlur} type="password" name="" id="" />
      </form>
    </div>
  );
}

export default App;
