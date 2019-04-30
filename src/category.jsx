import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default class Category extends React.Component {

    render() {
        return (
            [<h1 key="titleCategory" className="text-uppercase">{this.props.category.name}</h1>,
            <div key="projectsCategory" className="row">
                {this.props.category.projects.map((project, i) => (
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
                            <button type="button" className="btn-null"><i className="fas fa-star"></i></button>
                        </div>
                        </div>
                    </div>
                </div>
                ]
                ))}
            </div>]
        );
    }
}
