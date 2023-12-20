import ProfileInfo from "./profileInfo";
import ProfileTwits from "./profileTwits";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Profile() {
  var slug = useParams().slug;
  var { account } = useSelector((state) => state.auth);
  const { accounts } = useSelector((state) => state.auth);
  if (slug !== account.username) {
    account = accounts.find((account) => account.username === slug);
  } else {
    account = account;
  }
  console.log(slug);
  console.log(accounts);
  console.log(account);
  return (
    <>
      <div className="flex flex-col">
        <ProfileInfo account={account} />
        <ProfileTwits account={account} />
      </div>
    </>
  );
}
