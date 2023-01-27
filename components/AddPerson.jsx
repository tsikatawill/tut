import { useRouter } from "next/router";
import { useState } from "react";

export const AddPerson = () => {
  const emptyPerson = {
    name: "",
    occupation: "",
    description: "",
  };
  const [person, setPerson] = useState(emptyPerson);
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:3002/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });

    if (res.ok) {
      alert("Submitted successfully");
      setPerson(emptyPerson);
      router.reload();
    } else {
      alert("We could'nt submit your information");
    }

    console.log("🔥🔥", res);
  };
  return (
    <section className="add-person">
      <h2>Add Person</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            required
            value={person.name}
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
            type="text"
            id="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation</label>
          <input
            required
            value={person.occupation}
            onChange={(e) =>
              setPerson({ ...person, occupation: e.target.value })
            }
            type="text"
            id="occupation"
            placeholder="Enter occupation"
          />
        </div>
        <div className="form-group description">
          <label htmlFor="description">Description</label>
          <textarea
            required
            name="description"
            value={person.description}
            onChange={(e) =>
              setPerson({ ...person, description: e.target.value })
            }
            placeholder="Enter description"
            id="description"
            rows="10"
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
};
