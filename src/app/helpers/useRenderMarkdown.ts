import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";


// @todo this should not be a hook. it shoudl run async in server components!
export const useRenderMarkdown = (content: string | null | undefined) => {
  const [renderedMarkdown, setRenderedMarkdown] = useState("")
  useEffect(
    () => {
      if (!content) {
        return
      }
      async function renderMarkdown(content: string) {
        const result = await remark().use(html).process(content);
        setRenderedMarkdown(result.toString())
      }
      renderMarkdown(content)
    },
    [content],
  );
  if (!content) {
    return ""
  }
  
  return renderedMarkdown
};
