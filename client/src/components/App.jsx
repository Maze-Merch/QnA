import React, { Component } from 'react';
import Modal from './Modal.jsx';
import QuestionList from './QuestionList.jsx';
import QuestForm from './QuestForm.jsx';
import AnsForm from './AnsForm.jsx'


class App extends Component {
  constructor() {
    super();

    this.state = {
      imgcheck:false,
      value: '',
      qcount:2,
      acount:true,
      modal: false,
      modalInfo:"",
      ansform: false,
      ansformInfo:"",
      quesform: false,
      quesformInfo:"",
      questions:{
        product_id: "5",
        results: [
        {
        question_id: 36,
        question_body: "What fabric is the top made of?",
        question_date: "2018-06-17T00:00:00.000Z",
        asker_name: "funnygirl",
        question_helpfulness: 11,
        reported: 0,
        answers: {
        1: {
        id: 1,
        body: "Supposedly suede, but I think its synthetic",
        date: "2018-01-17T00:00:00.000Z",
        answerer_name: "Seller",
        helpfulness: 2,
        photos: []
        }}}
        ]
      }
    };
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.ansHelpSubmit = this.ansHelpSubmit.bind(this);
    this.quesHelpSubmit = this.quesHelpSubmit.bind(this);

  }

  productFetcher(){
    fetch('http://52.26.193.201:3000/qa/5')
    .then(response=> response.json())
    .then(data => this.setState({questions:data}))
  }

  componentDidMount(event){
    this.productFetcher();
    console.log(this.state.questions)
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => ({
      value,
    }));
  }

  selectModal = (info="") => {
    this.setState({
      modal: !this.state.modal,
      modalInfo: info}) // true/false toggle
  }

  quesSelectForm = (info="") => {
    this.setState({
      quesform: !this.state.quesform,
      quesformInfo: info}) // true/false toggle
  }

  ansSelectForm = (info="") => {
    this.setState({
      ansform: !this.state.ansform,
      ansformInfo: info}) // true/false toggle
  }
  handleClick() {
    this.setState({qcount:this.state.qcount +2});
    // console.log(this.state.qcount)
  }

  ansHelpSubmit(ansid){
    // console.log("target", ansid)
    fetch(`http://52.26.193.201:3000/qa/answer/${ansid}/helpful`,
    {method:'PUT'}
    ).then( response=>this.productFetcher())
  }

  quesHelpSubmit(quesid){
    // console.log("target", quesid)
    fetch(`http://52.26.193.201:3000/qa/question/${quesid}/helpful`,
    {method:'PUT'}
    ).then( response=>this.productFetcher())
  }

  handleClick3(e) {
    this.setState({imgcheck:!this.state.imgcheck});
  }

  handleClick2() {
    this.setState({acount:!this.state.acount});
  }

  render() {
    return (
      <div>
        <div id="qna">
          <div className="qa-title">QUESTIONS AND ANSWERS</div>
          <div className="inner-addon right-addon">
            <i className="fa fa-search" aria-hidden="true" />
            <input
                type="text"
                className="qa-search"
                placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            />
          </div>
          <div className="questionList">
            <QuestionList
                questions = {this.state.questions.results}
                qcount = {this.state.qcount}
                acount = {this.state.acount}
                handleClick ={this.handleClick}
                handleClick2 ={this.handleClick2}
                selectModal={this.selectModal}
                quesSelectForm={this.quesSelectForm}
                ansSelectForm={this.ansSelectForm}
                ansHelpSubmit={this.ansHelpSubmit}
                quesHelpSubmit={this.quesHelpSubmit}
            />
          </div>
        </div>
        <div className="model">
          <Modal
              displayModal={this.state.modal}
              closeModal={this.selectModal}
              modalInfo={this.state.modalInfo}
          />
          <QuestForm
              displayForm={this.state.quesform}
              quesCloseForm={this.quesSelectForm}
              formInfo={this.state.quesformInfo}
              product={this.state.questions.product_id}
          />
          <AnsForm
              displayForm={this.state.ansform}
              ansCloseForm={this.ansSelectForm}
              ansformInfo={this.state.ansformInfo}
              handleClick3={this.handleClick3}
              imgcheck={this.state.imgcheck}
              product={this.state.questions.product_id}
              question={this.state.ansformInfo}
          />
          </div>
        </div>
    );
  }
}

export default App;
