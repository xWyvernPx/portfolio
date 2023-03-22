import css from "csstype";
export const TagColorStyle: TagColorStyleType = {
  pink: {
    lm: {
      backgroundColor: "rgb(244,223,235)",
      color: "rgb(173,26,114)",
      selectColor: "rgba(221,0,129,0.2)",
    },
    dm: {
      backgroundColor: "rgb(83,59,76)",
      color: "rgb(226,85,161)",
      selectColor: "rgba(226,85,161,0.5)",
    },
  },
};
export const CommonTagStyle: {
  sm: css.Properties;
  md: css.Properties;
  lg: css.Properties;
} = {
  sm: {
    fontSize: "0.75rem",
    lineHeight: 1,
    padding: "0.35rem 0.75rem",
    borderRadius: "1rem",
    fontWeight: 600,
  },
  md: {},
  lg: {},
};
export type TagColor =
  | "pink"
  | "red"
  | "purple"
  | "blue"
  | "yellow"
  | "green"
  | "orange"
  | "brown"
  | "gray"
  | "default";
type TagColorStyleType = {
  [key in TagColor]?: {
    lm: {
      backgroundColor: string;
      color: string;
      selectColor: string;
    };
    dm: {
      backgroundColor: string;
      color: string;
      selectColor: string;
    };
  };
};
