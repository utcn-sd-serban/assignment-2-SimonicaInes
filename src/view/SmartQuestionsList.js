import React,{Component} from "react";
import model from "../model/model"
import QuestionsList from "./QuestionsList";
import questionsListPresenter from "../presenter/QuestionsListPresenter";
const mapModelStateToComponentState = modelState => ({
    questions: modelState.questions
});

export default class SmartQuestionsList extends Component{
    constructor(){
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
    }
    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }
    render(){
        return(
            <QuestionsList
                onFilterByTitleQuestion={questionsListPresenter.onFilterByTitleQuestion}
                onFilterByTagQuestion={questionsListPresenter.onFilterByTagQuestion}
                swapToFilter={questionsListPresenter.swapToFilter}

               onCreateQuestion={questionsListPresenter.onCreateQuestion}
                questions={this.state.questions}/>

        );
    }
}
