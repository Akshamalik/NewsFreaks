import React, { Component } from 'react'
import Newsitem from './Newsitem'

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
   let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=986a2912626b43c5baf8cd4f777c96ae&page=1";
   let data= await fetch(url);
   let parsedData= await  data.json()
   
   this.setState({articles:parsedData.articles})
}
handleNextClick=async ()=>{
  
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=986a2912626b43c5baf8cd4f777c96ae&page=${this.state.page+1}`;
  let data= await fetch(url);
  let parsedData= await  data.json()
  this.setState({
    page:this.state.page+1,
    articles:parsedData.articles
  })
}
handlePrevClick=async ()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=986a2912626b43c5baf8cd4f777c96ae&page=${this.state.page-1}`;
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
        <h2>NewsFreak-Top headlines of the week</h2>
       
        <div className='row'>
        {this.state.articles.map((element)=>{
         return <div className='col-md-4' key={element.url}>
            <Newsitem  title={element.title? element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
     </div>
     <div className="container d-flex justify-content-between">
     <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={handlePrevClick}>&larr; GO Back</button>
     <button type="button" class="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
     </div>
    </div>
    )
  }
}

export default News