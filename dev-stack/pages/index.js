// @flow
import React from 'react';

const style = {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
};

const Index = () => {
    const title = `Thank you for installing my developer stack 😋`;
    React.useEffect(() => {
        window.document.title = title;
    });
    return (
        <div style={style}>
            <span>
                <h1>{title}</h1>
                <p>Enjoy it! :)</p>
                <div>
                    Things to do:
                    <ul style={{textAlign: 'left'}}>
                        <li>Add Redux</li>
                        <li>Add GraphQL</li>
                        <li>Add Bootstrap</li>
                        <li>Add TypeScript version</li>
                        <li>Add Material version</li>
                    </ul>
                </div>
            </span>
        </div>
    );
};

export default Index;