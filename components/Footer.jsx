export const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <div className="container">
        <p>&copy; {date.getFullYear()}. All rights reserved</p>
      </div>
    </footer>
  );
};
