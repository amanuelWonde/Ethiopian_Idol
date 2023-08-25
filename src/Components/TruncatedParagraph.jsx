import { useState, useEffect } from "react";

function TruncatedParagraph({ description, characterLimit }) {
  const [truncatedText, setTruncatedText] = useState("");
  useEffect(() => {
    if (description.length <= characterLimit) {
      setTruncatedText(description);
    } else {
      const truncated = description.substring(0, characterLimit) + "...";
      setTruncatedText(truncated);
    }
  }, [description, characterLimit]);

  return <p className="text-base font-bold text-slate-600">{truncatedText}</p>;
}
export default TruncatedParagraph;
