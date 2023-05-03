// express 와 템플릿 엔진, 사용해서, 게시판 만들기 

// 🔷 템플릿 엔진 
    // ejs
        // 지금은 '서버에서 페이지를 보여줄 것 임.' 
        // 이걸, 서버사이드 렌더링. 이라 함. 
        
    // 템플릿 엔진이란 
        // 서버 측에서, html 을 만들어서, 브라우저에 보여주는 것. 
        // 나중에는 '분리' 예정 

    // express 에서는 버전업이 되면서, ejs 를, 기본적으로, 지원한다.
    // html 에다가, js 를 같이 추가해서, 동적인 웹페이지를 만들 수 있는, 템플릿엔진

    // 서버 측에서, html 템플릿을 그려주고, 이러한 기법을, '서버 사이드 렌더링' 이라 함.

    // 서버 사이드 렌더링 장점 
        // 1) 검색기능 
        // 2) 페이지 로딩이 빠르다. 

// 🔷 body-parser 모듈 
    // express 의 미들웨어 
    // 요청으로 받은 body 의 내용을, req 요청 객체 안에 있는 body 객체로 담아준다. 
    // body 키 값에 데이터를 담아 준다. 
    // req.body 로 호출이 가능해진다.
    // 요청으로 받은 데이터를 body 로 보내서, 호출 될 수 있음.
    
    // 미들웨어란 요청-응답 사이에 실행할 수 있는 기능을 추가 

    // 사용할 모듈 
        // express, ejs, mysql2, body-parser, path,


// 🔷 ejs 설치
    // npm i ejs

// 🔷 mysql 
    // npm i mysql2

// 🔷 둘다 설치 하려면 
    // 한칸 씩만 띄우면 됨 
    // npm i ejs mysql2 



// 🔷 익스프레스로 서버 대기 상태 만들기~~~~ 연습~~~~~~
    // 모듈 가져오기
    const express = require("express");
    const mysql2 = require("mysql2");
    const path = require("path")
    const bodyParser = require("body-parser")

    // 서버 인스턴스 생성
    const app = express();

    // express 에 set 메서드와 use 메서드가 있음. 
    // set 메서드 : express 의 view 등등 설정을 할 수 가 있음. 
        // 그리는 폴더 같은 설정을 할 수 있음. 
        // 그려줄 파일이 있는 폴더의 경로 같은 것을 설정할 수 있음. 
    
    // use 메소드 
        // 요청 또는 응답시, 실행되는, 미들웨어를, 추가할 수 있다. 
        // body 객체에 뭔가를 넣는다. 

    // express views 속성을 경로로 지정
    // express view 로 사용할 파일들의 경로
    // express 도 서버사이드 렌더링을 지원함. > so, view 엔진을 사용함. 
    // view 엔진은 html 등의 템플릿 파일을 보여주는 역할을 함. 
    // 보여줄 때, 이 폴더로 지정한 것!
    app.set("views" , path.join(__dirname, "views"))
    // 이 경로를 > path.join 으로 만들어주는데, 파일 폴더 명로 까지 오고, 폴더 경로에서 view 폴더로 설정

    // 보여주는 엔진을 설정 
    // 그 엔진을 ejs 로 설정 
    app.set("view engine", "ejs")
    // view 엔진을 ejs 로 사용하겠다고 설정. 
    // 이거 모듈 설치만 받아둔 것. 
    // ejs 설치가 되어 있어야 한다. 
    // ✅ 따라서, 확장자를 ejs 로 변경해야 함. 


    // // 미들웨어 추가
    // app.use(
    //     bodyParser.urlencoded({
    //         // urlencoded : form 데이터 태그의 파싱을 도와주는 미들웨어 임 
    //         // 특정 버전 이하 에서는 bodyparser 가 필요 
    //         // 다만, 특정 버전 이상은 bodyParer 필요 없음. 

    //         extended : false,      
    //         // http://localhost:3000/main?userID=
    //         // ? 뒤에 있는 것 = 퀴리 스트링
    //         // 링크 주소에 사용되는거 = qs
    //     })
    //     // extended 옵션 
    //         // true 면 : 쿼리 스트링의 기능이 좀 더 확장된 qs 모듈을 사용 (깊은 객체를 지원, 객체 안에 객체가 있는 경우)
    //         // flase 면 : express 기본 내장된 쿼리 스트링 모듈 사용 (깊은 객체를 지원, 객체 안에 객체를 지원하지 않음)
    //             // 권장은 false 
    //             // 복잡한 데이터를 다루게 되면 쓸 수도 있겠으나, 우선, false 로! 
    //             // 공식 문서도 false 로 우선 고정 | 보안 이슈 관련 (아마도)
    // )

    // express 버전이 올라가면서, body-Parser 를 지원하기 때문에
    app.use(express.urlencoded({extended  : false}))

    // mysql 연결 부터 하자 
    const _mysql = mysqp2.createConnection({
        user : "root", 
        password : "admin1234", 
        database : "mysqlpwdj"
    })

    // 테이블이 있는지 확인하자
    _mysql.query("SELECT * FROM products" , (err, res) => {
        if (err) {
            // 테이블이 없으면, 만들어 보자. 
            const sql = "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20) number VARCHAR(20), series VARCHAR(20))"
            // 고유값 하나 정해주고 PRIMARY KEY 
            // id 는 숫자형, auto increment 로 자동 증가 
            // 고유값 
            // 고유키는 하나 
            // name 는 문자 인데 - 20자 까지 
            // number 는 문자 인데 20자 까지 

            _mysql2.query(sql);

        } else {

            console.log(res);
        }
    })
    // ✅ pack json 에서 index3 으로 변환하고 실행 


    // 들어갈 페이지를 보여줄 것 임 
        // 지금까지 쿼리문 뭔가 했음 
        // 이제 라우팅 
        // 루트경로 들어왔을 때, 메인 페이지~ 

    app.get("/" , (req,res) => {
        // main 페이지의 루트 경로로 요청시 처리 
        // 메인 페이지 
        // 쿼리문으로 내용, 데이터를 보여줄 것 임. 
        _mysql.query("SELECT * FROM products", (err, result) => {
            console.log(res);
            
            // 방금 만든 ejs 를 그려주기
            // render 메소드 : view 엔진이, 문자열을, html로 브라우저에, 변환해서, 렌더링 해준다.
            // 첫 번째 매개변수가 view 로 설정한 폴더 경로에 파일의 이름을 문자열로 전달 
                // 보여줄 파일의 이름을 문자열로 전달
            // 두 번째 매개변수 : 템플릿 엔진에서 사용할 데이터 
                // data 로 똑같은 이름으로 넘겨주면 됨.  
            res.render("main" , {data : result});
                // ejs 가 돌면서, 이게 data 가 돌아간다. 
                // table 에 데이터가 있으면 > 쭈루룩 뽑아준다. ⭐⭐⭐ 
                // 데이터에 리스트가 뜨면, 다 들어갈 거야. 
                // ❓ 워크벤치에서 뭔가를 확인해본다면❓❓❓ 
            
            // 지금은 보여주는 것 까지, 이제, 추가 수정 삭제

        })
        // 잘 가져오면 -> res 로 가져와짐 -> 뿌려주기        
    })

    // 추가하는 페이지로 가자 


    // 리스트를 추가하는 페이지 

    // 요청하는 url 을 다른 식으로 받기 
    app.get("/insert" , (req, res) => {
        res.render("insert");

    })


    // 데이터를 쓰는 역할 
    // POST 메소드 
        // url 은 동일하지만, 메소드 방식에 따라서, 차이가 나뉨. 
    app.post('/insert' , (req, res) => {
        // req 는 요청의 내용이 있음. 

        const data = req.body.name
            // body-Parser 를 해서 > body 객체에 들어오게 된다. 
            // 데이터가 객체로 들어온다. 
            // 객체 안에 있는 키값들은 input 의 name 으로 정해준 key 로 값이 들어있다. 
            // 값은 input 의 value 일 것, 
            // key 는 name 에 적은 value
    
        // 이 값을 데이터 베이스에 추가 
        const sql = "INSERT INTO products() (name, number, series)VALUES(?,?,?)"
            // products() 테이블에 넣을거야 -> 변수 어떻게 넣지? 괄호
            // VALUE 를 따로 넣어줄 수 있음. 

            // VALUE 의 순서대로 맞춰줘야 함. 
            _mysql.query(sql, [data.name, data.number, data.series], () => {
                // redirect 메소드로, 너, 메인페이지로, 매개변수로 전달한 해당 url 로, 페이지 전환시킨다.
                // 경로로 이동시킨다.
                // 쿼리 동작이 끝나면, redirect 메소드를 통해 메인 페이지로 다시 돌아갈 수 있게 해줌
                res.redirect("/")
                    // 다시, 메인 페이지로~
                
                // '추가' 버튼을 누르면 -> 생김 | 왜냐면, 데이터 베이스를 읽고, 뿌려준다. 
                // 뿌려주니까, 추가가 된다. 
                // form 태그로 받은걸 > body 로 받아서 > 테이블에 네임, 넘버 로 받아서 > 테이블에 추가 한 것

            });

        // 삭제를 해봅시다. 
            // 일반 삭제
            app.get("/delete/:id" , (req, res) => {
                // :id url 요청에서, 파라미터 값, 이라고 함. ✅✅ 
                // 페이지네이션을 만들 때도, 페이지 들어갔을 때, 1 써 있고, 2 써 있고 할 때, 
                // 1 이라는 값을 가져올 수 있다. 어디에서? 요청에서! 

                // 저게 key 값이 된다. 
                    // 예를 들어서, http://localhost:3000/delete/1
                    // 이건, {id : 1} 이렇게 요청의 객체에 들어있다. 
                    // req.params.id === 1
                        // 작성한 내용이 들어오게 됨. 

                const sql = "DELETE FROM products WHERE id = ?"
                    // 이 테이블에 어디에서 얻어와 ? : where
                    // ? 물음표에 값을 전달할 수 있었음 (위에서 물음표 3개~~~)
                _mysql.query(sql, [req.params.id] , () => {
                    res.redirect("/");
                })
                    // 뒤에 있는 숫자가, id 의 key 로 들어온다.
                    // url 에서 /delete2 하면 > 2번 글이 지워짐.
                    // 3 을 넣으면 -> id 값이 3 

            })



            // query 메소드의 두 번째 매개변수로, '배열' 을 전달해줄 수 있음. 
            
            // 그 다음 실행된 콜백함수. 

            console.log(data);
            res.send();
    })



    app.listen(8080, () => {
        console.log("서버 열림~");
    } )
        // 열렸는지 확인~ 








