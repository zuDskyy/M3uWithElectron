import React, { useContext, useState } from 'react'
import Channel from '../components/channel.js/Channel'
import ListRequest from '../requestMethod'
import '../styles/m3uplayer.css'
import M3uPlayer from './M3uPlayer'
import ChannelContext from '../context/useChannelContext'
const M3uPlaylist = () => {
  
     const {listdata, error} = ListRequest("https://m3u-server.glitch.me/")
     const tvregex = /.*,/g
     const groupregex= (item) => item.title.match(/.*group-title="/g)
     const tvname = (item) =>  item.title.replace(tvregex,'');
     const  group  = (item) =>  item.title.replace(groupregex(item), '').split(",")
     const data = listdata.map((item,index) => ({...item, id : index + 1, group : {groupname: group(item)}, tvname: tvname(item)}))
   
     
   
  return (
    <div>
      <div className="m3uplaylist">
       <ChannelContext.Provider value={data}>
       <Channel  />
        <M3uPlayer  />
        </ChannelContext.Provider>

       </div>
        
    </div>
  )
}

export default M3uPlaylist

