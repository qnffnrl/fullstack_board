import React, {useEffect, useState} from 'react';
import BoardItem from "./BoardItem";
import {Link} from "react-router-dom";

function Board(props) {

    const [boards, setBoards] = useState([]);

    async function getBoards() {

        const response = await fetch("http://localhost:5000/posts");

        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const boardList = await response.json();
        setBoards(boardList);
    }

    useEffect(() => {
        getBoards();
    }, []);


    const boardItems = boards.map((post, idx) => (
        <BoardItem post={post} key={idx}/>
    ));

    return (
        <div className="container mb-3">
            <h2 className="mb-3">Board</h2>
            <table className="board-table table table-sm border-bottom">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col" className="date">Date</th>
                    </tr>
                </thead>
                <tbody>{boardItems}</tbody>
            </table>
            <div className="d-flex justify-content-end">
                <Link className="btn btn-primary" to="/posts/new">New</Link>
            </div>
        </div>
    );
}

export default Board;