const express = require("express");
const router = express.Router();
const store = require("../store/library");

router.get("/:id", (req, res) => {
  const { library } = store;
  const { id } = req.params;
  const index = library.findIndex((el) => el.id === id);

  if (index !== -1) {
    res.json(library[index]);
  } else {
    res.status(404);
    res.json("404 | book not found");
  }
});

router.get("/:id/download", (req, res) => {
  const { library } = store;
  const { id } = req.params;
  const index = library.findIndex((el) => el.id === id);

  if (index !== -1) {
    const filePath = __dirname + "/../public/books/" + library[index].fileBook;
    res.download(filePath, function (err) {
      if (err) console.log(err);
    });
  } else {
    res.status(404);
    res.json("404 | book not found");
  }
});

router.put("/:id", (req, res) => {
  const { library } = store;
  const { id } = req.params;
  const index = library.findIndex((el) => el.id === id);

  if (index !== -1) {
    library[index] = {
      ...todo[index],
      title: req.body.title,
      description: req.body.description,
      authors: req.body.authors,
      favorite: req.body.favorite,
      fileCover: req.body.fileCover,
      fileName: req.body.fileName,
    };

    res.json(library[index]);
  } else {
    res.status(404);
    res.json("404 | book not found");
  }
});

router.delete("/:id", (req, res) => {
  const { library } = store;
  const { id } = req.params;
  const index = library.findIndex((el) => el.id === id);

  if (index !== -1) {
    library.splice(index, 1);
    res.json("ok");
  } else {
    res.status(404);
    res.json("404 | book not found");
  }
});

module.exports = router;
