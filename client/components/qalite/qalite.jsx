import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Qalite = () => {
  const downloadFiles = () => {
    const files = [
      '/Politique QSE- EHPH AR.pdf',
      '/Politique QSE- EHPH FR.pdf',
      '/Politique QSE- EHPH EN.pdf'
    ];

    files.forEach(file => {
      const link = document.createElement('a');
      link.href = file;
      link.download = file.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
     <></>
  );
};

const styles = {
  container: {
    position: "fixed",
    left: "0",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1000,
  },
  button: {
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",
    background: "#f5f5f5",
    color: "#333",
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "8px 0px 0px 8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  },
  icon: {
    marginBottom: "8px",
  },
  text: {
    fontSize: "14px",
    textAlign: "center",
  },
  "@media (max-width: 768px)": {
    button: {
      fontSize: "14px",
      padding: "8px",
      borderRadius: "6px 0px 0px 6px",
    },
    icon: {
      size: "20px",
    },
    text: {
      fontSize: "12px",
    },
  },
  "@media (max-width: 480px)": {
    button: {
      fontSize: "12px",
      padding: "6px",
      borderRadius: "4px 0px 0px 4px",
    },
    icon: {
      size: "18px",
    },
    text: {
      fontSize: "10px",
    },
  },
};

export default Qalite;
