import React from 'react';
import { nanoid } from 'nanoid';


const INITIAL_STATE = {
    id: '',
    name: '',
    number: ''
};

export class ContactForm extends React.Component {
    state = { ...INITIAL_STATE };
    id = nanoid();

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit({ ...this.state });
        this.reset();
    };

    reset = () => this.setState({ ...INITIAL_STATE });

    render() {
        return ()
    }
};