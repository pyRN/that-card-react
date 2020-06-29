import React, { useState } from 'react'
import PropTypes from 'prop-types'         //PropTypes is used mainly for validation
import { connect } from 'react-redux'      //Connect allows you to use the store

//Actions
import { getExpansionsList, getCurrentUser } from '../actions/index'

//Components
import ExpansionComponent from './ExpansionComponent'

class SetComponent extends React.Component{
    componentDidMount(){
        this.props.getExpansionsList()
        this.props.getCurrentUser()
    }

    render(){
        //Props
        const {expansions} = this.props.expansionsList
        const {userEmail} = this.props.currentUser

        console.log("TESTING: SetComponent Render")

        //Only show expansions if they e
        if(expansions !== undefined && expansions.length){
            return ( 
                <div align="center" className="justify-content-center mt-3 mb-5" style={{backgroundColor: "black", display: "flex", flexWrap: "wrap"}}>
                    {
                        expansions.map(
                            function(expansion){
                                if(!expansion.digital){
                                    return <ExpansionComponent expansionInfo={expansion} userEmail={userEmail} /> 
                                }
                            }
                        ) 
                    }
                </div>
            )
        }
        return null
    }
}

//Make propType template
SetComponent.propTypes = {
    getExpansionsList: PropTypes.func.isRequired,
    expansionsList: PropTypes.object.isRequired,
    getCurrentUser: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    //Keys are from  index.js reducer object
    expansionsList: state.expansionsList,     
    currentUser: state.currentUser
})

//Conecting the store and wrapping the component
export default connect(mapStateToProps, { getExpansionsList, getCurrentUser })(SetComponent)