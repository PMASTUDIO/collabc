import React from 'react'

export default class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            topProjects: [{
                    name: "Hello Jonathan",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt animi expedita deserunt. Eos numquam nulla, non deserunt optio sequi commodi odit impedit corporis cupiditate.",
                    descriptionLong: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime totam hic deserunt consequatur atque sapiente ipsam nemo, dolores rem? At, non sed minima nobis doloribus rerum perspiciatis maxime officia officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic, iste accusamus praesentium deleniti rerum obcaecati explicabo cupiditate at, nisi amet deserunt officiis molestias nostrum atque vero! Enim, id expedita."
                },
                {
                    name: "Hello Filipe",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt animi expedita deserunt. Eos numquam nulla, non deserunt optio sequi commodi odit impedit corporis cupiditate. Quo deleniti numquam praesentium soluta.",
                    descriptionLong: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime totam hic deserunt consequatur atque sapiente ipsam nemo, dolores rem? At, non sed minima nobis doloribus rerum perspiciatis maxime officia officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic, iste accusamus praesentium deleniti rerum obcaecati explicabo cupiditate at, nisi amet deserunt officiis molestias nostrum atque vero! Enim, id expedita."
                },
                {
                    name: "Hello Pedro",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt animi expedita deserunt. Eos numquam nulla, non deserunt optio sequi commodi odit impedit corporis cupiditate. Quo deleniti numquam praesentium soluta.",
                    descriptionLong: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime totam hic deserunt consequatur atque sapiente ipsam nemo, dolores rem? At, non sed minima nobis doloribus rerum perspiciatis maxime officia officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic, iste accusamus praesentium deleniti rerum obcaecati explicabo cupiditate at, nisi amet deserunt officiis molestias nostrum atque vero! Enim, id expedita."
                }
            ]
        }
    }

    render() {
        return (
            [<header key="header">
                <img className="img-fluid" src="./images/Logo.png"></img>
            </header>,
            <main key="main">
                <div className="container">
                    <div className="input-group add-on">
                        <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text"/>
                        <div className="input-group-btn">
                            <button className="btn btn-light" type="submit"><i className="fas fa-search"></i></button>
                        </div>
                    </div>
                </div>
                
                <div className="mid-content container text-center">
                    <h1 className="text-uppercase">Top Projects</h1>
                    <div className="row">
                    {this.state.topProjects.map((project, i) => (
                        [<div key={i} className="col-sm-3 top-item">
                            <h2>{project.name}</h2>
                            <p >{project.description}</p>
                            <button type="button" data-toggle="modal" data-target={"#modalMore" + i} className="btn btn-primary">More</button>
                        </div>,
                        
                        <div key={"id" + i} className="modal fade" id={"modalMore" + i} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">{project.name}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {project.descriptionLong}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        ]
                        
                    ))}
                    </div>
                </div>
            </main>]
        );
    }
}
