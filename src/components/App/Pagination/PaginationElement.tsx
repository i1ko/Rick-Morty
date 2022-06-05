import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

// TODO: any type
export const PaginationElement = ({
                                      nextPage,
                                      prevPage,
                                      goToPage,
                                      pages,
                                      currentPage
}: {
    nextPage: any,
    prevPage: any,
    goToPage: any,
    pages: any,
    currentPage: number
}) => {

    console.log('Pagination rendered');

    let pageButtons = []
    for (let page = 1; page <= pages; page++) {
        pageButtons.push(
            <Pagination.Item key={page} onClick={() => goToPage(page)}>{page}</Pagination.Item>,
        )
    }

    //TODO: any type
    const onSetPage = (event: any) => {
        const {value} = event.target;
        const isValue = value.length ? Number(value) : null
        const isEnter = event.key === 'Enter'
        isValue && isEnter && goToPage(value)
    }

    return (
        <div className={'d-flex flex-column'}>
            <span className={'d-flex text-white-50 justify-content-center'}>Pages count 1-{pages}</span>
            <span className={'d-flex pb-2 text-white-50 justify-content-center'}>Current page {currentPage}</span>
            <Pagination className={'flex-wrap my-0'}>
                {prevPage && (<Pagination.Prev onClick={prevPage}>Previous</Pagination.Prev>)}
                <input type="number" min={1} max={pages} defaultValue={currentPage} onKeyUp={onSetPage} />
                {nextPage && (<Pagination.Next onClick={nextPage}>Next</Pagination.Next>)}
            </Pagination>
        </div>
    )
}