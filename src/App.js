import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      {!isSignedIn ? (
        <SignIn setIsSignedIn={setIsSignedIn} />
      ) : (
        <SignedIn setIsSignedIn={setIsSignedIn} />
      )}
    </>
  );
};

// console.log(registrationType);

const SignedIn = ({ setIsSignedIn }) => {
  const [registrationType, setRegistrationType] = useState("");
  const [fetchedData, setFetchedData] = useState([]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    setIsSignedIn(false);
  };

  useEffect(() => {
    async function fetchData() {
      if (registrationType) {
        console.log("Registration type is assigned:", registrationType);
        // Perform your specific task here
        // For example, make an API call, fetch data, etc.
        const querySnapshot = await getDocs(collection(db, registrationType));
        const data = querySnapshot.docs.map((doc) => doc.data());
        const sortedData = data.map((obj) =>
          Object.fromEntries(Object.entries(obj).sort())
        );
        setFetchedData(sortedData);
      }
    }
    // Run your specific task here when registrationType is assigned
    fetchData();
  }, [registrationType]);

  return (
    <div>
      <h1>Welcome! You are signed in.</h1>
      <select
        value={registrationType}
        onChange={(e) => setRegistrationType(e.target.value)}
      >
        <option value="">-Select-</option>
        <option value="individual reistration">Individual Registration</option>
        <option value="Contingent reistration">Contingent Registration</option>
      </select>
      <button onClick={handleSignOut}>Sign Out</button>

      {fetchedData.length > 0 && (
        <div>
          <h2>Fetched Data:</h2>
          <table>
            <thead>
              <tr>
                {Object.keys(fetchedData[0]).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fetchedData.map((data, index) => (
                <tr key={index}>
                  {Object.values(data).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


const SignIn = ({ setIsSignedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setEmail("");
        setPassword("");
        setIsSignedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <h1>Please Sign In</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default App;
