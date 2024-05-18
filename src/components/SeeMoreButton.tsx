"use client";

import { useRouter } from "next/navigation";

const SeeMoreButton = ({ page }: any) => {
  const router = useRouter();

  const seeMore = () => {
    if (!page) {
      router.push(`?page=2`);
    } else {
      router.push(`?page=${Number(page) + 1}`);
    }
  };

  const seePrev = () => {
    if (page > 1) {
      router.push(`?page=${Number(page) - 1}`);
    }
  };

  return (
    <>
      {Number(page) > 1 && (
        <button className="bg-[purple] p-2 rounded" onClick={() => seePrev()}>
          Previous
        </button>
      )}
      <button className="bg-[purple] p-2 rounded" onClick={() => seeMore()}>
        Next
      </button>
    </>
  );
};

export default SeeMoreButton;
