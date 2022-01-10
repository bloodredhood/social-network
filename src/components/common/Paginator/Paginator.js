import React from "react";
import "./Paginator.css"

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

  const pagesCount = Math.ceil(totalUsersCount / pageSize)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className="containerForBreadCrumb">
      {pages.map(p => {
        return <span className={currentPage === p && "selectedPage"} onClick={(e) => { onPageChanged(p) }} >{p}</span>
      })}
    </div>
  )
}

export default Paginator