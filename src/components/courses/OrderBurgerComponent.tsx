import React, { useState } from "react";


const OrderBurger = () => {
    // State variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [agree, setAgree] = useState(false);
    const [order, setOrder] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !email || !subject || !agree || order === "0") {
            alert('Please fill in all required fields and agree to the terms.');
            return;
        }

        alert(`Order placed!\nName: ${name}\nEmail: ${email}\nOrder: ${order === "1" ? "Yes" : "No"}\nSubject: ${subject}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                required
            />
            <br />
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
            />
            <br />
            <label>Do you want to order:</label>
            <div className="custom-select" style={{ width: '200px' }}>
                <select value={order} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setOrder(e.target.value)} required>
                    <option value="0">Select an option:</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                </select>
            </div>
            <br />
            <label>Subject:</label>
            <textarea
                id="subject"
                name="subject"
                placeholder="Write something..."
                value={subject}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSubject(e.target.value)}
                required
            />
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAgree(e.target.checked)}
                    required
                /> I have read and agree
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default OrderBurger;


// ● Clicking on the submit button, check if there are empty labels that must be field.
//● If there is no missed data, alert the order, else alert a message for the user.