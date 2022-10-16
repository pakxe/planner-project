import React from "react";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");

  // slice(-2)는 배열의 끝 2개를 순서 그대로 뽑아오는 것. 012 이면 12이고 12면 12 그대로..

  const handleDate = (e) => {
    console.log(e.target);
  };

  const changeTask = (e) => {
    console.log(e.target.value); // e.target.value는 이 이벤트가 일어난 곳에 입력된 것.
    setTask(e.target.value);
  };
  return (
    <>
      <form name="planner" method="get" autoComplete="on">
        <input type="datetime-local" onChange={handleDate} />
        <input
          type="text"
          name="done"
          value={task}
          onChange={changeTask}
          placeholder="한시간동안 뭐했니"
        />
        <select name="categories" required>
          <option value="">어떤 일을 했니</option>
          <option value="myStudy">💛: 내 공부</option>
          <option value="schoolStudy">🧡: 학교 공부</option>
          <option value="SelfDevelopment">💚: 자기 계발</option>
          <option value="business">💙: 사업</option>
          <option value="rest">💜: 휴식</option>
          <option value="wasteOfTime">🖤: 시간 낭비</option>
          <option value="appointment">❤️: 약속</option>
        </select>
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
