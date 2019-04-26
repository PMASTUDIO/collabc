import React from 'react'
import Category from '../category.jsx'

export default class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            categories: [
                {
                    name: "Top Projects",
                    projects: [{
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
                    }]
                }
            ],
            
            searchCategories: null /*[
                {
                    name: "Projects",
                    projects: [
                        {
                            name: "Search result 1",
                            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt animi expedita deserunt. Eos numquam nulla, non deserunt optio sequi commodi odit impedit corporis cupiditate. Quo deleniti numquam praesentium soluta.",
                            descriptionLong: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime totam hic deserunt consequatur atque sapiente ipsam nemo, dolores rem? At, non sed minima nobis doloribus rerum perspiciatis maxime officia officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic, iste accusamus praesentium deleniti rerum obcaecati explicabo cupiditate at, nisi amet deserunt officiis molestias nostrum atque vero! Enim, id expedita."
                        },
                        {
                            name: "Search result 2",
                            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt animi expedita deserunt. Eos numquam nulla, non deserunt optio sequi commodi odit impedit corporis cupiditate. Quo deleniti numquam praesentium soluta.",
                            descriptionLong: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime totam hic deserunt consequatur atque sapiente ipsam nemo, dolores rem? At, non sed minima nobis doloribus rerum perspiciatis maxime officia officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic, iste accusamus praesentium deleniti rerum obcaecati explicabo cupiditate at, nisi amet deserunt officiis molestias nostrum atque vero! Enim, id expedita."
                        }]

                }
            ]*/

        }
    }

    render() {
        return (
            [<header key="header">
                <img className="img-fluid" src="./images/Logo.png"></img>
            </header>,
            <main key="main">
                <div className="container">
                    <div className="row">
                        <div className="input-group add-on input-search-main">
                            <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text"/>
                            <div className="input-group-btn">
                                <button className="btn btn-white" type="submit"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div className="mid-content container text-center">
                    {this.state.searchCategories ?
                        this.state.searchCategories.map((categorySearch, j) => (
                            <Category category={categorySearch} />
                        ))
                        :
                        this.state.categories.map((categoryMap, j) => (
                            <Category category={categoryMap} />
                        ))
                    }    
                </div>

            </main>]
        );
    }
}
