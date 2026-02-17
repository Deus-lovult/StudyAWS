package com.example.demo.entity;

import lombok.Data;

@Data
public class TaskMngTbl {
    private Integer id;
    private String title;
    private String content;
    private Boolean delflg;
    private Boolean compflg;
    private String newdate;
    private String newtime;
    private String upddate;
}
