import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllTask } from "./api/taskApi";
import type { task } from "./type/Task";

function App() {
  const navigate = useNavigate();
  const [taskList, setTaskList] = useState<task[]>([]);

  //初回レンダリング時に関数実行
  useEffect(() => {
    const loadTask = async () => {
      const data = await getAllTask();
      setTaskList(data);
    };

    loadTask();
  }, []);

  return (
    <>
      <div id="head">
        <h1>ヘッダー</h1>
      </div>
      <div id="contain">
        <div className="taskList">
          <h1>タスク一覧</h1>
          <button type="button" onClick={() => navigate("/regist")}>
            新規登録
          </button>
          {taskList.filter((task) => !task.compflg && !task.delflg).length ==
          0 ? (
            <>
              <p>未完了タスクはありません</p>
            </>
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>タイトル</th>
                    <th>コンテンツ</th>
                    <th>登録日</th>
                    <th>更新日</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {taskList
                    .filter((task) => !task.compflg && !task.delflg)
                    .map((task) => {
                      return (
                        <tr key={task.id}>
                          <td>
                            <Link to={`/detail/${task.id}`}>{task.title}</Link>
                          </td>
                          <td>{task.content}</td>
                          <td>
                            {task.newdate} {task.newtime}
                          </td>
                          <td>{task.upddate}</td>
                          <td>
                            <button>完了ボタン</button>
                          </td>
                          <td>
                            <button>削除ボタン</button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </>
          )}
        </div>
        <div className="compTaskList">
          <h1>完了タスク一覧</h1>
          {taskList.filter((task) => task.compflg && !task.delflg).length ==
          0 ? (
            <>
              <p>完了タスクはありません</p>
            </>
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>タイトル</th>
                    <th>コンテンツ</th>
                    <th>登録日</th>
                    <th>更新日</th>
                  </tr>
                </thead>
                <tbody>
                  {taskList
                    .filter((task) => task.compflg && !task.delflg)
                    .map((task) => {
                      return (
                        <tr key={task.id}>
                          <td>{task.id}</td>
                          <td>{task.title}</td>
                          <td>{task.content}</td>
                          <td>
                            {task.newdate} {task.newtime}
                          </td>
                          <td>{task.upddate}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
