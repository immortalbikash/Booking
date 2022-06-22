import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next)=>{
    res.send("Hello user, You are logged in!");
});

router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
    res.send("Hello user, You are logged in and you can delete your account");
});

//update
router.put("/:id", updateUser);
//delete
router.delete("/:id", deleteUser);
//get
router.get("/:id", getUser);
//getall
router.get("/", getUsers);

export default router;