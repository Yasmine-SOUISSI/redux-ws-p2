import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getContactById } from "../JS/actions/contactActions";
export default function ContactListDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContactById(id));
    }, [id, dispatch]);
    const contact = useSelector((state) => state.contactsReducer.contact);
    console.log(contact);
    return (
        <div>
            {contact && (
                <>
                    <h1>{contact.name}</h1>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <p>{contact.type}</p>
                </>
            )}
        </div>
    );
}
