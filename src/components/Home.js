import React, {Component} from 'react';

export class Home extends Component{
  render(){
    return(
      <div className="mt-5 d-flex justify-content-left flex-wrap" >
        <h3 className="block">&#123;yourName&#125;</h3>
        <p>&#123;email&#125;</p>
      </div>
    )
  }
}