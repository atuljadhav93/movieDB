import useFetch from "../../hooks/useFetch";
import ContentWrapper from "../../components/ContentWrapper";
import Carousel from "../../components/Carousel";
/* eslint-disable react/prop-types */

function Recommendations({ mediaType, id }) {
  const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);

  return (
    <div>
      <ContentWrapper>
        <div className="text-3xl py-2 text-white font-semibold">
          {" "}
          Recommendations{" "}
        </div>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} mediaType={mediaType} />
    </div>
  );
}

export default Recommendations;
