import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import withLayout from "../../components/withLayout";

const Post = (props) => {
    const router = useRouter();
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${counter} times`;
    });
    return (
        <>
            <h1>{router.query.title}</h1>
            <p>This is blog post content.</p>
            <p>Count: {counter}</p>
            <button onClick={() => {setCounter(counter + 1)}}>Add</button>
        </>
    );
};

export default withLayout(Post);