import {
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACT_BY_ID,
} from "../actionsTypes/contactsActionType";

export const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact,
    };
};

export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id,
    };
};

export const getContactById = (id) => {
    return {
        type: GET_CONTACT_BY_ID,
        payload: id,
    };
};
