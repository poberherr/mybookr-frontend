import { remark } from "remark";
import html from "remark-html";

export const renderMarkdown = async (content: string | null | undefined) => {
  if (!content) {
    return "";
  }

  const result = await remark().use(html).process(content);
  return result.toString();
};
