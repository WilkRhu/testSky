const express = require("express");
const router = express.Router();
const userController = require("../../controller/users");
const auth = require("../../middleware/auth");

router.post("/singUp", userController.create);
router.post("/singIn", userController.singIn);
router.get("/user/:id", auth, userController.findId);
router.use((req, res, next) => {
    const error = {error: "Rota não encontrada!"};
    error.status = 404;
    next(error);
});

module.exports = router;