import React, {useEffect} from 'react';
import Firt from './Firt_news';
import List from './List_article';
import Header from "./Header";
import Footer from './Footer';

function General() {

  // title of the page
  useEffect(()=>{
    document.title = "General - Noticias Hoy"
  }, [])
  

  return (

    <div >
      <Header/>
      <div className='lg:p-0 px-2 mx-auto newCustomContainer'>
        <div className='mb-2'>
          <Firt category = "/general"/>
        </div>
        <List category = "/general"/>
      </div>
      <Footer/>
    </div>
  );
  }
  
  export default General;