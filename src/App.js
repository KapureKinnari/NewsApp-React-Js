// here we will be using the class based components throughout this application so below is the class component.
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  apiKey=process.env.REACT_APP_NEWS_API_KEY
  
 
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          {/* <News apiKey={this.apiKey} pageSize={this.pageSize} country="us" category="general"/> */}
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
//Difference between class based component and function based component is that in function based some methods are mandatory to write in functional type whereas in class based we
//  can make many methods and call them using this keyword(eg: this.calc())