import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import './ProfilePage.css';

const ProfilePage = () => {
  const user = {
    profilePictureUrl: 'https://media.licdn.com/dms/image/D5603AQHn4sMCYDpHZA/profile-displayphoto-shrink_800_800/0/1717340380038?e=1723075200&v=beta&t=Nk1B3pVVvmiubDZPjW1knXS-3SpBL9D7GGVUDFHY0fw',
    name: 'Samanthula Sai Naga Alekhya',
    email: 'samanthulasainagaalekhya@gmail.com',
    bio: 'I am Samanthula Sai Naga Alekhya, currently a final year undergraduate student in the discipline of Information Technology at Gudlavalleru Engineering College who is seeking a challenging role in a dynamic IT environment to apply my skills, to make meaningful contributions to the organization’s success and further enhance my expertise in a fast-paced professional environment.'
  };

  return (
    <div className="profile-page">
      <ProfilePicture url={user.profilePictureUrl} />
      <ProfileDetails name={user.name} email={user.email} bio={user.bio} />
    </div>
  );
};

export default ProfilePage;