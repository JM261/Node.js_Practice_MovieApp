import Axios from 'axios'
// import { response } from 'express'
import React, { useEffect, useState } from 'react'

function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)

    useEffect(() => {

        let variables = {
            userFrom,
            movieId
        }

        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                setFavoriteNumber(response.data.favoriteNumber)
                if (response.data.success) {

                } else {
                    alert('숫자 정보를 가져오데 실패했습니다.')
                }
            })


        Axios.post('/api/favorite/favorited', variables)
            .then(response => {
                setFavorited(response.data.favorited)
                if (response.data.success) {

                } else {
                    alert('정보를 가져오는데 실패했습니다.')
                }
            })


    }, []) 


  return (
        <div>
            <button>{Favorited ? "Not Favorite" : "Add to Favorite "} {FavoriteNumber}  </button>

        </div>
  )
}

export default Favorite