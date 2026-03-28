function Profile({ patient }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "10px",
      width: "300px",
      margin: "20px auto",
      textAlign: "center"
    }}>
      <img
        src={patient.profile_picture}
        alt="profile"
        style={{ width: "100px", borderRadius: "50%" }}
      />

      <h2>{patient.name}</h2>

      <p><b>Age:</b> {patient.age}</p>
      <p><b>Gender:</b> {patient.gender}</p>
      <p><b>DOB:</b> {patient.date_of_birth}</p>
      <p><b>Phone:</b> {patient.phone_number}</p>
      <p><b>Insurance:</b> {patient.insurance_type}</p>
    </div>
  );
}

export default Profile;