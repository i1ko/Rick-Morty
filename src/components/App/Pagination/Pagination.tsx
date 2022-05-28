import React from 'react'

// TODO: any type
export const Pagination = ({
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
        pageButtons.push(<button key={i} onClick={() => goToPage(i)}>{i}</button>)
    }
    return (
        <div>
            {prevPage && (<button onClick={prevPage}>Previous</button>)}
            {pageButtons}
            {nextPage && (<button onClick={nextPage}>Next</button>)}
        </div>
    )
}