// 여기서 사용할 모듈 : express path

// 🔷 path
    // path 는 내장모듈 
    // path 모듈은 경로에 대한 조작을 도와주는 모듈
    // 상대경로, 절대경로, 파일 시스템의 경로들을 설정할 수 있도록, 도와주는 모듈
    // 상대경로나, 절대경로를 쉽게 연결할 수 있도록, 메서드를 지원함. 
    // 상대경로는 해당 파일의 위치 부터, 절대경로는 루트의 경로 부터. 


// 🔷 express 서버 만들자~ 하면 이게 나와야 함 👇 
        const express = require("express");
        const path = require("path");   // 모듈 가져오기 
        // 서버 인스턴스 생성 
        const app = express();     


        // GET방식 | GET 방식 요청에서 데이터를 가져오는 메서드
            // 이 경로(url)로 요청을 하면, 
        app.get('/' , (req, res) => {
            // 루트경로에 대한 처리 (첫번째 인자로 / 를 넣어줬음.)
            
            // join 메서드는 전달받은 경로를 합쳐주는 동작을 해줌
            const body = path.join(__dirname, "views" , "index.html")
                // 프로젝트가 있는 위치까지, 절대경로 > views 폴더 > index.html 로 접근 
                // 그리고, 이 경로들을 '합쳐준다.' 

            // 파일까지 경로 만들어주고, 
            console.log(body);
            // res.send("");
                // packjson index 를 2번으로 바꾸고~

            // sendFile : html 파일을 브라우저로 보내줌. 브라우저에서 읽을 수 있도록
            res.sendFile(body);
                // 경로까지 html 보내서, 파일이 읽혀짐. 

        })

        // 대기 상태
        app.listen(3000, () => {    
            console.log("서버열림")
        })



// 🔷 직접 list 페이지, 마이페이지, 확인 가능하도록, 라우팅 설정

        // GET방식 | list 페이지 보여주기 
            app.get('/list' , (req, res) => {   // list 경로 처리
                // 파일을 가져오는데, path.join 메서드를 사용해서 파일을 가져온다. 
                const body = path.join(__dirname, "views" , "list.html")
                // 가져온 파일까지 경로 만들어주고, 
                    // c\sdalkdfj\vew
                // console.log(body);
                // res.send("");
                    // packjson index 를 2번으로 바꾸고~ ❓❓
    
                // sendFile : html 파일을 브라우저로 보내줌. 브라우저에서 읽을 수 있도록
                res.sendFile(body);
                    // 브라우저로 파일을 보내준다. 
                    // 접속하면, 해당 경로에 있는 파일을 보낸다. 
                
            })

        // GET 방식 | 마이 페이지 보여주기 
            app.get('/mypage' , (req, res) => { // 루트경로에 대한 처리 (첫번째 인자로 / 를 넣어줬음.)                
                // join 메서드는 전달받은 경로를 합쳐주는 동작을 해줌
                const body = path.join(__dirname, "views" , "mypage.html")
                    
                // 파일까지 경로 만들어주고, 
                console.log(body);
                // res.send("");
                    // packjson index 를 2번으로 바꾸고~ ❓❓

                // sendFile : html 파일을 브라우저로 보내줌. 브라우저에서 읽을 수 있도록
                res.sendFile(body);
            })

// 요청에 대해서, 라우터를, 나눠줄 수 있음. ⭐⭐⭐ 