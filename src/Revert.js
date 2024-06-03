import React, { useState, useEffect } from 'react';

const Revert = ({ s }) => {
  const [revertedString, setRevertedString] = useState(s);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRevertedString((prevString) => {
        const lastChar = prevString.charAt(prevString.length - 1);
        const substring = prevString.slice(0, -1);
        return lastChar + substring;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [s]);

  return <div>{revertedString}</div>;
};

export default Revert;