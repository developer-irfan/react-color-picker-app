import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export default function App() {
  const [colors] = useState([
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "##2c3e50",
    "#8e44ad",
    "#2c3e50",
    "#f1c40f",
    "#e67e22",
    "#e74c3c",
    "#c0392b",
  ]);

  //pickFun
  const pickFun = (e) => {
    const pickColor = e.target.innerText;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(pickColor);
      navigator.clipboard.readText();
      toast.success(`You Picked ${pickColor} color successfully`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  //return statment
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {colors.map((color) => (
        <div
          key={color}
          style={{
            background: color,
            width: "25%",
            height: "200px",
            color: "white",
            fontSize: "22px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div onClick={pickFun}>{color}</div>
        </div>
      ))}
    </div>
  );
}
