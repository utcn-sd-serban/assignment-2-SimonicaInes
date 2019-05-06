import React, { Component } from "react";
import model from "../model/model";

import CreateQuestion from "./CreateQuestion";
import createQuestionPresenter from "../presenter/CreateQuestionPresenter";
import questionsList from "./QuestionsList";

const mapModelStateToComponentState = modelState => ({
    author:  modelState.newQuestion.author,
    title:  modelState.newQuestion.title,
    question:  modelState.newQuestion.question,
    date:  modelState.newQuestion.date,
    tags:  modelState.newQuestion.tags//sa nu dea eroare aici
});

export default class SmartCreateQuestion extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <CreateQuestion
                onCreateQuestion={createQuestionPresenter.onCreateQuestion}
                onChangeQuestion={createQuestionPresenter.onChangeQuestion}
               /* titleInput={this.state.titleInput}*/
                title={this.state.title}
                question={this.state.question}
                author={this.state.author}
                date={this.state.date}
                tags={this.state.tags}/>
        );
    }
}
