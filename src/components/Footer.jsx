import { GitHub, Linkedin, NoCopyRight, WhatsApp } from "../assets/icons/icons";

function Footer() {
  const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL;
  const whatsappUrl = process.env.REACT_APP_WHATSAPP_URL;
  const github = process.env.REACT_APP_GITHUB_URL;
  return (
    <>
      <div className="bg-[#469193] py-10 text-white">
        <div className="max-w-[1200px] mx-auto my-0 px-[20px] py-0 md:flex md:justify-between sm:flex-row sm:items-center sm:justify-center sm:mt-2">
          <div className="flex flex-col item-center justify-center">
            <p className="flex">
              No <p className="mt-1 m-1"> <NoCopyRight /> </p>  copyright issues.
            </p>
            <p>Feel free to reach out to me.</p>
            <p>I&#39;m here and ready to help, ping me!</p>
          </div>
          <div className="flex flex-col item-center justify-center">
            <p>You can find me everywhere</p>
            <div className="flex items-center justify-center m-4 space-x-4 cursor-pointer">
              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                <GitHub />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <WhatsApp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
