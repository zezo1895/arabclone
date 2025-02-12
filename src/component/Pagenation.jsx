import React from "react";
import ReactPaginate from 'react-paginate';



const Pagenation=(props)=>{
    const handlePageClick=(data)=>{

props.getpage(data.selected+1)


    }
    const pageCount=props.Pagecount;
    return(
    
     
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالى >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< السابق"
        renderOnZeroPageCount={null}
        containerClassName="pagination m-0 justify-content-center"
        nextClassName="page-item"
        previousClassName="page-item"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
       nextLinkClassName="page-link"
       breakClassName="page-item"
       breakLinkClassName="page-link"
       activeClassName="active"
      />
    
    )
}
export default Pagenation;