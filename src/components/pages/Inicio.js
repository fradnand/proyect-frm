
import React from 'react'
import { Link } from 'react-router-dom'

const inicio = () => {
    return (

        <div className="row row-cols-md-4 justify-content-center align-items-center">
            <div className="col">
                <div className="card h-100">
                    <Link to='/'>
                        <img src='./card1.jpg' width='320'/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <Link to='/'>
                        <img src='./card2.jpg' width='320'/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <Link to='/'>
                        <img src='./card3.jpg' width='320'/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default inicio
