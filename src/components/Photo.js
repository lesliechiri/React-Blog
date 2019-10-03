import React from 'react'


class Gallery extends React.Component{


    render(){
        return (
            <a href={this.props.photo.url} className="landscape">
                <img src={this.props.photo.url} alt="" /></a>
        )
    }
}

export default Gallery