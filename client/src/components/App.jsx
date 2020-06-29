import React, { Component } from 'react';
import Modal from './Modal';
import QuestionList from './QuestionList';
import QuestForm from './QuestForm';
import AnsForm from './AnsForm'


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
      ansQuesId:"",
      quesform: false,
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
    this.productFetcher = this.productFetcher.bind(this);
    this.ansSubmit=this.ansSubmit.bind(this);
    this.ansReport=this.ansReport.bind(this);
  }

  productFetcher(){
    fetch('http://52.26.193.201:3000/qa/5')
    .then(response=> response.json())
    .then(data => this.setState({questions:data}))
    .then(data => console.log("fetched"))
  }

  componentDidMount(){
    this.productFetcher();
    // console.log(this.state.questions)
  }

  selectModal = (info="") => {
    this.setState({
      modal: !this.state.modal,
      modalInfo: info}) // true/false toggle
  }

  quesSelectForm = (info="") => {
    this.setState({
      quesform: !this.state.quesform,
      }) // true/false toggle
  }

  ansSelectForm = (info="", quesid) => {
    // console.log("Xadasdasd", quesid)
    this.setState({
      ansform: !this.state.ansform,
      ansformInfo: info,
      ansQuesId:quesid,})
 // true/false toggle
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

  ansReport(ansid){
    fetch(`http://52.26.193.201:3000/qa/answer/${ansid}/report`,
    {method:'PUT'}
    )
    // .catch(error=>throw(error))
    .then( response=>{this.productFetcher()})
    // console.log(this)
    console.log("reported!", ansid)
  }

ansSubmit(ansObj, quesid, event){
  event.preventDefault();
  fetch(`http://52.26.193.201:3000/qa/${quesid}/answers`,
  {
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(ansObj)
  })
  .then(response=>{this.productFetcher()})
  .then(response=>console.log("submitted"));
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
                handleClick ={this.handleClick}
                handleClick2 ={this.handleClick2}
                acount = {this.state.acount}
                ansHelpSubmit={this.ansHelpSubmit}
                ansReport = {this.ansReport}
                ansSelectForm={this.ansSelectForm}
                qcount = {this.state.qcount}
                quesHelpSubmit={this.quesHelpSubmit}
                quesSelectForm={this.quesSelectForm}
                selectModal={this.selectModal}
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
              ansQuesId={this.state.ansQuesId}
              ansSubmit={this.ansSubmit}
          />
          </div>
        </div>
    );
  }
}

export default App;
