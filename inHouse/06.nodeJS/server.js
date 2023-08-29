const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.set("view engine", "ejs");

app.use("/public", express.static("public")); //middleware

MongoClient.connect(
  "mongodb+srv://mandarinfactory:tiger6475!@mandarinfactory.ldgnukl.mongodb.net/?retryWrites=true&w=majority",
  (error, client) => {
    if (error) return console.log("ERROR!");
    db = client.db("template");
    // user가 form에서 /add로 POST요청(쓰기요청)하면
    app.post("/add", (req, res) => {
      res.send("good!");
      // mongoDB.counter내의 총게시물갯수를 찾음
      db.collection("counter").findOne({ name: "postNumber" }, (err, res) => {
        let totalPostNum = res.totalPost; // 총게시물갯수를 변수에 저장
        // 이제 DB.post에 새게시물을 기록함
        db.collection("post").insertOne(
          { _id: totalPostNum + 1, title: req.body.title, date: req.body.date },
          (err, result) => {
            console.log("COMPLETE!");
            // counter라는 collection에 잇는 totalPost라는 항목도 1 증가시켜야함! --> 얘도 이 안에다가!
            db.collection("counter").updateOne(
              { name: "postNumber" },
              { $inc: { totalPost: 1 } },
              (err, res) => {
                if (err) return console.log(err);
              }
            );
          }
        );
      });
    });
    app.listen(8080, () => {
      console.log("listening on 8080");
    }); // server를 띄우기 위한 기본 셋팅!(설치한 express 라이브러리 사용방법)
  }
);
/* app.get("/pet", (req, res) => {
  res.send("방굽! 여기는 PET 용품을 쇼핑할 수 있는 페이지입니다.");
});
app.get("/beauty", (req, res) => {
  res.send("방굽! 여기는 BEAUTY 용품을 쇼핑할 수 있는 페이지입니다.");
}); */
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/write", (req, res) => {
  res.render("write.ejs");
});
app.get("/list", (req, res) => {
  db.collection("post")
    .find()
    .toArray((error, result) => {
      console.log(result[0]._id);
      res.render("list.ejs", { posts: result });
    }); 
});

app.delete("/delete", function (req, res) {
  console.log(req.body);
  req.body._id = parseInt(req.body._id);
  //req.body에 담겨온 게시물번호를 가진 글을 db에서 찾아서 삭제하기
  db.collection("post").deleteOne(req.body, (err, result) => {
    console.log("완료!");
    res.status(200).send({ message: "FAIL!" });
  });
});

app.get("/detail/:id", (req, res) => {
  db.collection("post").findOne(
    { _id: parseInt(req.params.id) },
    (err, result) => {
      res.render("detail.ejs", { data : result });
    });
});
app.get('/edit/:id', (req, res) => {
  db.collection('post').findOne(
    { _id : parseInt(req.params.id) },
    (err, result) => {
      res.render('edit.ejs', { post : result });
    });
});

app.put('/edit', (req, res) => {
  // 폼에 담긴 제목데이터, 날짜데이터를 가지고 db.collection 게시물 찾아서 업데이트
  db.collection('post').updateOne({ _id : parseInt(req.body.id) },{ $set : { title : req.body.title, date : req.body.date }},(error, result) => {
    console.log('수정완료!');
    res.redirect('/list');
  });
});