import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer style={{
                backgroundColor: '#C9C9C9',
                width: '100%',
                height: '80px',
                position: 'relative',
                top: 0,
                left: 0,
                textAlign: 'center'
            }}>
                <p style={{
                    padding: '30px'
                }}>All rights reserved © <span><b>Student Anon 2023</b></span></p>
            </footer>
        );
    }
}

export default Footer;