package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.TaskMngTbl;
import com.example.demo.mapper.TaskMapper;


@RestController
@RequestMapping("/tasks")
public class TaskMngController {

    @Autowired
    private TaskMapper taskmapper;

    //全件取得
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<TaskMngTbl> getAllTasks() {

        //TaskMngTblより全件取得
        List<TaskMngTbl> taskList = taskmapper.findAllTask();

        //取得したリストを返却
        return taskList;
    }

    //新規登録
    @RequestMapping(value = "/regist", method = RequestMethod.POST)
    public String putTask(@RequestBody TaskMngTbl task) {

        //TaskMngTblに新規登録
        taskmapper.registTask(task);

        return "登録完了しました";
    }

    //1件更新
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public String updateTask(@RequestBody TaskMngTbl task) {

        //TaskMngTblのタスクを1件更新
        taskmapper.updateTask(task);

        return "更新完了しました";
    }

    //1件削除
    @RequestMapping(value = "/delete", method = RequestMethod.GET)
    public String deleteTask(@PathVariable("id") Integer id) {

        //TaskMngTblのタスクを1件削除
        taskmapper.deleteTask(id);

        return "削除完了しました";
    }

    //1件取得
    @RequestMapping(value = "/select", method = RequestMethod.GET)
    public TaskMngTbl getOneTask(@PathVariable("id") Integer id) {

        //idをもとに1件タスクを取得
        TaskMngTbl task = taskmapper.findOne(id);

        //取得したタスクを返却
        return task;
    }

}
