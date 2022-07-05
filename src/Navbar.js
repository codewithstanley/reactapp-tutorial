import { useState } from "react";

const Count = () => {
  const [family, setFamily] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 30,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      age: 27,
    },
    {
      id: 3,
      firstName: "Jake",
      lastName: "Doe",
      age: 25,
    },
  ]);

  const handleFamilyChange = () => {
    console.log("New name");
  };

  return (
    <div>
      {family.map((person) => (
        <div key={person.id}>
          <h4>
            {person.firstName} {person.lastName}
          </h4>
          <p>I am {person.age} years old</p>
        </div>
      ))}
      {/* <p>Number: {count}</p>
      <button
        onClick={handleCount}
        style={{ fontSize: "14px", padding: "5px 20px" }}
      >
        add 1
      </button> */}
    </div>
  );
};

export default Count;
