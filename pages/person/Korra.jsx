const Korra = () => {
  return (
    <div>
      <div className="container">Person</div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  console.log("🔥🔥🔥", params);
  return {
    props: {},
  };
};

export default Korra;
