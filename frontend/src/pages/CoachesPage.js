import React from "react";
import "./../styles/components/pages/CoachesPage.css"

const CoachesPage = (props) => {
    return (
        <div class="wrap">
            <div class="tile">
                <img src="images/Coaches/Coach1.jpg" width="200px" alt="Coach1" />
                <div class="text">
                    <h1>Fitnnes Coach</h1>
                    <h2 class="animate-text">Gonzalo Gudiño</h2>
                </div>
            </div>


            <div class="tile">
                <img src="images/Coaches/Coach3.jpg" width="200px" alt="Coach3" />
                <div class="text">
                    <h1>Yoga Coach</h1>
                    <h2 class="animate-text">Martina Gomez</h2>
                </div>
            </div>

            <div class="tile">
                <img src="images/Coaches/Coach2.jpg" width="200px" alt="Coach2" />
                <div class="text">
                    <h1>Kick Boxing Coach</h1>
                    <h2 class="animate-text">Carlos muñoz</h2>
                </div>
            </div>
        </div>

    );
}

export default CoachesPage;