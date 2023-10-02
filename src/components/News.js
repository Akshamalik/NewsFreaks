import React, { Component } from 'react'
import Newsitem from './Newsitem'
import { Spinner } from './Spinner';

export class News extends Component {
 
    
       
  constructor(){
    super();
   
    this.state={
     articles: [],
     loading:false,
     page:1

    }
}
async componentDidMount()
{
   let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=986a2912626b43c5baf8cd4f777c96ae&page=1&pageSize=${this.props.pageSize}`;
   let data= await fetch(url);
   let parsedData= await  data.json()
   
   this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
}
handleNextClick=async ()=>{
  if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){}
  else{
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=986a2912626b43c5baf8cd4f777c96ae&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  let data= await fetch(url);
  let parsedData= await  data.json()
  this.setState({
    page:this.state.page+1,
    articles:parsedData.articles
  })
}
}
handlePrevClick=async ()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=986a2912626b43c5baf8cd4f777c96ae&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  let data= await fetch(url);
  let parsedData= await  data.json()
  this.setState({
    page:this.state.page-1,
    articles:parsedData.articles
  })

}
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsFreak-Top headlines of the week</h1>
        <Spinner/>
       
        <div className='row'>
        {this.state.articles.map((element)=>{
         return <div className='col-md-4' key={element.url}>
            <Newsitem  title={element.title? element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
     </div>
     <div className="container d-flex justify-content-between">
     <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; GO Back</button>
     <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
     </div>
    </div>
    )
  }
}

export default News