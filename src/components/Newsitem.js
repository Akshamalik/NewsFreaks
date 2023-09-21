import React, { Component } from 'react'

export class Newsitem extends Component {
   
    render() {
        let {title,description,imageUrl,newsUrl}=this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width:"18rem"}}>
                    <img src={!imageUrl?"https://images.indianexpress.com/2023/09/tuberculosis-fb.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer"href={newsUrl} target="_blank" className="btn btn-sm btn-dark">More Details</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem