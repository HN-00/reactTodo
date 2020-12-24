import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "iiii"]);
  const [completeTodos, setCompleteTodos] = useState(["uuuu", "eeee"]);
  return (
    <>
      {/* 追加ーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
      <div className="input-area">
        <input placeholder="TODOを入力" type="text" />
        <button>追加</button>
      </div>
      {/* 未完了ーーーーーーーーーーーーーーーーーーーーーーーーーー */}
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      {/* 完了ーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
      <div class="complete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
