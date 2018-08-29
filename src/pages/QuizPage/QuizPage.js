import React, {Component} from 'react';
import './QuizPage.css';
import Step1 from '../../components/Step1/Step1';
import Step2 from '../../components/Step2/Step2';
import Step3 from '../../components/Step3/Step3';





class QuizPage extends Component {
    constructor() {
        super();
        this.state = {
            quizStep: 0,
            moisture: '',
            sunlight: '',
            maintenance: '',
            size: '',
            expertiseLevel: '',
            humidity: '',
        }
        this.handleNextButton = this.handleNextButton.bind(this);
    }
    
    
    handleSelection = (field, e) => {
        this.setState({
          [field]: e
        });
    }
    
    
    handleNextButton = () => {
        var quizStep = this.state.quizStep < 2 ? this.state.quizStep += 1 : this.state.quizStep;
        this.setState({quizStep});
    }
    
    handleBackButton = () => {
        var quizStep = this.state.quizStep > 0 ? this.state.quizStep -= 1: this.state.quizStep;
        this.setState({quizStep});
    }
    
    
    
    render() {
        var steps = [
            <Step1 
                handleSelection={this.handleSelection}
            />,
            <Step2 
                handleSelection={this.handleSelection}
            />,
            <Step3 
                handleSelection={this.handleSelection}
            />
        ]
        return (
            <div className="QuizPage">
                <h1>Quiz</h1>
                {steps[this.state.quizStep]}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <button className="btn-success btn-lg" onClick={this.handleBackButton}>back</button>&nbsp;&nbsp;&nbsp;&nbsp;
                {this.state.quizStep === 2 ?
                <button className="btn-success btn-lg" onClick={this.handleNextButton}>find my <br/>Perfect Plant!</button> :
                <button className="btn-success btn-lg" onClick={this.handleNextButton}>next</button> }
                <br/>

            </div>
        )
    }
}

export default QuizPage;