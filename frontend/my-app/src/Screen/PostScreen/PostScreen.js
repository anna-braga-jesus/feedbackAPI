import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../logobonita.png";
import { AiOutlineComment } from "react-icons/ai";
import Css from "./style";

export default function PostScreen() {
  const [post, setPost] = useState();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [comentario, setComentario] = useState();

  const navigate = useNavigate();

  function postAComment(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4001/comment", { nome, email, comentario })
      .then((res) => {
        setPost(res.data);
      })
      .catch((res) => {
        setPost();
      });
  }
  function verifyEmptyFields() {
    if (!nome || !email || !comentario) {
      return alert("Preencha todos os campos!");
    } else {
      return alert("Comentário feito com sucesso!");
    }
  }

  return (
    <>
      <Css.Screen>
        <Css.Form onSubmit={postAComment}>
          <Css.FormDiv>
            <img src={logo} />
            <h1>[Cloud DevOps Experience Banco Carrefour] Tech Day</h1>
            <Css.InputName
              type="name"
              name="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              placeholder="Nome"
            ></Css.InputName>
            <Css.InputEmail
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            ></Css.InputEmail>
            <Css.InputComentario
              type="text"
              name="text"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Comentário"
              required
            ></Css.InputComentario>
            <Css.BlueButton type="submit" onClick={verifyEmptyFields}>
              Entrar
            </Css.BlueButton>
          </Css.FormDiv>
        </Css.Form>
        <Link to={"/"}>
          <AiOutlineComment
            size={"70px"}
            cursor={"pointer"}
            color={"#2f5ca7"}
          />
        </Link>
      </Css.Screen>
    </>
  );
}
