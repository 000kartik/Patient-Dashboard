import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import BPChart from "./components/Chart";

function App() {
  const [patient, setPatient] = useState(null);

useEffect(() => {
  fetch("https://fedskillstest.coalitiontechnologies.workers.dev/", {
    headers: {
      Authorization: "Basic " + btoa("coalition:skills-test")
    }
  })
    .then(res => res.json())
    .then(data => {
      // console.log("API DATA:", data);

      const jessica = data.find(
        p => p.name === "Jessica Taylor"
      );

      // console.log("Jessica:", jessica);

      setPatient(jessica);
    })
    .catch(err => console.log(err));
}, []);

  if (!patient) return <h2>Loading...</h2>;

 return (
  <div style={{ textAlign: "center" }}>
    <h1>Patient Dashboard</h1>

    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "40px"
    }}>
      <Profile patient={patient} />
      <BPChart patient={patient} />
    </div>
  </div>
);
}

export default App;