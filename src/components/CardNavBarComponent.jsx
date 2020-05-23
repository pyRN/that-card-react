import  React from 'react'

function CardNavBarComponent(){
    const handleOnClick = (e) =>{
        e.preventDefault()

        switch(e.target.id){
            case "cardViewBtn":
                console.log("card view clicked")
                break
            case "tblViewBtn":
                console.log("table view clicked")
                break
            case "chkListViewBtn":
                console.log("check list view clicked")
                break
            default:
                break
        }
    }

    const handleSave = (e) =>{
        console.log("save btn clicked")
    }

    return(
        <nav className="navbar navbar-expand-lg  fixed-bottom justify-content-end">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active">
                    <input type="radio" name="options" id="cardViewBtn" autoComplete="off" checked onClick={handleOnClick}/> Card View
                </label>
                <label className="btn btn-secondary">
                    <input type="radio" name="options" id="tblViewBtn" autoComplete="off" onClick={handleOnClick}/> Table View
                </label>
                <label className="btn btn-secondary">
                    <input type="radio" name="options" id="chkListViewBtn" autoComplete="off" onClick={handleOnClick}/> Checklist
                </label>
            </div>
            <div className="btn-group">
                <button className="btn btn-outline-success bg-dark m-3" type="submit" onClick={handleSave}>SAVE</button>
            </div>
            
        </nav>
    )
}

export default CardNavBarComponent