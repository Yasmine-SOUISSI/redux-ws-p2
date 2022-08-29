import {
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACT_BY_ID,
} from "../actionsTypes/contactsActionType";

const initialState = {
    contacts: [
        {
            id: "1",
            name: "John Doe",
            email: "johnDoe@gmail.com",
            phone: "555-555-5555",
            type: "personal",
        },
        {
            id: "2",
            name: "Jane Doe",
            email: "janeDoe@gmail.com",
            phone: "555-555-5555",
            type: "personal",
        },
    ],
    contact: {
        id: null,
        name: "",
        email: "",
        phone: "",
        type: "",
    },
    isLoggedIn: true,
};
console.log("initialState: ", initialState);

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id !== action.payload
                ),
            };
        case GET_CONTACT_BY_ID:
            console.log("GET_CONTACT_BY_ID: ", action.payload);
            console.log(
                "GET_CONTACT_BY_ID: ",
                state.contacts.find((contact) => contact.id === action.payload)
            );
            return {
                ...state,
                contact: state.contacts.find(
                    (contact) => contact.id === action.payload
                ),
            };
        default:
            return state;
    }
};
