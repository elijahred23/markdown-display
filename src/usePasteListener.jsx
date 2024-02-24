import { useEffect, useRef } from "react";

const usePasteListener = (onPaste) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handlePaste = (e) => {
      console.log(e.clipboardData.getData("text"));
      onPaste && onPaste(e, e.clipboardData.getData("text"));
    };

    elementRef.current.addEventListener("paste", handlePaste);

    return () => {
      elementRef.current.removeEventListener("paste", handlePaste);
    };
  }, [onPaste, elementRef]);

  return elementRef;
};

export default usePasteListener;
