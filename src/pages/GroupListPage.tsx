import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { useAppSelector } from "src/redux/hooks";

export const GroupListPage = memo(() => {
  const allGroups = useAppSelector((state) => state.groups);
  return (
    <Row xxl={4}>
      {allGroups.map((groupContacts) => (
        <Col key={groupContacts.id} className="mb-3">
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
