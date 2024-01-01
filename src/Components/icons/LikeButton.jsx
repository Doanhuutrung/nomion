import React, { useState, useEffect } from 'react';

const LikeButton = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const storedClickCount = localStorage.getItem('clickCount');
    if (storedClickCount) {
      setClickCount(parseInt(storedClickCount));
    }
    
    const handleBeforeUnload = () => {
      localStorage.setItem('clickCount', clickCount.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [clickCount]);

  const incrementClickCount = () => {
    setClickCount(clickCount + 1);
    
  };

  return (
    <div>
      <button onClick={incrementClickCount}>Thích</button>
      <p>Số lượt click: {clickCount}</p>
    </div>
  );
};

export default LikeButton;