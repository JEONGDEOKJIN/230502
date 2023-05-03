// http 요청 응답을 좀 더 편하게 사용할 수 있는 모듈 

// express 
    // 이제, 이 놈만 쓸 것임! 
    // node.js 프레임워크 
    // http 요청과 응답을 쉽게 작성할 수 있도록 도와준다. 
    // 기본적인 기능만 포함하고 있어서, 자유도가 높음. 
    // 작성하는 사람의 입맛에 따라, 라우팅 미들웨어 등등, 개발자가 원하는 방식으로 구성할 수 있다. 
    // 본인만의 '보일러 플레이팅'이 가능

    // '보일러 플레이팅'
        // 반복적인 작업을 미리 써놓고, 개발의 생산성을 높이는 것. 
    
    // express 를 사용해보자 일단! 


// 🔷 express 설치

    // 설치 url : https://www.npmjs.com/package/express
    // npm i express
    // npm install express

    // npm init -y 부터 하는게 편함 ⭐⭐ 
        // pack jason 부터 만들고 하는게 편해!!!!! 


// 🔷 
    const express = require("express");

    // 익스프레스 실행
    const app = express();
        // 서버 객체가 생성
        // 이 함수의 반환값이 서버가 됨. 

    // 요청의 내용이 get 메소드 인지, post 메소드 인지 나눔
        // app.get()
            // get 으로 요청하면, 이 라우터 

        // app. post()
            // post 로 요청하면, 이 라우터 

    // url 라우팅 나누는 방식이 좀 더 편함 (👇 이건 과거 방식 | http 활용한 모듈)
        // http.createServer((req, res) =>{
        //     url
        //     switch (key) {
        //         case "/":
                    
        //             break;
            
        //         default:
        //             break;
        //     }
        // } )

    
    // 이 요청 url 이 / 에 들어옴    
    app.get('/' , (req, res) => {
        // send 메소드로 응답하고, 종료
        res.send("hello node.js")
    })
        // "⭐ / 여기 url 에다가⭐ > get 달라고 한다."

    // 대기 시키기
    app.listen(5000, () => {
        console.log('서버 열림~');
    })

    // pack json 작성 
        // 이걸 쓴 이유는? 


    // 🔷 pack json 작성 문법
        // {
        //     "dependencies": {
                    // [해석✍] 지금까지, 다운받은, 모듈, 들을 적는다. 
        //       "ejs": "^3.1.9", 
                    // ejs 다운 받았다는 의미.  
        //       "mysql2": "^3.2.4"
        //     },

        //     "name": "230502",
                    // [해석✍] 프로젝트 이름 
        //     "version": "1.0.0",
        //     "main": "01.index.js",
                    // [해석✍] 모듈을 require 할 때, 실행되는 파일, 
        //     "devDependencies": {},
        //     "scripts": {
                    // [해석✍] 
                        // 기본 내장 인 경우, 'npm start' 처럼 쓴다. 
                        // custom 인 경우, 'npm run 커스텀한이름' ex) 'npm run 커스텀한이름'
        //       "test": "echo \"Error: no test specified\" && exit 1",
        //       "start" : "node index.js",
        //       "dev2" : "node index.js"
                    // [해석✍] 터미널에, npm dev2 라고 치면, node index.js 이 실행됨
        //     },
            
        //     "keywords": [],
        //     "author": "",
        //     "license": "ISC",
        //     "description": ""
        //   }



    // npm start 작성 @ 터미널
        // dev 에 구문 넣으면 npm run dev 
        // package.json 스크립트 명령어 작성

        // start 명령어는 === npm start 임 
        // 별도의 네이밍으로 작성한 스크립트 명령어를 dev 라 가정하면 > npm run dev

