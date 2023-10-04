import useFetch from "../../hooks/useFetch";
import ContentWrapper from "../../components/ContentWrapper";
import Carousel from "../../components/Carousel";

/* eslint-disable react/prop-types */
function Similar({ mediaType, id }) {
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
  return (
    <div>
      <ContentWrapper>
        <div className="text-3xl py-2 text-white font-semibold"> {title}</div>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} mediaType={mediaType} />
    </div>
  );
}

export default Similar;
