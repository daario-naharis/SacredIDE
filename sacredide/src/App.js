import React,{Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import SolveProblem from './Components/SolveProblem/SolveProblem';
import {ContestData} from './Components/ContestData/ContestData';
import ContestListDisplayer from './Components/ContestListDisplayer/ContestListDisplayer';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Problem from './Components/Problem/Problem';
import Profile from './Components/Profile/Profile';
import Result from './Components/Result/Result';
import Scroll from './Functions/Scroll';
import './App.css';
import HackerEarth from 'hackerearth-node';

const hackerEarth=new HackerEarth('2e9c01fea03ed5c75426d580a4ff85bc34df81e0','');
//I removed the secret API key for security reasons 
//use your own API key as first parameter in HackerEarth()
//for example const hackerEarth=new HackerEarth('SECRET_API_KEY','');

//ek problem ho rhi hai site me
//compile wala button click karne pe uske pichhle bar jo code 
//likha tha ide pe uska response dikha raha console pe aur result me
//par code submitted me sahi code dikha raha wo nahi lag kar raha
//iske liye ek tarika socha hai
//ek nayi button bana lenge ,onButtonShow usko compile karne ke baad 
//use karega user , to jab wo click hogi tabhi results show karenge 
//aur show karne se pahle hi code compile ho chuka hoga so naya result 
//hi aayega samne
//isko sahi karne ke liye onButtonCompile aur aur onButtonSubmit ko
//2 baar run kara denge for loop ka use karke usse ye sahi ho jayega




/*API respone format in case of RUN:

i.e. in case of hackerearth.run()

SUCCESS->

{"run_status": 
  {"memory_used": "64",
   "time_limit": 1,
   "output_html": "hi<br>",
   "memory_limit": 262144,
   "time_used": "0.101504",
   "signal": "OTHER",
   "exit_code": "0",
   "status_detail": "NA",
   "status": "AC",
   "stderr": "",
   "output": "hi\n",
   "async": 0,
   "request_NOT_OK_reason": "",
   "request_OK": "True"
  },
 "compile_status": "OK",
 "code_id": "952f82x"
}

FAILURE->

{"run_status": 
  {"status": "CE",
   "status_detail": "Correct the compilation/syntax errors."
  },
"compile_status": "",
"code_id": "91b524n"
}

*/

const initialState ={
      config:{
        time_limit:1,
        memory_limit:323244,
        input:'',
        source:"",
        language:''
      },
      code:"",
      testCases:"",
      progLang:"",
      submission:{},
      route:'signin',
      isSignedIn: false,
      compileRes:"",
      runRes:"",
      user: {
        id: '',
        name: '',
        email: '',
        submissions: 0,
        joined: ''
      }
}



class App extends Component{

  constructor(){
    super();
    this.state = initialState;
  }

loadUser = (data) =>{
  this.setState({user:{
    id: data.id,
    name: data.name,
    email: data.email,
    submissions: data.submissions,
    joined: data.joined
  }})
}


onCodeChange = (event) =>{
  // console.log(this.state.code);
   this.setState({code:event.target.value});
   // console.log(this.state.code);
}

onLanguageChange = (event) =>{
  this.setState({progLang:event.target.value});
}

onInputChange = (event) =>{
  this.setState({testCases:event.target.value});
}

onButtonSubmit = () =>{
  this.setState(prevState => {
      let config = Object.assign({}, prevState.config);  // creating copy of state variable jasper
      config.source = this.state.code;                     // update the name property, assign a new value                 
      return { config };                                 // return new object jasper object
    })
    this.setState(prevState => {
      let config = Object.assign({}, prevState.config);  // creating copy of state variable jasper
      config.language = this.state.progLang;                     // update the name property, assign a new value                 
      return { config };                                 // return new object jasper object
    })
    this.setState(prevState => {
      let config = Object.assign({}, prevState.config);  // creating copy of state variable jasper
      config.input = this.state.testCases;                     // update the name property, assign a new value                 
      return { config };                                 // return new object jasper object
    })
    hackerEarth.run(this.state.config)
                    .then(result => {
                      const runOutput = JSON.parse(result);
                      // console.log(runOutput);
                      // console.log(runOutput.run_status.output);
                      if(runOutput.compile_status!=="OK"){
                        this.setState({compileRes:"compilation error"}); 
                        this.setState({runRes:""});
                      }
                      else{
                        fetch('https://arcane-escarpment-53129.herokuapp.com/code',{
                          method: 'put',
                          headers: {'Content-Type':'application/json'},
                          body: JSON.stringify({
                            id: this.state.user.id
                          })
                        })
                          .then(response=>response.json())
                          .then(count=>{
                              this.setState(Object.assign(this.state.user,{submissions:count}))
                            })
                          .catch(console.log)
                        // result.preventDefault();
                        this.setState({compileRes:"compilation successful<h3>The output is:</h3>"});
                        this.setState({runRes:runOutput.run_status.output_html});
                      } 

                    })
                    .catch(err => {
                      if(this.state.progLang===""||this.state.progLang==="Select"){
                        this.setState({compileRes:"compilation error<br>please select a language"});
                        this.setState({runRes:""});
                      }
                      else{
                        this.setState({compileRes:"compilation error<br>please write some code"});
                        this.setState({runRes:""});
                      }
                        
                    });

}
onButtonCompile = () =>{
    this.setState(prevState => {
      let config = Object.assign({}, prevState.config);  // creating copy of state variable jasper
      config.source = this.state.code;                     // update the name property, assign a new value                 
      return { config };                                 // return new object jasper object
    })
    this.setState(prevState => {
      let config = Object.assign({}, prevState.config);  // creating copy of state variable jasper
      config.language = this.state.progLang;                     // update the name property, assign a new value                 
      return { config };                                 // return new object jasper object
    })
    this.setState(prevState => {
      let config = Object.assign({}, prevState.config);  // creating copy of state variable jasper
      config.input = this.state.testCases;                     // update the name property, assign a new value                 
      return { config };                                 // return new object jasper object
    })
  hackerEarth.compile(this.state.config)
                        .then((result) => {
                          const compilationOutput = JSON.parse(result);
                          this.setState({runRes:""});
                          if(compilationOutput.compile_status==="OK")
                              this.setState({compileRes:"compilation successful"});
                          else
                              this.setState({compileRes:"compilation error"});
                          // console.log(this.state.compileRes);
                        })
                        .catch(err => {
                          if(this.state.progLang===""||this.state.progLang==="Select"){
                              this.setState({compileRes:"compilation error<br>please select a language"});
                              this.setState({runRes:""});
                          }
                          else{
                              this.setState({compileRes:"compilation error<br>please write some code"});
                              this.setState({runRes:""});
                          }
                        });
}



onRouteChange = (route) =>{
  if(route === 'signin'){ 
    this.setState(initialState)
  }
  else if(route === 'register'){
    this.setState(initialState)
  }
  else{
    this.setState({isSignedIn:true})
  }
  this.setState({route: route});
}

  
  render(){
  return (
    <div className='App'>
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      {
        this.state.route === 'home'
        ?<div>
            <SolveProblem onRouteChange={this.onRouteChange}/>
            <div className='f2 light-red underline ma4'>
              Live Contests
            </div>
            <div>
              <Scroll>
                <ContestListDisplayer ContestData={ContestData}/>
              </Scroll>
            </div>
          </div>
        :(
          this.state.route === 'problem'
          ?<div>
            <Problem 
              onCodeChange={this.onCodeChange}
              onLanguageChange={this.onLanguageChange} 
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit} 
              onButtonCompile={this.onButtonCompile} 
            />
            <Result
              compileRes={this.state.compileRes}
              runRes={this.state.runRes}
              sourceCode={this.state.config.source}
              codeLanguage={this.state.config.language}
              inputCases={this.state.config.input}
            />
          </div>
          :(
            this.state.route==='profile'
            ?<Profile 
              name={this.state.user.name} 
              submissions={this.state.user.submissions}
              />
            :(
              this.state.route === 'signin'
              ?<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              )
            )
          )
      }
      {/*<Contest/>
      <Problem/>
      <SIgnIn/>
      <SignOut/>*/}
    </div>
  );
  }
}

export default App;
