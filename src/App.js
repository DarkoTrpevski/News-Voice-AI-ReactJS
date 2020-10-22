import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles';


const alanKey = 'b4cca9e5a4e9b792f6e33aec98260be32e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

  const classes = useStyles();

  const[newsArticles, setnewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command === 'newHeadLines') {
          setnewsArticles(articles);
        }
      }
    })
  }, [])

  return (
    <div className="App">
      <div className = {classes.logoContainer}>
        <img className = {classes.alanLogo} src = "https://alan.app/voice/images/previews/preview.jpg" alt = "Alan AI Logo" />
      </div>
      <NewsCards articles = {newsArticles} />
    </div>
  );
}

export default App;
