import { useState } from 'react';
import { validateEmail,  } from '../utils/helpers'
import './Contact.css'

function Form() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue)
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');

            return
        }
        if (message === '') {
            setErrorMessage('Must have a message')

            return
        }

        setEmail('')
        setMessage('')
        setName('')
    };

    return (
        <div className=''>
            <h2>Contact</h2>
            <form className='form' onSubmit={handleFormSubmit}>
                <input 
                value={name}
                name='name'
                onChange={handleInputChange}
                type='name'
                placeholder='name'
                />
                <input 
                value={email}
                name='email'
                onChange={handleInputChange}
                type='email'
                placeholder='email'
                />
                <input 
                value={message}
                name='message'
                onChange={handleInputChange}
                type='message'
                placeholder='message'
                />
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
        <div>
        <p className="error-text">{errorMessage}</p>
        </div>
        )}
        </div>
    )
}

export default Form