import "./CardBlog.css"
import { CardTemplate } from "./CardTemplate"

export function CardBlog(){
    return(
        <>
            <div className="card-section-container2">
                <div className="cards-title">Latest from the blog</div>
                <div className="multiple-cards">
                    <CardTemplate />
                    <CardTemplate />
                    <CardTemplate />
                    <CardTemplate />
                </div>
            </div>
        </>
    )
}