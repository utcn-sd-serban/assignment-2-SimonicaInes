import React from "react";

const QuestionsList = ({questions , onCreateQuestion, onFilterByTitleQuestion, swapToFilter, onFilterByTagQuestion}) => (

    <div class = "container-fluid">
        <div class="Jumbotron">
            <h1>Stack Overflow</h1>
        <table class="table-striped">
            <thead>
            <tr>
                <th> Title </th>
                <th> Question </th>
                <th> Author </th>
                <th> Date </th>
                <th> Tags </th>
            </tr>
            </thead>
            <tbody>
                {
                    questions.map((question, index)=>(
                        <tr key={index}>
                            <td>{question.title}</td>
                            <td>{question.question}</td>
                            <td>{question.author}</td>
                            <td>{question.date}</td>
                            <td>{question.tags}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
            <br/>
      <button class="btn btn-primary" onClick={onCreateQuestion}>Add new Question</button>
            <br/>
            <br/>
        <input onChange={ e => swapToFilter("toFilter", e.target.value) } />
        <button class="btn btn-primary" onClick={onFilterByTitleQuestion}> Filter By Title</button>
            <br/>
            <br/>
        <input onChange={ e => swapToFilter("toFilter", e.target.value) } />
        <button class="btn btn-primary" onClick={onFilterByTagQuestion}> Filter By Tag</button>
    </div>
    </div>


);
export default QuestionsList;
