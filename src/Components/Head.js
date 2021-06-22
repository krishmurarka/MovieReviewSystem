import React,{Component} from 'react'
import Cards from './Cards'
import axios from 'axios';
class Head extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             msg:'',
             search:false,
             posts:[]
        }
    }
    inputChange=(event)=>{
        console.log(event.target.value);
        this.setState({
          msg: event.target.value
        })
    }
    search(){
        this.setState({
            search: true,
            msg:this.state.msg
          })

        axios.get(`https://www.omdbapi.com/?t=${this.state.msg}&apikey=${process.env.REACT_APP_APIKEY}`)
        .then(response=>{
            console.log(response.data)
            this.setState({
                posts: response.data
            })
  
          })
        .catch(error=>{console.log(error)})
    }

   
    render(){
        return(
            <div className="pt-2 relative mx-auto text-gray-600">
            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search" name="search" placeholder="Search"  onChange={this.inputChange}/>
            <button type="submit" className="absolute ml-4 top-0 mt-2.5 mr-4 bg-white text-black rounded-sm p-1.5 " onClick={()=>this.search()}>
             search
            </button>
            <div>
                {
                    this.state.search ? <Cards data={this.state.posts}/> : ''
                }
            </div>
          </div>
        );
    }
}
export default Head;