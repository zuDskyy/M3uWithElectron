import React, { useState } from "react";
import "../../styles/home.css";
import { Icon } from "semantic-ui-react";
import { Grid, Paper, Tooltip } from "@mui/material";
import zplayer from '../../assets/z-playerLogo.jpg'
import { Link } from "react-router-dom";

const Home = () => {
  const [activeItem, setActiveItem] = useState(false);

  const handleItemClick = () => {
    setActiveItem(true);
  };

    const imgdata = [
      {
        id:1,
        img:"https://sport.24tv.ua/resources/photos/news/201908/1186840.jpg?v=1661273800000"
      },
      {
        id:2,
        img:"https://static.vecteezy.com/system/resources/previews/010/586/397/non_2x/breaking-news-background-business-or-technology-template-breaking-news-text-on-dark-blue-with-light-effect-digital-technology-tv-news-show-broadcast-design-vector.jpg"
      },
      {
        id:3,
        img:"https://c0.wallpaperflare.com/preview/993/558/358/screen-netflix-film-night-movie-night.jpg"
      }
    ]
  return (
    <div className="home">
      <nav className="homeMenu">
        <div className="homeMenuContainer">  
        <div style={{paddingLeft:"2em" ,display: "flex",alignItems:"center" ,gap:"10px"}}>
               <img src={zplayer}alt="" width="40px" height="40px" style={{borderRadius:"50%"}}/>
                <h2 style={{marginBottom:20, fontFamily: "Play"}}>Z-Player</h2>
             </div>
          <ul className="listMenu">
            
            <li className="homeMenuIcon">
              <Icon color="blue" name="h" /> Home{" "}
            </li> 
            <Link to="/tv">
            <li className="homeMenuIcon">

              <Icon color="blue" name="play" /> Tv
            </li> 
             </Link>
          </ul>
        </div>
      </nav>

      <div className="middleGrid">
        <div className="middleLeftContent">
          <h2>
            Welcome, we are glad to have you visit us, we offer all channels in
            one space, comfortable and customized Z-player
          </h2>
          <Link to="/tv">
          <button>Get Started</button>
          </Link>
        </div>
        <div className="middleRightCard">
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          {imgdata.map((value) => (
            <Grid key={value.id} item>
              <Tooltip  sx={{padding:"10px"}}  disableFocusListener disableTouchListener >
              <Paper
                sx={{
                  height: 250,
                  width: 300,
                  backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  backgroundImage: `url(${value.img})`,
                  backgroundPosition: "center center",
			            backgroundSize: "cover",
                  
                  
                }}
                
              />
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
