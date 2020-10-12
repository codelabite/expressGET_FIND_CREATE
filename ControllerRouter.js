const { error } = require("console");
const fs = require("fs");
const Files = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));

exports.getCodeLabs = (req, res, next) => {
  res.status(200).json({
    status: "success",
    TotalEntry: Files.length,
    mgs: "Viewing all Data",
    data: {
      Files,
    },
  });

  next();
};

exports.getCodeLab = (req, res, next) => {
  id = req.params.id * 1;
  File = Files.find((el) => el.id === id);

  if (!File) {
    return res.status(404).json({
      success: false,
      mgs: "Invalid Entry",
    });
  }
  res.status(200).json({
    status: "success",
    mgs: `Viewing Data of ${req.params.id}`,
    data: {
      File,
    },
  });

  next();
};

exports.postCodeLab = (req, res, next) => {
  const newID = Files[Files.length - 1].id + 1;
  const newFile = Object.assign({ id: newID }, req.body);

  Files.push(newFile);

  fs.writeFile(`/data/data.json`, JSON.stringify(Files), (err) => {
    res.status(201).json({
      status: "Success",
      data: {
        newFile,
      },
    });
  });
};

exports.putCodeLab = (req, res, next) => {
  res.status(200).json({
    status: "success",

    mgs: `Editing Data of ${req.params.id}`,
    data: {},
  });

  next();
};

exports.deleteCodeLab = (req, res, next) => {
  res.status(200).json({
    status: "success",

    mgs: `Viewing Data of ${req.params.id}`,
    data: {},
  });

  next();
};
