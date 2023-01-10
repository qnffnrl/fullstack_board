import React from 'react';
import {Link} from "react-router-dom";

function BoardItem(props) {
    const { post } = props;
    return (
        <tr>
            <td>
                <Link to={`/posts/${post._id}`}>
                    <div className="ellipsis">{post.title}</div>
                </Link>
            </td>
            <td className="date">
                <span>{post.createdAt}</span>
            </td>
        </tr>
    );
}

export default BoardItem;