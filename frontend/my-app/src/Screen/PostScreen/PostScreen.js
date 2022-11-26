import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../logobonita.png";
import { AiOutlineComment } from "react-icons/ai";
import Css from "./style";

export default function PostScreen() {
  const [post, setPost] = useState();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    comentario: "",
  });
  const navigate = useNavigate();
  function postAComment(e) {
    e.preventDefault();
    // navigate("/comments");
  }
  useEffect(() => {
    axios
      .get("http://localhost:4001/post")
      .then((res) => {
        setPost(res.data);
      })
      .catch((res) => {
        //alert("Nome ou email inválidos!");
        setPost();
      });
  }, []);
  function verifyEmptyFields() {
    if (form.nome === "" || form.email === "" || form.comentario === "") {
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
              value={form.name}
              required
              placeholder="   Nome"
            ></Css.InputName>
            <Css.InputEmail
              type="email"
              name="email"
              value={form.name}
              placeholder="  Email"
              required
            ></Css.InputEmail>
            <Css.InputComentario
              type="email"
              name="email"
              value={form.name}
              placeholder="   Comentário"
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
