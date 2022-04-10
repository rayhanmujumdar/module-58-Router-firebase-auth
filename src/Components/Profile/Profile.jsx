import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init/firebase.init';
const Profile= () => {
    const [user] = useAuthState(auth)
    return (
        <div className='flex  justify-center items-center flex-col'>
            <h1 className='text-center my-2 text-3xl font-semibold'>Profile</h1>
            {
               user?.uid ? <div className='flex flex-col justify-center text-center items-center'>
                   <img src={user.photoURL} alt="" className='rounded-full w-46' />
                   <p className='text-2xl m-2'>{user.displayName}</p>
                   <p>Email: {user.email}</p>
               </div> : 'No body found'
            }
        </div>
    );
};

export default Profile;