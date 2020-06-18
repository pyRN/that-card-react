import React, {setState, useState} from 'react'

//Multimedia
import ChandraImg from '../multimedia/Counter_Img_Chandra.jpg'
import GideonImg from '../multimedia/Counter_Img_Gideon.jpg'
import JaceImg from '../multimedia/Counter_Img_Jace.jpg'
import LilianaImg from '../multimedia/Counter_Img_Liliana.jpg'
import NissaImg from '../multimedia/Counter_Img_Nissa.jpg'

function LifeCounterComponent(){
    const [playerOneLife, setPlayerOneLife] = useState({
        life: 20, 
        poison: 0,
        experience: 0
    })
    const [playerTwoLife, setPlayerTwoLife] = useState({
        life: 20, 
        poison: 0,
        experience: 0
    })

    const profileImgs = [ChandraImg, GideonImg, JaceImg, LilianaImg, NissaImg]

    return(
        <div align="center" className="justify-content-center mt-3 mb-5" style={{backgroundColor: "black", display: "flex", flexWrap: "wrap"}}>
            <div className="card rounded d-inline-flex col-sm-2 m-3 border border-primary" style={{backgroundImage: `url(${profileImgs[Math.floor(Math.random() * profileImgs.length)]})`, backgroundSize: 'cover'}}>
                <h5 className="card-title text-primary">Player 1</h5>
                <div className="card-body">
                        <button className="btn btn-success btn-sm col-md">+</button>
                            <h2 className="text-primary col-md">{playerOneLife.life}</h2>
                        <button className="btn btn-danger btn-sm col-md">-</button>
                </div>
            </div>
            <div className="rounded d-inline-flex col-sm-2 m-3 border border-primary bg-secondary">
                <h2>Dice</h2>
                <div className="card-body">
                    <button>Coin</button>
                    <button>D-6</button>
                    <button>D-20</button>
                </div>
            </div>
            <div className="card rounded d-inline-flex col-sm-2 m-3 border border-primary" style={{backgroundImage: `url(${profileImgs[Math.floor(Math.random() * profileImgs.length)]})`, backgroundSize: 'cover'}}>
                <h5 className="card-title text-primary">Player 2</h5>
                <div className="card-body">
                        <button className="btn btn-success btn-sm col-md">+</button>
                            <h2 className="text-primary col-md">{playerTwoLife.life}</h2>
                        <button className="btn btn-danger btn-sm col-md">-</button>
                </div>
            </div>
        </div>
    )
}

export default LifeCounterComponent