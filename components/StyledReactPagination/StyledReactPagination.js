import ReactPaginate from "react-paginate";
import LeftArrowSVG from "../../svg/LeftArrowSVG/LeftArrowSVG";
import RightArrowSVG from "../../svg/RightArrowSVG/RightArrowSVG";
import style from "./StyledReactPagination.module.scss";

export default function StyledReactPagination({
  onPageChange,
  currentPage,
  totalPages,
}) {
  return (
    <>
      <ReactPaginate
        forcePage={currentPage}
        pageCount={totalPages}
        onPageChange={(page) => {
          onPageChange(page);
        }}
        breakLabel="..."
        nextLabel={<RightArrowSVG size="20" currentColor />}
        previousLabel={<LeftArrowSVG size="20" currentColor />}
        pageRangeDisplayed="2"
        marginPagesDisplayed="1"
        renderOnZeroPageCount={null}
        containerClassName={style.container}
        pageClassName={style.page}
        pageLinkClassName={style.pageContent}
        activeClassName={style.activePage}
        activeLinkClassName={style.activePagecCntent}
        previousClassName={style.previus}
        nextClassName={style.next}
        disabledClassName={style.disabledPreviousNext}
        disabledLinkClassName={style.disabledPreviousNextContent}
        breakClassName={style.break}
        breakLinkClassName={style.breakContent}
      />
    </>
  );
}
