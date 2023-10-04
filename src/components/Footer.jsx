
import ContentWrapper from "./ContentWrapper";

function Footer () {
  return (
    <>
    <div className="bg-[#161c26] py-10">
      <ContentWrapper>
        <ul className="flex gap-2  items-center justify-center text-white font-semibold text-base md:text-xl md:gap-4 ">
          <li className="hover:text-pink-500 transform duration-200 cursor-pointer">
            Terms Of Use
          </li>
          <li className="hover:text-pink-500 transform duration-200 cursor-pointer">
            Privacy-Policy
          </li>
          <li className="hover:text-pink-500 transform duration-200 cursor-pointer">
            About
          </li>
          <li className="hover:text-pink-500 transform duration-200 cursor-pointer">
            Blog
          </li>
          <li className="hover:text-pink-500 transform duration-200 cursor-pointer">
            FAQ
          </li>
        </ul>

        <div className="my-8  flex items-center justify-center ">
          <span className="max-w-[800px] text-lg text-white/50 text-center">
            MoveDB offers the ultimate online destination for cinephiles,
            providing access to a vast library of films spanning diverse genres
            and languages. Explore thousands of movies at your fingertips!
          </span>
        </div>
      </ContentWrapper>
    </div>
    </>
  );
}

export default Footer;
