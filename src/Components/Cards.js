// require('dotenv').config()
import React,{Component} from 'react'
import Card from './Card'

require('dotenv').config()
class Cards extends Component{
    constructor(props) {
        super(props);
        console.log(this.props.data)
        this.state = {
            posts:this.props.data
        }
    }
   
   
   
    render(){
        return(
            <div>
                    <Card title={this.props.data.Title} desc={this.props.data.Plot} poster={this.props.data.Poster} rate={this.props.data.imdbRating}/>
            </div>
        );
    }
}
export default Cards;


//axios library