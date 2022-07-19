
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { getProfile } from '../../services/profileService'

const ProfileView = (props) => {
  const [profileDetails, setProfileDetails] = useState({})
  const location = useLocation()
  const profile = location.state.profile
  
  useEffect(() => {
    const fetchProfileDetails = async () => {
      const profileData = await getProfile(profile._id)
      setProfileDetails(profileData)
    } 
    fetchProfileDetails()
  }, [profile._id])
  return (
    <>
      <main>
        {/* cant find a default picture yet but will be adding one once one is found */}
        {/* <img 
          src={
            location.state.profile.photo
            ?location.state.profile.photo
            :
          } 
          alt="" 
          srcset="" /> */}
        <h1>Hey Look Its {profile.name}</h1>
        <div>
        {location.state.profile.hangoverTip === ""?
        <h2>Hangover Tip: {profile.hangoverTip}</h2>
        :
        <h2>No Hangover Tips yet</h2>
        
        }
        </div>
        {props.user?.profile === profile?._id &&
        <Link to="/hangover-tip" key={profile} >
          <button>Add a new tip?</button>
        </Link>
        }
        <h2>Favorite Drinks:{profile.favoriteDrinks}</h2>
        <h2>Personal Creations:{profile.drinkList}</h2>
      </main>
    </>
  )
}

export default ProfileView