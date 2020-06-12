import React from 'react'

import ExpansionComponent from './ExpansionComponent'

function SetComponent({ expansionList, onSetClicked, setNavTitle, setIsFromSet, isUserLogin }){
    console.log("TESTING: SetComponent Render")

    if(expansionList !== undefined && expansionList.length){
        console.log(expansionList)
        return ( 
            <div align="center" className="justify-content-center mt-3 mb-5" style={{backgroundColor: "black", display: "flex", flexWrap: "wrap"}}>
                {expansionList.map(function(expansion){
                    if(!expansion.digital){
                        return <ExpansionComponent 
                                    expansionInfo={expansion} 
                                    onSetClicked={onSetClicked} 
                                    setNavTitle={setNavTitle} 
                                    setIsFromSet={setIsFromSet} 
                                    isUserLogin={isUserLogin}
                                    key={expansion.id}/> 
                    }
                }) }
            </div>
        )
    }
    return null
}

export default SetComponent