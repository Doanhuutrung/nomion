import React, { useState, useEffect } from 'react';

const LikeButton = () => {
  const [clickCount, setClickCount] = useState("");
  
  useEffect(() => {
    // Lấy giá trị lượt click từ localStorage nếu có
    const storedClickCount = localStorage.getItem(0);
    if (storedClickCount) {
      setClickCount(parseInt(storedClickCount));
    }
    // Lưu giá trị lượt click vào localStorage mỗi khi clickCount thay đổi
    localStorage.setItem('clickCount', clickCount.toString());
  }, []);

  const handleLike = (e) => {
    e.preventDefault();
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>Thích</button>
      <p>Số lượt click: {clickCount}</p>
    </div>
  );
};

export default LikeButton;