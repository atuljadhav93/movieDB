import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import ContentWrapper from "../../components/ContentWrapper";
import SwitchTab from "../../components/SwitchTab";
import Carousel from "../../components/Carousel";

function Popular() {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="mt-16">
      <ContentWrapper>
        <div className="flex items-center justify-between my-2">
          <span className="text-3xl py-2 text-white font-semibold ">
            What&#39;s Popular
          </span>
          <SwitchTab data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </div>
      </ContentWrapper>

      <Carousel data={data?.results} loading={loading} mediaType={endpoint} />
    </div>
  );
}

export default Popular;
