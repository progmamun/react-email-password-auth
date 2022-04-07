import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from 'react';
import './App.css';
import app from './firebase.init';

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  };
  const handleFormSubmit = event => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      });
    event.preventDefault();
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-white">
        <div className="p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-3">
          <div className="py-8">
            <img
              className="-mt-10 w-8"
              src="https://www.paypalobjects.com/images/shared/momgram@2x.png"
            />
          </div>
          <form action="" onSubmit={handleFormSubmit}>
            <input
              onBlur={handleEmailBlur}
              className="p-3 border-[1px] border-slate-500 rounded-sm w-80"
              placeholder="E-Mail or Phone number"
              type="email"
            />
            <div className="flex flex-col space-y-1">
              <input
                onBlur={handlePasswordBlur}
                className="p-3 border-[1px] border-slate-500 rounded-sm w-80"
                placeholder="Password"
                type="password"
              />
              <p className="font-bold text-[#0070ba]">Forgot password?</p>
            </div>
            <div className="flex flex-col space-y-5 w-full">
              <button className="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]">
                Log in
              </button>
              <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
                <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
              </div>
              <button className="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-3 text-[#0070ba] font-bold transition duration-200">
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex space-x-1 p-20 text-sm">
            <p className="hover:underline cursor-pointer">Bangla</p>
            <div className="border-r-[1px] border-r-slate-300"></div>
            <p className="font-bold hover:underline cursor-pointer">English</p>
          </div>
        </div>

        <div className="absolute bottom-0 w-full p-3 bg-[#F7F9FA] flex justify-center items-center space-x-3 text-[14px] font-medium text-[#666]">
          <a
            href="https://www.paypal.com/us/smarthelp/contact-us"
            target="_blank"
            className="hover:underline underline-offset-1 cursor-pointer"
          >
            Contact Us
          </a>
          <a
            href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full"
            target="_blank"
            className="hover:underline underline-offset-1 cursor-pointer"
          >
            Privacy
          </a>
          <a
            href="https://www.paypal.com/de/webapps/mpp/ua/legalhub-full"
            target="_blank"
            className="hover:underline underline-offset-1 cursor-pointer"
          >
            Legal
          </a>
          <a
            href="https://www.paypal.com/de/webapps/mpp/ua/upcoming-policies-full"
            target="_blank"
            className="hover:underline underline-offset-1 cursor-pointer"
          >
            Policy{' '}
          </a>
          <a
            href="https://www.paypal.com/de/webapps/mpp/country-worldwide"
            target="_blank"
            className="hover:underline underline-offset-1 cursor-pointer"
          >
            Worldwide{' '}
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
