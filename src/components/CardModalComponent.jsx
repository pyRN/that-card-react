import React from 'react'

function CardModalComponent({ cardInfo }){
    let imgId = /^[A-Za-z]/.test(cardInfo.id) ? cardInfo.id : 'a' + cardInfo.id
    return(
        <div className="modal fade" id={ imgId.replace(/-/g, "")} tabIndex="-1" role="dialog" >
            <div className="modal-dialog d-flex justify-content-center" role="document">
                <div className="modal-content bg-dark border border-success">
                    <div className="modal-header bg-dark  text-center m-auto">
                        <h5 className="text-primary text-center text-wrap" id="exampleModalLabel">{cardInfo.name}</h5>
                    </div>
                    <div className="modal-body bg-dark border border-success">
                        <img src={cardInfo.image_uris.normal} className="card-img-top" alt={cardInfo.name} style={{height: "75%", width: "75%"}}/>
                    </div>
                    <div className="modal-footer bg-dark border border-success d-flex justify-content-center">
                        <button type="button" className="btn btn-danger btn-block" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardModalComponent