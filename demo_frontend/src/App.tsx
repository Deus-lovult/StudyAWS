import { useEffect, useState } from "react";
import { getAllTask } from "./api/taskApi";
import type { task } from "./type/Task";

function App() {

  const [taskList,setTaskList] = useState<task[]>([]);

  const loadTask = async () => {
    const data = await getAllTask();
    setTaskList(data);
  }

  //初回レンダリング時に関数実行
  useEffect(() => {loadTask()},[]);

  return (
    <>
      <div id="head">
        <h1>ヘッダー</h1>
      </div>
      <div id="contain">
        <div className="taskList">
          <h1>タスク一覧</h1>
          {taskList.filter(task => !task.compflg).length == 0 ?(
            <>
              <p>未完了タスクはありません</p>
            </>):(
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
                    {taskList.filter(task => !task.compflg).map(task => {
                      return (
                        <tr key={task.id}>
                          <td>{task.id}</td>
                          <td>{task.title}</td>
                          <td>{task.content}</td>
                          <td>{task.newdate}{task.newtime}</td>
                          <td>{task.updtime}</td>
                        </tr>
                      );
                      })}
                  </tbody>
                </table>
              </>)}
        </div>
        <div className="compTaskList">
          <h1>完了タスク一覧</h1>
        </div>
      </div>
    </>
  )
}

export default App;
