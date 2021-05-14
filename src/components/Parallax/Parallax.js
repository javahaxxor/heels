import './Parallax.scss';

function Parallax ({img, speed, children}) {
    return(
        <div className="parallax-container">
            <div className="background">
                <img className="background__image" src={img} alt="" />
            </div>
            <div className="foreground">
                <div className="foreground__content">
                <h1>Oooo, parallax</h1>
                </div>
            </div>
        </div>
    )
}

export default Parallax;