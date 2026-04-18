import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneTask, putOneTask } from "../api/taskApi";
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

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    //登録日と時間取得
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");

    //それぞれのフォーマットに変換
    const yyyymmdd = y + m + d;

    //新規取得用のタイプ
    const newTask: task = {
      id: parseInt(id!),
      title: title,
      content: content,
      compflg: false,
      delflg: false,
      newdate: "",
      newtime: "",
      upddate: yyyymmdd,
    };

    //更新メソッド
    await putOneTask(newTask);
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
