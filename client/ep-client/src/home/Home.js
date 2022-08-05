import React, {Component} from "react";
import Carousel from "../homeComponents/CarouselComponent";
import Card from "../homeComponents/CardComponent";

class Home extends Component {
    render() 
    {
        return (
            <div>
                <Carousel/>
                <Card/>
            </div>
            );
    }
}

export default Home;