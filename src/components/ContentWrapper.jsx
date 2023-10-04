/* eslint-disable react/prop-types */
function ContentWrapper({ children }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto my-0 px-[20px] py-0 ">
      {children}
    </div>
  );
}

export default ContentWrapper;
