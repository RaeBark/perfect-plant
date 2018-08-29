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
        // this.handleUpdateExpertiseLevel = this.handleUpdateExpertiseLevel.bind(this);
        // this.handleUpdateMoisture = this.handleUpdateMoisture.bind(this);
        // this.handleUpdateMaintenance = this.handleUpdateMaintenance.bind(this);
        // this.handleUpdateSunlight = this.handleUpdateExpertiseLevel.bind(this);
        // this.handleUpdateSize = this.handleUpdateSize.bind(this);
        // this.handleUpdateHumidity = this.handleUpdateHumidity.bind(this);
    }
    
    
    // handleUpdateMoisture = () => {
    //     this.setState({moisture})
    // }
    
    // handleUpdateSunlight = () => {
    //     this.setState({sunlight})
    // }
    
    // handleUpdateMaintenance = () => {
    //     this.setState({maintenance})
    // }
    
    // handleUpdateSize = () => {
    //     this.setState({size})
    // }
    
    // handleUpdateExpertiseLevel = () => {
    //     this.setState({expertiseLevel})
    // }
    
    // handleUpdateHumidity = () => {
    //     this.setState({humidity})
    // }
    
    
    
    
    
    
    
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
                // handleUpdateMaintenance={this.handleUpdateMaintenance}
                // handleUpdateSunlight={this.handleUpdateSunlight}
            />,
            <Step2 
                // handleUpdateMoisture={this.handleUpdateMoisture}
                // handleUpdateHumidity={this.handleUpdateHumidity}
            />,
            <Step3 
                // handleUpdateSize={this.handleUpdateSize}
                // handleUpdateExpertiseLevel={this.handleUpdateExpertiseLevel}
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