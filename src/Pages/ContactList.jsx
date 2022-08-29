import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddContact from "../Components/AddContact";
import CardComponent from "../Components/Card";
import { deleteContact } from "../JS/actions/contactActions";

export default function ContactList() {
    const contacts = useSelector((state) => state.contactsReducer.contacts);
    const dispatch = useDispatch();
    return (
        <div>
            {contacts.map((contact, key) => {
                return (
                    <CardComponent
                        key={key}
                        contact={contact}
                        textButton="Delete"
                        onClick={() => {
                            dispatch(deleteContact(contact.id));
                        }}
                    />
                );
            })}
            <AddContact />
        </div>
    );
}
