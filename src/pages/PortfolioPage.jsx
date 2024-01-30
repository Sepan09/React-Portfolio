import Card from "../components/card";
// import { Link } from 'react-router-dom'

export default function Portfolio() {
    return (
        <div className="d-flex flex-column align-items-center " >
            <h3 className="pt-5 float-start">Portfolio</h3>
            <div className="d-flex flex-row pt-5 gap-5">
                <Card />
                <Card />
            </div>

            <div className="d-flex flex-row pt-5 gap-5">
                <Card />
                <Card />
            </div>

            <div className="d-flex flex-row pt-5 gap-5">
                <Card />
                <Card />
            </div>



        </div>
    )
}