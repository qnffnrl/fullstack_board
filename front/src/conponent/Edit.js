import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";

function Edit(props) {

    const params = useParams();

    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        content: "",
        writer: "",
    });

    async function fetchData(){
        const id = params.id.toString();
        const response = await fetch(`http://localhost:5000/posts/${id}`);
        if (!response.ok) {
            const message = `An error has occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const post = await response.json();
        setForm(post);
    }

    async function onSubmit(e) {
        e.preventDefault();
        const editedPost = {
            title: form.title,
            content: form.content,
            writer: form.writer,
        };

        await fetch(`http://localhost:5000/posts/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(editedPost),
            headers: {
                "Content-Type": "application/json",
            },
        });

        navigate(`/posts/${form._id}`);
    }

    function updateForm(value) {
        return setForm((prev) => {
            return {...prev, ...value};
        });
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="container mb-3">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        value={form.title}
                        onChange={(e) => updateForm({ title: e.target.value })}/>
                    <label htmlFor="writer">Writer</label>
                    <input
                        type="text"
                        id="writer"
                        name="writer"
                        className="form-control"
                        value={form.writer}
                        onChange={(e) => updateForm({ writer: e.target.value })}/>
                </div>

                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        rows="5"
                        className="form-control"
                        value={form.content}
                        onChange={(e) => updateForm({ content: e.target.value })}
                    ></textarea>
                </div>
                <div className="d-flex justify-content-end mt-1">
                    <Link className="btn btn-primary me-1" to={`/posts/${form._id}`}>
                        Back
                    </Link>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Edit;