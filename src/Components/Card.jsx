import React from "react";
import { Card } from "react-bootstrap";
import Button from "./Button";
import { Link } from "react-router-dom";
export default function CardComponent({
    contact,
    imgSrc,
    onClick,
    textButton,
}) {
    const { name, email } = contact;
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{email}</Card.Text>
                <Button textButton={textButton} onClick={onClick} />
                <Link to={`/contactList/${contact.id}`}>
                    <Button textButton="Show More" />
                </Link>
            </Card.Body>
        </Card>
    );
}
