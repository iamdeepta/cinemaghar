"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Searchbar = ({ title }: any) => {
  const [text, setText] = useState("");

  const router = useRouter();

  const search = (e: any) => {
    setText(e.target.value);
  };

  useEffect(() => {
    router.replace(`?title=${text}`);
  }, [text]);

  return (
    <div className="mt-6">
      <input
        placeholder="Search..."
        onChange={(e: any) => search(e)}
        style={{
          outline: "none",
          paddingTop: "4px",
          paddingLeft: "10px",
          background: "lightgray",
          borderRadius: "4px",
          color: "black",
        }}
      />
    </div>
  );
};

export default Searchbar;
