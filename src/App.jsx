import { useState } from 'react';
import './App.css';

function App() {
  const [hex, setHex] = useState('');
  const [result, setResult] = useState('');
  const [bgColor, setBgColor] = useState('#34495e'); 

  const hexToRgb = (hexCode) => {
    const regex = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const match = regex.exec(hexCode);
    
    return match
      ? `rgb(${parseInt(match[1], 16)}, ${parseInt(match[2], 16)}, ${parseInt(match[3], 16)})`
      : null;
  };

  const handleChange = (e) => {
    let { value } = e.target;
    if (value.length > 7) {
      value = value.slice(0, 7);
    }
    
    setHex(value);
    if (value.length === 7) {
      const rgbValue = hexToRgb(value);
      
      if (rgbValue) {
        setResult(rgbValue);
        setBgColor(value); 
      } else {
        setResult('Ошибка!');
        setBgColor('#e74c3c'); 
      }
    } else {
      setResult('');
    }
  };

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <div className="converter">
        <input
          type="text"
          value={hex}
          onChange={handleChange}
          placeholder="#34495e"
        />
        <div className="result-box">
          {result}
        </div>
      </div>
    </div>
  );
}

export default App;