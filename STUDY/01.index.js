// http 요청 응답을 좀 더 편하게 사용할 수 있는 모듈 


// 🔷 express 
    // node.jss 프레임워크
    // http 요청과 응답을 쉽게 작성할 수 있도록 도와준다. 
    // 기본적인 기능만 포함하고 있어서, 자유도가 높음.
    // 작성하는 사람의 입맛에 따라, 라우팅 미들웨어 등등, 개발자가 원하는 방식으로 구성할 수 있다.
    // 본인만의 '보일러 플레이팅' 가능 

    // '보일러 플레이팅'
        // 반복적인 작업을 미리 써놓고, 개발의 생산성을 높이는 것 
    
    // express 를 사용해보자 일단! 


// 🔷 express 설치 
    // 설치 url : https://www.npmjs.com/package/express
    // npm i express 
    // npm install express
    // npm init -y 부터 하는게 편함 ❓❓❓ 
        // pack jason 부터 만들고 한다❓❓❓ 


// 🔷 해보기 
    // 모듈 가져오기
    const express = require('express');

    // 서버 객체 생성
    const app = express();
        // 함수의 반환값이 서버가 됨 

    // 요청의 내용이 get 메소드인지, post 메소드 인지 나눔 
        // app.get()
            // get 으로 요청하면, 이 라우터 
        // app.post()
            // post 로 요청하면, 이 라우터


    // url 라우팅 나누는 방식이 좀 더 편함? 이게 뭐지? (과거 방식 | http 활용한 모듈)
        // http.createServer((req, res) => {
        //     url 
        //     switch (key) {
        //         case "/":
                    
        //             break;
            
        //         default:
        //             break;
        //     }
        // })

        // [해석]
            // 여기에 있는 switch 한 덩어리가, get, post 한 덩어리 임. 


    // 이 요청 url 이 / 에 들어옴 
    app.get('/' , (req, res) => {
        // send 메소드로 응답하고, 종료
        res.send("hello node.js")
    })
        // 여기가 뭔가 좀 더 해석이 필요 😥 


    // 대기 시키기 
    app.listen( 5000, () => {
        console.log("서버 열림~")
    })


    // 여기부터 pack json 작성 하는 것 같은데, 뭘 하는 거고, 어떤 의미가 있구, 어떻게 하는거지? ❓❓❓❓❓ 
        // package.json 하려면, 이제, npm init -y ? ❓❓❓ (다른 파일에서 처음부터 다시 해보자)

    // pack json 작성 후 npm 명령어 (이렇게 정리한게 맞나❓❓)
        // 기본 start 명령어는 === npm start 
    
        // 별도의 네이밍으로 작성한 스크립트 명령어를 dev 라 가정하면
            // pack json 작성할 때, dev 에 구문 넣으면 > npm run dev
            // package.json 스크립트 명령어 작성
