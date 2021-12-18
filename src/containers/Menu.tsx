import React from 'react'
import { useStore } from '../store'

const Menu = () => {
    const {actions} = useStore();
    const onClickImage = () => {
        actions.addTile('wall');
        console.log("hola");
    }
    return (
        <div className="ui grid w-80">
            <div className="bg-gray-100 p-3 border-gray-500">
                
                <img src="/stone.jpg" alt="stone" onClick={onClickImage}/>
                asdasdsaasda
            </div>
        </div>
    )
}

export default Menu
