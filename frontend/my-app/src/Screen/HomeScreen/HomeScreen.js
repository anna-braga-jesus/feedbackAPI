import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Css from "./style";
import logo from "../../Banco-Carrefour.jpg";
import axios from "axios";

export default function HomeScreen() {
  const [comment, setComment] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:4001/comments")
      .then((res) => {
        setComment(res.data);
      })
      .catch((res) => {
        console.log(res.data);
        setComment();
      });
  }, []);
  return (
    <>
      <Css.Header>
        <img src={logo} alt="logo" />
        <Css.Footer>
          {" "}
          <Link to={"/post"}>
            <p>Comente aqui!</p>
          </Link>
        </Css.Footer>
      </Css.Header>
      <Css.Comments>
        <Css.Box>
          <p>Veja o que nossos clientes estão comentando...</p>
        </Css.Box>
        <div>
          {!comment
            ? ""
            : comment.map((item) => {
                return <Css.CommentItem> {item.comentario} </Css.CommentItem>;
              })}
        </div>
      </Css.Comments>
      <Css.Clients>
        <Link to={"/users"}>
          <p>Clientes cadastrados</p>
        </Link>
      </Css.Clients>
    </>
  );
}
