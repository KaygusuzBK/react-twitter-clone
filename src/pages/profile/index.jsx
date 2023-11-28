import ProfileInfo from "./profileInfo";
import ProfileTwits from "./profileTwits";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Profile() {
  const { slug } = useParams();

  const { accounts } = useSelector((state) => state.auth);

  let hesaplar = null;

  accounts.forEach((account) => {
    if (account.username === slug) {
      hesaplar = account;
    }
  });

  return (
    <>
      <div className="flex flex-col">
        <ProfileInfo account={hesaplar} />
        <ProfileTwits account={hesaplar} />
      </div>
    </>
  );
}
