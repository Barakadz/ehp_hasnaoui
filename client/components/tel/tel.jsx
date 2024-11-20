import React from 'react';
import { BsTelephoneInbound } from "react-icons/bs";

const ChatBubble = () => {
  return (
    <div style={styles.container}>
    <a href='tel:048771441'>
    <div style={styles.bubble}>
        <BsTelephoneInbound color='white' size="24"/>
      </div>
        </a>  
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  },
  bubble: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'blue',  
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
};

export default ChatBubble;
