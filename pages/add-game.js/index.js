import { useState } from "react";

export default function AddGame() {
  const [formData, setFormData] = useState({
    name: "",
    prepare: "",
    howToPlay: "",
  });
  const [selectedCompany, setSelectedCompany] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCompany([...selectedCompany, value]);
    } else {
      setSelectedCompany(
        selectedCompany.filter((companion) => companion !== value)
      );
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <h3>What is the name of your game?:</h3>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="prepare">
        <h3>What to prepare:</h3>
      </label>
      <textarea
        id="prepare"
        name="prepare"
        value={formData.prepare}
        onChange={handleChange}
      />
      <label htmlFor="howToPlay">
        <h3>How to play:</h3>
      </label>
      <textarea
        id="howToPlay"
        name="howToPlay"
        width="100%"
        value={formData.howToPlay}
        onChange={handleChange}
      />
      <label htmlFor="rules">
        <h3>Rules:</h3>
      </label>
      <textarea
        id="rules"
        name="rules"
        value={formData.rules}
        onChange={handleChange}
      />
      <h3>Does one need company to play this game?</h3>
      <label>
        <input
          type="checkbox"
          value="red"
          checked={selectedCompany.includes("red")}
          onChange={handleCheckboxChange}
        />
        Nope, it is fun also alone
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="blue"
          checked={selectedCompany.includes("blue")}
          onChange={handleCheckboxChange}
        />
        One other person{" "}
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="green"
          checked={selectedCompany.includes("green")}
          onChange={handleCheckboxChange}
        />
        Three or more people
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="yellow"
          checked={selectedCompany.includes("yellow")}
          onChange={handleCheckboxChange}
        />
        Playable with a child or a very smart dog
      </label>

      <button type="submit">Sumbit This Game</button>
    </form>
  );
}
