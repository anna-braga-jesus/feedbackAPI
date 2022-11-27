import { listUsers, listUsersById } from "../repositories/user-repository.js";
import {
  serverErrorResponse,
  STATUS_CODE,
} from "../controllers.js/helper-controller.js";
import {
  getUsers,
  insertUser,
  getComments,
} from "../repositories/auth-repository.js";

async function getUserPosts(req, res) {
  try {
    const userInfo = await getUsers();
    console.log(userInfo);
    return res.status(200).send(userInfo);
  } catch (error) {
    return res.status(500).send("Deu ruim");
  }
}
async function createAUser(req, res) {
  const { nome, email, comentario } = req.body;
  try {
    const users = await insertUser(nome, email, comentario);

    return res.status(STATUS_CODE.OK).send("Created!");
  } catch (error) {
    return serverErrorResponse(res, error);
  }
}
async function getAllComments(req, res) {
  try {
    const allComments = await getComments();
    console.log(allComments);
    return res.status(200).send(allComments);
  } catch (error) {
    return res.status(500).send("Deu ruim");
  }
}

export { getUserPosts, createAUser, getAllComments };
