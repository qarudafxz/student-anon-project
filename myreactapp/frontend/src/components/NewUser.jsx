import React from 'react';
import Logo from '../assets/health.png';

const NewUser = ({  newUser, logNewUser, handleChange }) => {
    return (
        <div style={{
            position: 'relative',
            top: '100px',
            margin: '0 auto',
            width: '35%',
            height: '48vh',
            backgroundColor: '#804197',
            borderRadius: '10px',
            color: '#fff',
            padding: '50px 0 0 0',
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}>
            <img src={Logo} style={{
                width: '160px',
                height: '160px',
                borderRadius: '100%',
                margin: '20px 0 0 0'
            }}></img>
            <h1>Anonymous Chat</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Enter username preferably anonymous..."
                    value={newUser}
                    autoCapitalize='off'
                    autoComplete='off'
                    onKeyPress={(e) => (e.code === "Enter" ? logNewUser() : null)}
                    onChange={(e) => handleChange(e)}
                    style={{
                        width: '50%',
                        height: '50px',
                        paddingLeft: '10px',
                        fontSize: '13px',
                        margin: '20px 0 0 0',
                        borderRadius: '6px',
                        border: 'none'
                    }}/>
                    <button 
                    onClick={logNewUser}
                    style={{
                        width: '10%',
                        height: '56px',
                        paddingLeft: '10px',
                        fontSize: '13px',
                        margin: '20px 0 0 10px',
                        cursor: 'pointer',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: '#19143d',
                        color: '#FFFFFF' 
                    }}>Join</button>
            </div>
        </div>
    );
}

export default NewUser;