import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CardMV from "./CardMV";
import MD5 from "crypto-js/md5";
import "./gallery.css";

export default function Gallery() {
  const URL = "https://gateway.marvel.com:443/v1/public/characters";
  let [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("MARVEL") === null) {
        setCharacters("Loading...");
      } else {
        const local = localStorage.getItem("MARVEL");
        setCharacters(JSON.parse(local));
      }
    } else {
      const currentDate = new Date();
      const timestamp = currentDate.getTime();
      const hash = MD5(
        `${timestamp}${process.env.REACT_APP_MV_PRIVATE_KEY}${process.env.REACT_APP_MV_PUBLIC_KEY}`
      ).toString();
      fetchCharacters(
        `?ts=${timestamp}&apikey=${process.env.REACT_APP_MV_PUBLIC_KEY}&hash=${hash}`
      );
    }
  }, []);

  const fetchCharacters = async (query = "") => {
    const response = await fetch(URL + query);
    const dataCharacters = await response.json();
    const characters = dataCharacters?.data?.results?.map((character) => {
      return {
        id: character.id,
        img: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        url: character.resourceURI,
        name: character.name,
      };
    });
    setCharacters(characters);
    localStorage.setItem("MARVEL", JSON.stringify(characters));
  };

  return (
    <Container fluid>
      <Row>
        {characters?.map((ch) => {
          return (
            <Col key={ch.id}>
              <CardMV
                key={ch.id}
                name={ch.name}
                img={ch.img}
                gender={ch.gender}
                url={ch.url}
                status={ch.status}
              ></CardMV>
            </Col>
          );
        })}
      </Row>
      <Button className="btn-pag" variant="primary" size="lg">
        Prev
      </Button>
      <Button className="btn-pag" variant="primary" size="lg">
        Next
      </Button>
    </Container>
  );
}
