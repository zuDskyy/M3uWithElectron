
import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom';
import {Player} from "m3u8-react-player";
import ChannelContext from '../context/useChannelContext';

const M3uPlayer = () => {


  const location = useLocation();
  const channelId = location.pathname.split('/tv/',)
  const data = useContext(ChannelContext);
 const filter = data.filter(index=> index.id == channelId[1])
 console.log()

  return (
    <div style={{display:"flex", justifyContent:"center" }}>
      
    { filter.map(item => 
      <div key={item.id}>
     <h3 style={{textAlign:"end",color:"white"}}>{item.tvname}</h3>
    <div >
     <Player  qualityLevels={false}  hlsQualitySelector={false}  src={item.file} />
      </div>
      </div>)}
    </div>
  )
}

export default M3uPlayer
