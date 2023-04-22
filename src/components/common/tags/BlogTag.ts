import { _create } from "../../../utils/DOM";
import { reactive } from "../../hooks/reactive";
import useState from "../../hooks/useState";
import { TagColor, CommonTagStyle, TagColorStyle } from "./tag.style";

interface TagProps {
  name: string;
  color: TagColor;
  mode? : "lm"| "dm"
}
export const BlogTag = ({ color, name,mode = "dm" }: TagProps) => {
  const tagWrapper = _create(
    "span",
    {
      class: "tag-wrapper",
    },
    {
      textContent: name || "Empty",
    }
  );
  const currentStyle = {
    ...CommonTagStyle.sm,
    ...TagColorStyle[color][mode],
  };
  tagWrapper.setStyle({ ...currentStyle });
  // reactive(() => {
  //   tagWrapper.setStyle({
  //     ...CommonTagStyle.sm,
  //     ...TagColorStyle[color][mode],
  //   });
  // }, color as String);
  return tagWrapper;
};
