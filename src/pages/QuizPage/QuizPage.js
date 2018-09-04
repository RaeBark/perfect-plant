import React, {Component} from 'react';

import './QuizPage.css';
import Step1 from '../../components/Step1/Step1';
import Step2 from '../../components/Step2/Step2';
import Step3 from '../../components/Step3/Step3';
import plantAPI from '../../utils/plantAPI';

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

    handleSearchButton = () => {
        delete this.state.quizStep;
        plantAPI.matchPlants(this.state).then(plants => {
            this.props.handleFilteredPlants(plants);
        });
    }

    handleCheckQuiz = () => {
        if (!this.state.moisture || !this.state.sunlight || !this.state.maintenance|| !this.state.size|| !this.state.humidity|| !this.state.expertiseLevel) {
            return "please complete the quiz!";
        } else {
            return 'find my Perfect Plant!'
        }
    }
    
    render() {
        var steps = [
            <Step1 
                handleSelection={this.handleSelection}
                {...this.state}
                />,
                <Step2 
                handleSelection={this.handleSelection}
                {...this.state}
                />,
                <Step3 
                handleSelection={this.handleSelection}
                {...this.state}
            />
        ]
        return (
            <div className="QuizPage">
                {steps[this.state.quizStep]}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                {this.state.quizStep !== 0 ?
                <button className="btn-lg" onClick={this.handleBackButton}>back</button> : ''}
                {this.state.quizStep === 2 ?
                <button className="btn-lg" onClick={this.handleSearchButton} disabled={!this.state.moisture || !this.state.sunlight || !this.state.maintenance|| !this.state.size|| !this.state.humidity|| !this.state.expertiseLevel}>{this.handleCheckQuiz()}</button> :
                <button className="btn-lg" onClick={this.handleNextButton}>next</button> }
                <br/>

            </div>
        )
    }
}

export default QuizPage;