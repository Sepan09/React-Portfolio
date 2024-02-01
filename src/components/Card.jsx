
export default function Card() {
    return (
        <div className="card width: 18rem;" >
            <div className="card-body">
                {/* <img src="../assets/sun.jpg" className="card-img-top" alt="..."/>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p> */}
                <a href="https://github.com/" className="btn">
                <img src="../assets/sun.jpg" className="card-img-top" alt="..."/>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                </a>
                <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://github.com/"
                role="button"
                ><i className="fab fa-github text-dark"></i>
                </a>
            </div>
        </div>
    )
}