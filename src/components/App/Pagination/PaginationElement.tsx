import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

//TODO: any type
function pagination(currentPage: any, lastPage: any) {
    let current = currentPage,
        last = lastPage,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    console.log(rangeWithDots)
    return rangeWithDots;
}

// TODO: any type
export const PaginationElement = ({
                               nextPage,
                               prevPage,
                               goToPage,
                               pages
}: {
    nextPage: any,
    prevPage: any,
    goToPage: any,
    pages: any
}) => {
    let pageButtons = []
    for (let i = 1; i <= pages; i++) {
        pageButtons.push(
            // <button key={i} onClick={() => goToPage(i)}>{i}</button>
            <Pagination.Item key={i}
                             onClick={() => goToPage(i)}
                             // active={i === active}
            >
                {i}
            </Pagination.Item>,
        )
    }

    const paginationBootstrap = <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
    </Pagination>

    return (
        <div className={'d-flex'}>
            <Pagination className={'flex-wrap'}>
                {prevPage && (<Pagination.Prev onClick={prevPage}>Previous</Pagination.Prev>)}
                {pageButtons}
                {nextPage && (<Pagination.Next onClick={nextPage}>Next</Pagination.Next>)}
            </Pagination>
        </div>
    )
}