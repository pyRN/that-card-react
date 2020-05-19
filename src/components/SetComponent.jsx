import React from 'react'

import ExpansionComponent from './ExpansionComponent'

function SetComponent({expansionList}){
    console.log(expansionList.length)
    console.log(expansionList.length > 0)
    console.log(expansionList[0])
    console.log(expansionList)

    let expansions = expansionList.length !== 0 ? 
                        expansionList.map(function(expansion){
                            return <ExpansionComponent expansionName={expansion.name} expansionIcon={expansion.icon_svg_uri} key={expansion.code}/> 
                        }) 
                        : ""

    return ( 
        <div 
            style={
                {
                    display: "block",
                    backgroundColor: "black",
                    margin: 3
                }
        }>
            {
                expansions.length ? expansions : null
            }
        </div>
    )
}

export default SetComponent