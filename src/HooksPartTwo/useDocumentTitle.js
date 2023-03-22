import React, { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `Count ${count}`;
    console.log(count);
  }, [count]);
}

export default useDocumentTitle;
