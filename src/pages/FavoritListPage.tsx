import React, { memo, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";
import { useAppSelector } from "src/redux/hooks";

export const FavoritListPage = memo(() => {
  const allContacts = useAppSelector((state) => state.contacts);
  const allFavorites = useAppSelector((state) => state.favorite);
  const [contacts, setContacts] = useState<ContactDto[]>([]);

  useEffect(() => {
    setContacts(() =>
      allContacts.filter(({ id }) => allFavorites.includes(id))
    );
  }, [allContacts, allFavorites]);

  if (contacts.length === 0) {
    return <h3>No favorites</h3>;
  }

  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
