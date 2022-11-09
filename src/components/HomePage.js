import React from 'react'

function HomePage({text}) {
    return (
        <div className='container my-5'>
            <div className="row mb-2">
                <div className="col-md-4 ">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Description</h5>
                            <p className='card-text'>{text.description}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Temperature</h5>
                            <p className='card-text'>{text.temp.toFixed(1)}&nbsp;°C</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Feels Like</h5>
                            <p className='card-text'>{ text.feels_like}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row mb-2">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Humidity</h5>
                            <p className='card-text'>{text.humidity}%</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Pressure</h5>
                            <p className='card-text'>{text.pressure}mb</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Visibility</h5>
                            <p className='card-text'>{text.visibility}KM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
