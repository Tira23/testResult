import React, {FC, useEffect, useState} from 'react';
import CSS from 'csstype';

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const Node: FC<ITodo> = ({id, completed, userId, title}) => {
    const customStyle:CSS.Properties = {
        'backgroundColor' : completed ? 'green' : 'orangered'
    }
    return (
        <div style={customStyle}>
            <span>{id} - </span>
            <span>{userId} - </span>
            <span>{title} - </span>
            <input type={"checkbox"} checked={completed}/>
        </div>
    );
}

function App() {

    const [nodeList, setNodeList] = useState<ITodo[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setNodeList(data))
    }, []);

    return (
        <div>
            {nodeList && nodeList.map(item => <Node {...item}/>)}

        </div>
    );
}

export default App;
