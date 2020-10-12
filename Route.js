const express = require("express");
const router = express.Router();
const data = [
  { id: 1, name: "Osas" },
  { id: 2, name: "Ndidi" },
  { id: 3, name: "Ola" },
];

const {
  getCodeLabs,
  getCodeLab,
  postCodeLab,
  putCodeLab,
  deleteCodeLab,
} = require("./ControllerRouter");

router.route("/").get(getCodeLabs);
router.route("/").post(postCodeLab);
router.route("/:id").get(getCodeLab);
router.route("/:id").put(putCodeLab);
router.route("/:id").delete(deleteCodeLab);

module.exports = router;
