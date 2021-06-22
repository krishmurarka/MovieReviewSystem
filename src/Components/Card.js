import React, { Component } from 'react'
class Card extends Component {
    render() {
      // const {title,desc,poster,rate}=this.props;
   
        return (
           
            <div className="max-w-md mx-auto mt-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="w-full object-cover md:w-48" src={this.props.poster} alt=""/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Movie Name</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{this.props.title}</a>
                <p className="mt-2 text-gray-500">{this.props.desc}</p>
                <span className="mt-1 text-lg leading-tight font-medium text-black">RATING: {this.props.rate}</span>
                <a href="#" className="ml-20 ... text-lg leading-tight font-medium text-black hover:underline ">Read More......</a>
              </div>
            </div>
          </div>
            );
    }
}
export default Card;