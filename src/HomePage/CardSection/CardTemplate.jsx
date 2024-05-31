import "./CardTemplate.css"

export function CardTemplate(){

    // 320x398 

    return(
        <>
            <div className="card-box">
                <img className="card-temp-pic" src="src\icons\PictureSample1.png" alt="" />
                <h3 className="h3-card">Industry graded quality</h3>
                <article className="article-card">Lorem ipsum dolor sit amet adipiscit arisma alus
                    nacumi so anum arimeto remuscit alumni
                </article>

                <button className="card-button">Discover</button>
            </div>
        </> 
    )
}