import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'

const FavouritesContext = createContext({
    favourites: [],
    total: 0,
    suggestedFavourite: [],
    postFavourites: () => {},
    itemIsFavouriteHandler: (meetupId) => {}
});

export const FavouritesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([])
  const favouritesCollectionRef = collection(db, 'favourites');
  const [suggestedFavourite, setSuggestedFavourite] = useState([])

  function getFavourites() {
    getDocs(favouritesCollectionRef).then(response => {
        const fav = response.docs.map(doc => doc.data())
        setFavourites(fav)
    }).catch(error => console.log(error.message))
}

function postFavourites(name, genre, image, id, video) {
    const data = {
        name: name,
        genre: genre,
        image: image,
        id: id,
        video: video
    }

    const favId = favourites.some((fav) => fav.id === data.id )

    if(favId === false) {
         addDoc(favouritesCollectionRef, data)
        setFavourites([
            ...favourites, data
        ])
    }
}

const itemIsFavouriteHandler = (meetupId) => {
    return favourites.some((meetup) => meetup.id === meetupId)
}

const randomFavouriteGame = () => {
    const random = favourites?.sort(() => 5 - Math.random()).slice(0, 1);
    setSuggestedFavourite(random)
  }

  useEffect(() => {
    getFavourites();
  }, [])

  useEffect(() => {
      console.log(favourites);
      randomFavouriteGame()
  }, [favourites])

  const context = {
      favourites: favourites,
      total: favourites?.length,
      suggestedFavourite: suggestedFavourite,
      postFavourites: postFavourites,
      itemIsFavouriteHandler: itemIsFavouriteHandler,
  }

  return (
      <FavouritesContext.Provider value={context}>
          {props.children}
      </FavouritesContext.Provider>
  )
}

export default FavouritesContext;