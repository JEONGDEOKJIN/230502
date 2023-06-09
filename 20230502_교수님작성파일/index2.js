// 여기서 사용할 모듈 express path
// path는 내장모듈 
// path 모듈은 경로에 대한 조작을 도와주는 모듈
// 파일 시스템의 경로들을 상대경로나 절대경로 설정 할수 있도록 도와주는 모듈
// 상대경로나 절대경로를 쉽게 연결할수있도록 메서드를 지원해준다.

const express = require("express");
const path = require("path");
// 서버 인스턴스 생성
const app = express();

// get 방식 요청해서 데이터를 가져오는 메서드
// get 방식으로 / url로 요청을 하면
app.get('/',(req,res)=>{ // 루트 경로의 처리
    // join 메서드가 전달받은 경로를 합쳐주는 동작을 해줌
    const body = path.join(__dirname, "views" , "index.html");
    // 파일까지의 경로를 만들어주고
    console.log(body);
    console.log(__dirname);
    // res.send("");
    // sendFile : html 파일을 브라우저로 보내줌 브라우저에서 읽을수 있도록
    res.sendFile(body);
})

// 직접 리스트 페이지와
// 마이페이지 브라우저에서 확인 가능하도록 라우팅 설정하기
app.get("/list",(req,res)=>{ // /list 경로의 처리
    const body = path.join(__dirname, "views", "list.html");
    // 파일을 가져오는데 path.join 메서드를 사용해서
    // 경로를 만들어주고 가져올 파일의 경로
    // C\:SDFSDFSDFS/views/list.html

    // 브라우저로 파일 보내준다.
    res.sendFile(body);
})

app.get("/mypage", (req,res)=>{
    const body = path.join(__dirname, "views", "mypage.html");
    res.sendFile(body);
})

app.listen(3000,()=>{
    console.log("서버 열림");
})