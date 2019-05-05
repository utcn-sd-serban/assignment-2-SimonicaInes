import model from "../model/model";

class CreateQuestionPresenter {
    onCreateQuestion(){
        model.addQuestion(
            model.state.newQuestion.title,
            model.state.newQuestion.question,
            model.state.newQuestion.author,
            model.state.newQuestion.date,
            model.state.newQuestion.tags);//!!!
        model.changeNewQuestionProperty("title", "");
        model.changeNewQuestionProperty("question", "");
        model.changeNewQuestionProperty("author", "");
        model.changeNewQuestionProperty("date", "");
        model.changeNewQuestionProperty("tags", "");
        window.location.assign("#/");

    }

    onChangeQuestion(property, value){
        model.changeNewQuestionProperty(property, value);
    }
}
const createQuestionPresenter = new CreateQuestionPresenter();
export default createQuestionPresenter;