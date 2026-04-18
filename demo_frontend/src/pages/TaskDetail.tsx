import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneTask } from "../api/taskApi";
import type { task } from "../type/Task";

const TaskDetail = () => {
  //URLからパラメータを取得
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  //入力値を取得
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  //初回レンダリング時に関数実行
  useEffect(() => {
    const loadTask = async () => {
      const data: task = await getOneTask(Number(id));
      console.log("data=" + data);
      setTitle(data.title);
      setContent(data.content);
    };

    loadTask();
  }, [id]);

  const handleSubmit = async () => {};

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
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">更新する</button>
      </form>
      <button onClick={() => navigate("/")}>メイン画面に戻る</button>
    </>
  );
};

export default TaskDetail;
