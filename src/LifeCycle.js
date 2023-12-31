import React, { useEffect, useState } from "react";

const UnMountTest = () => {
  useEffect(() => {
    console.log("Sub Component Mount");
    return () => {
      console.log("Sub Component Unmount");
    };
  }, []);
  return <div>UN MOUNT TEST</div>;
};

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  // 마운트
  useEffect(() => {
    console.log("Mount!");
  }, []);
  // 업데이트
  useEffect(() => {
    console.log("Update!");
  });

  // [] 값에 이벤트가 밸생하면 호출
  useEffect(() => {
    console.log(`count is update : ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`text is update : ${text}`);
  }, [text]);

  return (
    <div>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>count up</button>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button onClick={toggle}>ON/OFF BUTTON</button>
        {!isVisible && <UnMountTest />}
    </div>
  );
};

export default LifeCycle;
