function ProfileAvatar({ Image }) {
  return (
    <>
      <div>
        <img
          src={Image}
          alt="profile"
          className="w-full h-full object-cover rounded-full border-2 border-black "
        />
      </div>
    </>
  );
}

export default ProfileAvatar;
