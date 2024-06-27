const CoffeeType = ({ text, setpath }) => {
  return (
    <button
      onClick={(e) => setpath(text, e)}
      className="bg-primary px-4 py-1 rounded-full capitalize"
    >
      {text}
    </button>
  );
};

export default CoffeeType;
