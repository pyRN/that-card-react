import  React from 'react'

function FilterNavBarComponent({setViewSelected}){
    
    const handleSave = (e) =>{
        console.log("save btn clicked")
    }

    return(
        <li class="nav-item dropup btn btn-sm btn-outline-primary btn-secondary ml-1" style={{color: "black"}}>
            <a class="nav-link dropdown-toggle btn-sm" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">White</a>
                <a class="dropdown-item" href="#">Blue</a>
                <a class="dropdown-item" href="#">Black</a>
                <a class="dropdown-item" href="#">Red</a>
                <a class="dropdown-item" href="#">Green</a>
                <a class="dropdown-item" href="#">Artifact</a>
                <a class="dropdown-item" href="#">Land</a>
            <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Mythic</a>
                <a class="dropdown-item" href="#">Rare</a>
                <a class="dropdown-item" href="#">Uncommon</a>
                <a class="dropdown-item" href="#">Common</a>
            </div>
        </li>
    )
}

export default FilterNavBarComponent