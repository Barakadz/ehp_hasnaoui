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
    <div style={styles.container}>
     <button style={styles.button}    onClick={downloadFiles} >
     <AiOutlineCloudDownload style={styles.icon} size={25} color="black" />

  <span>Notre politique Qalité</span>
</button>
    </div>
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
  },
  icon: {
    transform: "rotate(90deg)", // Rotates the icon by 30 degrees
  },
};

export default Qalite;
