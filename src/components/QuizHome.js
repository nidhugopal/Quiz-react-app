import React, { Component } from 'react'
import '../assets/style.css'
import quizService from '../quizService/index'
import QuestionBox from './QuestionBox'

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
                {this.state.questionBank.length > 0 && this.state.questionBank.map(({question, answers, correct, questionId}) => <QuestionBox question={question} options={answers} key={questionId} />
                )}
            </div>
        )
    }
}

export default QuizHome
