import PagenationListContainer from "./PagenationListContainer";
import CheckBox from "./CheckBox";
import ImageViewer from "./ImageViewer";
import PagenationNavi from "./PagenationNavi";
import PagenationContainer from "./PagenationContainer";


export default function CollectionListItemsViewLeft({ params, isImageView = false }) {
  const listItems = Array(10).fill(null).map((val, idx) => {
    return (
      <PagenationListContainer
        key={ idx }
      >
        グッズ名は { params.list_id } だよ
        <CheckBox/>
      </PagenationListContainer>
    );
  });

  const listImages = Array(9).fill(null).map((val, idx) => {
    return (
      <PagenationListContainer
        key={ idx }
      >
        <ImageViewer/>
      </PagenationListContainer>
    )
  })

  return (
    <>
      <PagenationContainer
        isImageView={isImageView}
      >
        { isImageView === false ? listItems : listImages }
      </PagenationContainer>
      <PagenationNavi/>
    </>
  );
};