import React, { Component } from 'react';
import Modal from './Modal';
import QuestionList from './QuestionList';
import QuestForm from './QuestForm';
import AnsForm from './AnsForm';
import Search from './Search';


class App extends Component {
  constructor() {
    super();

    this.state = {
      searchfield:"",
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
    this.helpSubmit = this.helpSubmit.bind(this);
    this.productFetcher = this.productFetcher.bind(this);
    this.qaSubmit = this.qaSubmit.bind(this);
    this.qaReport = this.qaReport.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.ansSelectForm = this.ansSelectForm.bind(this);
    this.quesSelectForm = this.quesSelectForm.bind(this)

  }
  productFetcher(){
    fetch('http://52.26.193.201:3000/qa/5?count=1000')
    .then(response=> response.json())
    .then(data => this.setState({questions:data}))
    .then(data => console.log("fetched"))
  }

  componentDidMount(){
    // let qnaApp = document.getElementById('qnaApp').style.overflowY = "scroll";
    this.productFetcher();
    // console.log(this.state.questions)
  }

  onSearchChange(event){
    // console.log(event.target.value);
    if(event.target.value.length>2){
    this.setState({searchfield:event.target.value})
    }
    if(event.target.value.length<=2){
      this.setState({searchfield:''})
      }
  }


  ansSelectForm(info="", quesid){
    // console.log("Xadasdasd", quesid)
    this.setState({
      ansform: !this.state.ansform,
      ansformInfo: info,
      ansQuesId:quesid,})
 // true/false toggle
  }

  quesSelectForm(info=""){
    this.setState({
      quesform: !this.state.quesform,
      }) // true/false toggle
  }

  selectModal=(info="") => {
    this.setState({
      modal: !this.state.modal,
      modalInfo: info}) // true/false toggle
  }

  handleClick() {
    this.setState({qcount:this.state.qcount +2000});
     let elem = document.getElementById("qnaApp");
    elem.classList.add("qnaScroll");
    // console.log(this.state.qcount)
  }

  handleClick2() {

    this.setState({acount:!this.state.acount});
    let elem = document.getElementById("qnaApp");
    elem.classList.add("qnaScroll");
    // let elem = document.getElementById(qnaApp);
    // console.log(elem)
    // elem.classList.add("qnaScroll")
  }

  handleClick3(e) {
    this.setState({imgcheck:!this.state.imgcheck});
  }

  qaReport(id, target){
    fetch(`http://52.26.193.201:3000/qa/${target}/${id}/report`,
    {method:'PUT'}
    )
    .then( response=>{this.productFetcher()})
    console.log("reported!", id)
  }

  helpSubmit(id, target){
    console.log("target", id, target)
    fetch(`http://52.26.193.201:3000/qa/${target}/${id}/helpful`,
    {method:'PUT'}
    ).then( response=>this.productFetcher())
  }

qaSubmit(submitObj, id, target, event){
  console.log("target",submitObj, id.product, target)

  event.preventDefault();
  let url;
  if (target === "answer"){
    url = `http://52.26.193.201:3000/qa/${id}/answers`
  } else if (target === "question"){
    url = `http://52.26.193.201:3000/qa/${id}`
  }
  fetch(url,
  {
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(submitObj)
  })
  .then(response=>{this.productFetcher()})
  .then(response=>console.log("submitted"));
}

  render(){

    let filteredQuestions=this.state.questions.results
    .filter(question=>{return question.question_body
    .toLowerCase().includes(this.state.searchfield.toLowerCase())})

    return (
      <div id="qnaApp">
        <div className="row">

        <div id="qna"><div className="qnaSpacer d-none d-lg-block col-lg-2" />
          <div className="qa-title">QUESTIONS AND ANSWERS</div>
          <Search
            onSearchChange={this.onSearchChange}
          />
          <div className="questionList">
            <QuestionList
                questions = {filteredQuestions}
                handleClick ={this.handleClick}
                handleClick2 ={this.handleClick2}
                acount = {this.state.acount}
                helpSubmit={this.helpSubmit}
                qaReport = {this.qaReport}
                ansSelectForm={this.ansSelectForm}
                qcount = {this.state.qcount}
                quesSelectForm={this.quesSelectForm}
                selectModal={this.selectModal}
                searchfield= {this.state.searchfield}
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
              qaSubmit={this.qaSubmit}
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
              qaSubmit={this.qaSubmit}
          />
          </div>
          <div className="qnaSpacer d-none d-lg-block col-lg-2" />
          </div>
        </div>
    );
  }
}

export default App;
