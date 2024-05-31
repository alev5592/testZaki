import "./CardSection.css"
import { CardTemplate } from "./CardTemplate"

export function CardSection(){
    return(
        <>
            <div className="card-section-container">
                <div className="cards-title">Our solutions</div>
                <div className="multiple-cards">
                    <CardTemplate />
                    <CardTemplate />
                    <CardTemplate />
                    <CardTemplate />
                </div>
            </div>
            <div></div>
        </>
    )
}