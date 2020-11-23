import React, { useState, useEffect } from 'react'

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth); // State 变量 3

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return width
}

function useFormInput(e) {
  const [value, setValue] = useState(e)
  return {
    value,
    onChange(e) {
      setValue(e.target.value)
    }
  }
}

function Form() {
  // const [name, setName] = useState('Mary');              // State 变量 1
  // const [surname, setSurname] = useState('Poppins');     // State 变量 2
  const name = useFormInput('Mary');
  const surname = useFormInput('Poppins');
  const width = useWindowWidth()

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  return (
    <div>
      {/* <input value={name} onChange={handleNameChange} />
      <input value={surname} onChange={handleSurnameChange} />
      <p>Hello, {name} {surname}</p> */}
      <input {...name} />
      <input {...surname} />
      <p>Window width: {width}</p>
    </div>
  );
}

export default Form