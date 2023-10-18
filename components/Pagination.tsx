"use client";

import { useRouter } from "next/navigation";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";

interface Props {
  currentPage: number;
  pageSize: number;
  itemsCount: number;
  searchParams: {
    page: string;
  };
}

const Pagination = ({
  currentPage,
  pageSize,
  itemsCount,
  searchParams,
}: Props) => {
  const router = useRouter();
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount <= 1) return null;
  const changePage = (page: number) => {
    const queryParams = new URLSearchParams(searchParams);
    queryParams.set("page", page.toString());
    router.push(`/issues${"?" + queryParams.toString()}`);
  };
  return (
    <div className="flex items-center gap-8 mb-8">
      <p className="max-sm:text-sm whitespace-nowrap ">
        page {currentPage} of {pageCount}
      </p>
      <div className="flex items-center gap-4">
        <button
          disabled={currentPage === 1}
          onClick={() => changePage(1)}
          className="bg-gray-200 px-2 py-1.5 rounded-md shadow-sm  disabled:bg-gray-50"
        >
          <HiChevronDoubleLeft />
        </button>
        <button
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
          className="bg-gray-200 px-2 py-1.5 rounded-md shadow-sm  disabled:bg-gray-50"
        >
          <HiChevronLeft />
        </button>
        <button
          disabled={currentPage === pageCount}
          onClick={() => changePage(currentPage + 1)}
          className="bg-gray-200 px-2 py-1.5 rounded-md shadow-sm  disabled:bg-gray-50"
        >
          <HiChevronRight />
        </button>
        <button
          disabled={currentPage === pageCount}
          onClick={() => changePage(pageCount)}
          className="bg-gray-200 px-2 py-1.5 rounded-md shadow-sm  disabled:bg-gray-50"
        >
          <HiChevronDoubleRight />
        </button>
      </div>
    </div>
  );
};
export default Pagination;
