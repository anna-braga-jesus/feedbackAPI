import { Router } from "express";
import {
  getUserPosts,
  createAUser,
  updateAComment,
  getAllComments,
} from "../controllers.js/user-controller.js";
import { signUpValidation } from "../middlewares/auth-middleware.js";

const usersRouter = Router();

usersRouter
  .get("/users", getUserPosts)
  .get("/comments", getAllComments)
  .post("/comment", signUpValidation, createAUser);
// .put("/users/:id", updateAComment);

export { usersRouter };
