import React from 'react'
import { useSelector } from 'react-redux'

//Components
import ExpansionComponent from '../components/ExpansionComponent'

function ExpansionListContainer(){
    const aExpansionsList = useSelector(state => state.oExpansionsListReducer)
    console.log("TESTING: SetComponent Render")

    //Only show expansions if they exist
    if(aExpansionsList.expansions !== undefined && aExpansionsList.expansions.length){
        return ( 
            <div align="center" className="justify-content-center mt-3 mb-5" style={{backgroundColor: "black", display: "flex", flexWrap: "wrap"}}>
                {
                    aExpansionsList.expansions.map(
                        function(expansion){
                            if(!expansion.digital){
                                return <ExpansionComponent key={expansion.name} oExpansionInfo={expansion} /> 
                            }
                        }
                    ) 
                }
            </div>
        )
    }
    return null
}

export default ExpansionListContainer