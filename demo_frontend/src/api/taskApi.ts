import type { task } from "../type/Task";
import { api } from "./api";

// 全件取得
export const getAllTask = async () => {
  const res = await api().get("/all");
  return res.data;
};

// 新規登録
export const registTask = async (taskdata: task) => {
  const res = await api().post("/regist", taskdata);
  return res;
};

// 1件取得
export const getOneTask = async (id: number) => {
  const res = await api().get(`/select/${id}`);
  return res.data;
};

// 1件更新
export const putOneTask = async (taskdata: task) => {
  const res = await api().post("/update", taskdata);
  return res;
};

// 1件削除
// 1件完了
export const compTask = async (id: number) => {
  const res = await api().post(`/comp/${id}`);
  return res;
};

// 完了タスク取得
// 未完了タスク取得
