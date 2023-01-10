import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

function New(props) {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        content: "",
        writer: "",
    });

    function updateForm(value) {
        return setForm((prev) => {
           return { ...prev, ...value};
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        await fetch(`http://localhost:5000/posts/`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
            },
        });

        navigate(`/Board/`);
    }

    return (
        <div className="container mb-3">
            <form onSubmit={onSubmit}>
                <div className="form-group d-flex flex-column">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        value={form.title}
                        onChange={(e) => updateForm({ title: e.target.value })}/>
                    <label htmlFor="title">Writer</label>
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
                    <Link className="btn btn-primary me-1" to={`/Board/`}>
                        Back
                    </Link>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default New;