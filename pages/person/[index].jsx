const Person = ({ person }) => {
  return (
    <div className="container profile">
      <h1>Profile</h1>
      <h2>Name: {person.name}</h2>
      <p className="occ">Occupation: {person.occupation}</p>

      <div className="description">
        <p>{person.description.split("? ")[0]}</p>
        <p>{person.description.split("? ")[1]}</p>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const person = await fetch(
    `http://localhost:3002/people/?name=${params.index.replace(/\-/g, "+")}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.log({ error }));

  return {
    props: { person: person[0] },
    revalidate: 2,
  };
};

export const getStaticPaths = async () => {
  const people = await fetch("http://localhost:3002/people")
    .then((res) => res.json())
    .catch((error) => console.log({ error }));

  const paths = people.map((item) => {
    return {
      params: { index: item.name.replace(/ /g, "-") },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Person;
