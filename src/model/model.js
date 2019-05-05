import {EventEmitter} from "events";

class Model extends EventEmitter{
     constructor(){
         super();
         this.state={
             questions: [{
                 title: "Blender3D",
                 question: "What does it do?",
                 author: "Ines",
                 date: "01/02/2013",
                 tags: "Blender"

             }, {
                 title: "Kittens",
                 question: "Are they fluffy?",
                 author: "Maria",
                 date:"23/04/2011",
                 tags: "Pets"
                }],

             newQuestion: {
                 title: "",
                 question: "",
                 author: "",
                 date: "",
                 tags: ""
             },
             filteredQuestions: [{
                 title: "",
                 question: "",
                 author: "",
                 date: "",
                 tags: ""
             }],
             toFilter:"Kittens"

         };
     }
     addQuestion(title, question, author, date, tags){
        this.state={
            ...this.state,
            questions:this.state.questions.concat([{
                title: title,
                question: question,
                author: author,
                date: date,
                tags: tags
            }])
        };
        this.emit("change", this.state);

    }

     changeNewQuestionProperty(property, value){
         this.state= {
             ...this.state,
             newQuestion:{
                 ...this.state.newQuestion,
                 [property]: value
             }
         };
         this.emit("change", this.state);
     }

     swapToFilter(property, value){
         this.state={
             ...this.state,
             [property]:value
         };
         this.emit("change", this.state);
     }
    addToFIlteredQuestions(title, question, author, date, tags){
        this.state = {
            ...this.state,
            filteredQuestions: this.state.filteredQuestions.concat([{
                title: title,
                question: question,
                author: author,
                date: date,
                tags: tags
            }])
        };
    }
    clearFilters(){
        this.state = {
            ...this.state,
            filteredQuestions: []
        };
    }
}
const model = new Model();
export default model;