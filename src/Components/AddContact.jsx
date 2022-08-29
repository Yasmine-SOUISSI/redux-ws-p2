import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { dataInputs } from "../Helpers/dataHelper";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addContact } from "../JS/actions/contactActions";
export default function AddContact() {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        type: "",
    });
    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };
    const dispatch = useDispatch();
    return (
        <>
            {dataInputs.map((input, key) => (
                <Form.Group className="mb-3" key={key}>
                    <Form.Label>{input} </Form.Label>
                    <Form.Control
                        placeholder={input}
                        name={input}
                        onChange={handleChange}
                    />
                </Form.Group>
            ))}
            <Button
                textButton="Add Contact"
                onClick={() =>
                    dispatch(addContact({ ...contact, id: Math.random() }))
                }
            />
        </>
    );
}
