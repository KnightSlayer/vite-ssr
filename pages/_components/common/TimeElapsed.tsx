import React, {useEffect, useState} from "react";

function TimeElapsed() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return <>{count}</>;
}

export { TimeElapsed }
