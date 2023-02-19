import { useParams } from 'react-router-dom';
import Profile from './Profile';

const ProfileWrappper = () => {
  const { userId } = useParams();

  return ( 
    <Profile  userId={userId}/>
   );
}

 export default ProfileWrappper;