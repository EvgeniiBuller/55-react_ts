/* eslint-disable @typescript-eslint/no-unused-vars */



interface Inp {
    placeholder?: string;
    name?: string;
  }
  
 const Input: React.FC<Inp> = ({ placeholder, name }) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        style={{
          padding: '10px',
          border: '5px solid rgb(236, 240, 219)',
          borderRadius: '4px',
          margin: '5px',
          width: '500px',
          cursor: '5px pointer',
          background:'rgb(207, 228, 240)',
          color:' rgb(232, 15, 15)'
        }}
      />
    );
  };
  
  export default Input;


