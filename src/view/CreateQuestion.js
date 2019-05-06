import React from "react";

const CreateQuestion = ({ title, question, author, date, tags , onCreateQuestion, onChangeQuestion}) => (
    <div className="container-fluid">
        <div className="Jumbotron">
        <h2>Add Question</h2>
        <div>
            <label>Title: </label>
            <input value={title}
                   onChange={ e => onChangeQuestion("title", e.target.value) } />
            <br />
            <label>Question: </label>
            <input value={question}
                   onChange={ e => onChangeQuestion("question", e.target.value) } />
            <br />
            <label>Author: </label>
            <input value={author}
                   onChange={ e => onChangeQuestion("author", e.target.value) } />
            <br />
            <label>Date: </label>
            <input value={date}
                   onChange={ e => onChangeQuestion("date", e.target.value) } />
            <br />
            <label>Tag: </label>
            <input value={tags}
                   onChange={ e => onChangeQuestion("tags", e.target.value) } />
            <br />
            <button class="btn btn-primary" onClick={onCreateQuestion}>Create!</button>
        </div>
    </div>
    </div>
);

export default CreateQuestion;