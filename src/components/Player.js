import React, { useState } from 'react'

const Player = ({name, symbol}) => {



    const [palyerName, setPalyerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = ()=>{
        setIsEditing(editing => !editing);
    }
    const handleChange = (e)=>{
        setPalyerName(e.target.value);
    }
    let editablePlayerName = <span className='player-name'> {palyerName} </span>
    if(isEditing){
        editablePlayerName = <input type="text" value={palyerName} onChange={handleChange}/>
    }
  return (
    <>
          <li>
            <span className="player">
                {editablePlayerName}
              <span className='player-symbol'>{symbol}</span>
            </span>
              <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
          </li>
    </>
  )
}

export default Player