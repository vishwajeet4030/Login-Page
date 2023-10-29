const Input = ({ className, type, handleChange, value,placeholder}) => {
  return (
    <>
    <input
      className={className}
      type={type}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
    
    </>
  );
};

export default Input;
