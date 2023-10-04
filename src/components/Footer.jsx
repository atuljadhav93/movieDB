import ContentWrapper from "./ContentWrapper";

function Footer() {
  return (
    <>
      <div className="bg-[#469193] py-10">
        <ContentWrapper>
          <div className="my-8 flex items-center justify-center ">
            <span className="max-w-[800px] text-white text-lg text-center">
              MoveDB offers the ultimate online destination for cinephiles,
              providing access to a vast library of films spanning diverse
              genres and languages. Explore thousands of movies at your
              fingertips!
            </span>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
}

export default Footer;
