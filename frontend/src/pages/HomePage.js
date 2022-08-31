import React from "react";
import "../styles/components/pages/HomePage.css"

const HomePage = (props) => {
    return (
        <div class="wrap">
            <div class="Classs">
                <img src="images/Classes/fitness.jpeg" width="400px" alt="Fitness" />
                <div class="text">
                    <h1>Fitnnes Class</h1>
                    <h2 class="animate-text">08am to 22PM</h2>
                </div>
            </div>


            <div class="Classs">
                <img src="images/Classes/YOGA.jpg" width="400px" alt="Yoga" />
                <div class="text">
                    <h1>Yoga Class</h1>
                    <h2 class="animate-text">Monday, Wednesday, Friday 16PM</h2>
                </div>
            </div>

            <div class="Classs">
                <img src="images/Classes/KB.jpg" width="400px" alt="KB" />
                <div class="text">
                    <h1>Kick Boxing Class</h1>
                    <h2 class="animate-text">Tuesday, Thursday 16PM</h2>
                </div>
            </div>
        </div>
    );
}

export default HomePage;


