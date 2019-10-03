import React from 'react'


class Home extends React.Component{


    render(){
        return (
                    <section className="intro">
						<header>
							<h1>KOKOS</h1>
							<p>Young Wild And Free </p>
							<ul className="actions">
								<li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
							</ul>
						</header>
						<div className="content">
							<span className="image fill" data-position="center"><img src="https://images.unsplash.com/photo-1542295297-b22e37e4904f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="" /></span>
						</div>
					</section>
        )
    }
}

export default Home