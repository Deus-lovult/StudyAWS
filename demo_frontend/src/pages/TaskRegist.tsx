import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registTask } from "../api/taskApi";
import type { task } from "../type/Task";

const TaskRegist = () => {
  const navigate = useNavigate();

  //入力値を取得
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    //バリデーション
    if (title.trim() === "" || content.trim() === "") {
      alert("入力値をいれてください");
      return;
    }

    //登録日と時間取得
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    //それぞれのフォーマットに変換
    const yyyymmdd = y + m + d;
    const hhmmss = hours + minutes + seconds;

    //新規取得用のタイプ
    const newTask: task = {
      title,
      content,
      compflg: false,
      delflg: false,
      newdate: yyyymmdd,
      newtime: hhmmss,
      upddate: "00000000",
    };

    //登録用メソッド
    await registTask(newTask);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>タイトル : </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>内容：</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">登録する</button>
      </form>
      <button onClick={() => navigate("/")}>メイン画面に戻る</button>
    </>
  );
};

export default TaskRegist;
