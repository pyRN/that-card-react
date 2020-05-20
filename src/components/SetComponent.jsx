import React from 'react'

import ExpansionComponent from './ExpansionComponent'

function SetComponent({expansionList, onSetClicked}){
    let expansions = expansionList.length !== 0 ? 
                        expansionList.map(function(expansion){
                            return <ExpansionComponent expansionName={expansion.name} expansionIcon={expansion.icon_svg_uri} key={expansion.code} expansionCode={expansion.code} onSetClicked={onSetClicked}/> 
                        }) 
                        : ""

    return ( 
        <div align="center" className="justify-content-center" style={{backgroundColor: "black"}}>
            {
                expansions.length ? expansions : null
            }
        </div>
    )
}

export default SetComponent