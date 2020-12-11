import React, { Component } from 'react'
import '../assets/style.css'
import quizService from '../quizService/index'

class QuizHome extends Component {
    state={
        questionBank: []
    }

    getQuestions(){
        quizService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    }

    componentDidMount(){
        this.getQuestions();
    }

    render() {        
        return (
            <div>
                <div className='title'>Quiz</div>
                {this.state.questionBank.length > 0 && this.state.questionBank.map(({question, answers, correct, questionId}) => <h4>{question}</h4>)}
            </div>
        )
    }
}

export default QuizHome
