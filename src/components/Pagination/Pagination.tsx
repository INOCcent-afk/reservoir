import React, { FC } from "react";

type Props = {
  postsPerPage: number;
  totalPosts: number;
  paginate: any;
};

const Pagination: FC<Props> = ({
  postsPerPage,
  totalPosts,
  paginate,
}: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <p onClick={() => paginate(number)} className="page-link">
                {number}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
