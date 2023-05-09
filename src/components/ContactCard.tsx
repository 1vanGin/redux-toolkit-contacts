import React, { memo } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ContactDto } from "src/types/dto/ContactDto";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { toggleFavorite } from "src/redux/ducks/favorite";

interface ContactCardProps {
  contact: ContactDto;
  withLink?: boolean;
}

export const ContactCard = memo<ContactCardProps>(
  ({ contact: { photo, id, name, phone, birthday, address }, withLink }) => {
    const dispatch = useAppDispatch();
    const allFavorites = useAppSelector((state) => state.favorite);
    const isFavorite = allFavorites.includes(id);

    return (
      <Card key={id}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title
            className="d-flex justify-content-between"
            style={{ cursor: "pointer" }}
          >
            {withLink ? <Link to={`/contact/${id}`}>{name}</Link> : name}
            <i
              className={`bi bi-star${isFavorite ? "-fill" : ""}`}
              style={{ color: "orange" }}
              onClick={() => dispatch(toggleFavorite(id))}
            ></i>
          </Card.Title>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>
                <Link to={`tel:${phone}`} target="_blank">
                  {phone}
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>{birthday}</ListGroup.Item>
              <ListGroup.Item>{address}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card.Body>
      </Card>
    );
  }
);
