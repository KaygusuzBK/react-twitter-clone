import ProfileInfo from "./profileInfo";
import ProfileTwits from "./profileTwits";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col">
        <ProfileInfo />
        <ProfileTwits />
        
      </div>
    </>
  );
}
