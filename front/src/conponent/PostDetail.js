import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";

function PostDetail(props) {
    
    const params = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();

    /**
     *  게시글 내용 가져오기 
     */
    async function fetchData(){
        const id = params.id.toString();
        const response = await fetch(`http://localhost:5000/posts/${id}`);
        if (!response.ok) {
            const message = `Am error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }
        const post = await response.json();

        setPost(post);
    }

    useEffect(() => {
        fetchData();
    }, []);

    /**
     *  게시글 삭제 
     */
    async function deletePost() {
        if (window.confirm("정말 삭제 하시겠습니까?")){
            await fetch(`http://localhost:5000/posts/${params.id}`, {
                method: "DELETE",
            });

            alert("삭제 완료")
            navigate(`/Board/`);
        }
        else{
            return;
        }
    }
    
    return (
        <div className="container mb-3">
            <div className="card">
                <div className="d-flex justify-content-between align-items-center card-header">
                    <h5 className="w-70 text-black">{post.title}</h5>
                    <h6 className="w-30 text-black">작성자 : {post.writer}</h6>
                </div>

                <div className="row">
                    <div className="col-md-7 col-lg-8 col-xl-9 order-sm-2 order-md-1">
                        <div className="post-body p-2 text-black">{post.content}</div>
                    </div>

                    <div className="col-md-5 col-lg-4 col-xl-3 order-sm-1 order-md-2">
                        <div className="post-info card m-2 p-2">
                            <div>
                                <span className="text-black">Created : {post.createdAt}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-3 d-flex justify-content-end">
                <Link className="me-1 btn btn-primary" to="/board">
                    Back
                </Link>
                <Link className="me-1 btn btn-info" to={`/posts/${post._id}/edit`}>
                    Edit
                </Link>
                <button className="btn btn-danger" onClick={() => deletePost()}>Delete</button>
            </div>
        </div>
    );
}

export default PostDetail;