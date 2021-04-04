import React, { useState } from 'react';

const Root = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      Hello
      <span onClick={() => setCount(count + 1)}>{count}</span>
    </div>
  );
};

export default Root;
