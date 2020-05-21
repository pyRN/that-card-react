import React from 'react'

import ExpansionComponent from './ExpansionComponent'

function SetComponent({ expansionList, onSetClicked, setNavTitle }){
    console.log("TESTING: SetComponent Render")

    if(expansionList !== undefined && expansionList.length){
        return ( 
            <div align="center" className="justify-content-center mt-3" style={{backgroundColor: "black"}}>
                {expansionList.map(function(expansion){
                    return <ExpansionComponent expansionName={expansion.name} expansionIcon={expansion.icon_svg_uri} key={expansion.code} expansionCode={expansion.code} onSetClicked={onSetClicked} setNavTitle={setNavTitle}/> 
                }) }
            </div>
        )
    }
    return null
}

export default SetComponent