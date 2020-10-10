import React, {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component{

    //Render for the comment
    renderComments(comments) {
        if (comments == null) {
            return (<div/>)
        }
        const comment = comments.map(cmt => {
            return (
                <li key={cmt.id}>

                    <p>{cmt.comment}</p>
                    <p>-- {cmt.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(Date.parse(cmt.date)))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {comment}
                </ul>

            </div>
        )
    }

    // Render the dish Detail
    renderDish(dish){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>

                    </Card>
                </div>
            )
        }
        else{
            return(
                <div/>
            )
        }
    };

    render() {
        const dish = this.props.dish;
        if (dish != null) {
            return (
                <div className="container">
                    <div className="row">
                    {this.renderDish(dish)}
                    {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }else
            return(
                <div/>
            );
    }

};

export default DishDetail;

