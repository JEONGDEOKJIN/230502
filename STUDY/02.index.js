// 여기에서 사용할 모듈 : express, path 

// 🔷 path 
    // path 는 내장모듈 
    // path 모듈은 '경로에 대한 조작'을 도와주는 모듈
    // 상대경로, 절대경로, 파일 시스템의 경로들을 설정할 수 있도록, 도와주는 모듈
    // 상대경로나, 절대경로를 쉽게 연결할 수 있도록, 메서드를 지원함. 
    // 상대경로는 해당 파일의 위치 부터, 절대 경로는 루트 경로 부터

// 🔷 express
    // 서버 객체 생성하기 위한 모듈
    const express = require("express");
    // 경로
    const path = require("path")