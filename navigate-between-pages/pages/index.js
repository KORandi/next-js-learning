import React from 'react';
import Link from 'next/link';

function Index(props) {
    return (
        <>
            <div>
                <Link title="Hello world!" href="/about">
                    <a>About page</a>
                </Link>
            </div>
            <div>
                <p>This is Index page</p>
            </div>
        </>
    );
}

export default Index;