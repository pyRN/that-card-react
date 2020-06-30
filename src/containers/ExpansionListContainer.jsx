import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Components
import ExpansionComponent from '../components/ExpansionComponent'

function ExpansionListContainer(){
    const aExpansionsList = useSelector(state => state.oExpansionsListReducer)
    const fDispatch = useDispatch()

    //Call scryfall API for set names - do this only once
    useEffect(() => {
        //Only make one call to this API for list of sets and save in state
        if(!aExpansionsList.expansions.length){
            fetch('https://api.scryfall.com/sets')
            .then(response => response.json())
            .then(data => {
                fDispatch({ 
                    type: 'SET_EXPANSION_LIST',
                    payload: data.data
                })
            });
        }
    }, [])

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

    //If no expansion list, show loading 
    return(
        <div align="center" className="justify-content-center mt-3">
            <h2 className="text-primary">Loading. . .</h2>
        </div>
    )
}

export default ExpansionListContainer