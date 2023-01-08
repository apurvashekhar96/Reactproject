import Buttons from "../components/Buttons";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <Buttons onClick={handleClick} primary rounded>
        <GoBell></GoBell>
        Primary
      </Buttons>
      <Buttons secondary outline>
        Secondary
      </Buttons>
      <Buttons danger>
        {" "}
        <GoDatabase></GoDatabase>Danger
      </Buttons>
      <Buttons onMouseEnter={handleClick} warning>
        <GoCloudDownload></GoCloudDownload>
        Warning
      </Buttons>
      <Buttons success outline>
        {" "}
        Classic
      </Buttons>
    </div>
  );
}

export default ButtonPage;
