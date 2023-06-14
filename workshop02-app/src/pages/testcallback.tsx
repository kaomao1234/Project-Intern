import { useState, useCallback, FC } from "react";
import ReactDOM from "react-dom/client";
import { memo } from "react";

const Todos: FC<{ todos: string[]; addTodo: () => void }> = ({ todos, addTodo }) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
};
const TestCallBack = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState<string[]>([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((t: string[]) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};
export default TestCallBack;
