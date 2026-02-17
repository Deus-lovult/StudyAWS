package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.entity.TaskMngTbl;

@Mapper
public interface TaskMapper {

    //全件取得
    List<TaskMngTbl> findAllTask();

    //新規登録
    void registTask(TaskMngTbl task);

    //1件取得
    TaskMngTbl findOne(Integer id);

    //1件更新
    void updateTask(TaskMngTbl task);

    //1件削除
    void deleteTask(Integer id);

    //1件完了
    void completeTask(Integer id);

    //完了タスク取得
    List<TaskMngTbl> findCompTaskList();

    //未完了タスク取得
    List<TaskMngTbl> findUnCompTaskList();

}