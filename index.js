const express = require("express");
const singleBookRouter = require("./routes/single-book");
const booksRouter = require("./routes/books");
const loginRouter = require("./routes/login");

const app = express();
app.use(express.json());

app.use("/public", express.static(__dirname + "/public"));
app.use("/api/user/login", loginRouter);
app.use("/api/books", singleBookRouter);
app.use("/api/books", booksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is started on port ${PORT}`));
