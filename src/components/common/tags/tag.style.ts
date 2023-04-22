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
  red: {
    lm: {
      color: "rgb(224,62,62)",
      backgroundColor: "rgb(251,228,228)",
      selectColor: "rgba(255,0,26,0.2)",
    },
    dm: {
      color: "rgb(255,115,105)",
      backgroundColor: "rgb(89,65,65)",
      selectColor: "rgba(255,115,105,0.5)",
    },
  },
  purple: {
    lm: {
      color: "rgb(105,64,165)",
      backgroundColor: "rgb(234,228,242)",
      selectColor: "rgba(103,36,222,0.2)",
    },
    dm: {
      color: "rgb(154,109,215)",
      backgroundColor: "rgb(68,63,87)",
      selectColor: "rgba(154,109,215,0.5)",
    },
  },
  blue: {
    lm: {
      color: "rgb(11,110,153)",
      backgroundColor: "rgb(221,235,241)",
      selectColor: "rgba(0,120,223,0.2)",
    },
    dm: {
      color: "rgb(82,156,202)",
      backgroundColor: "rgb(54,73,84)",
      selectColor: "rgba(82,156,202,0.5)",
    },
  },
  green: {
    lm: {
      color: "rgb(15,123,108)",
      backgroundColor: "rgb(221,237,234)",
      selectColor: "rgba(0,135,107,0.2)",
    },
    dm: {
      color: "rgb(77,171,154)",
      backgroundColor: "rgb(53,76,75)",
      selectColor: "rgba(77,171,154,0.5)",
    },
  },
  yellow: {
    lm: {
      color: "rgb(223,171,1)",
      backgroundColor: "rgb(251,243,219)",
      selectColor: "rgba(233,168,0,0.2)",
    },
    dm: {
      color: "rgb(255,220,73)",
      backgroundColor: "rgb(89,86,59)",
      selectColor: "rgba(255,220,73,0.5)",
    },
  },
  orange: {
    lm: {
      color: "rgb(217,115,13)",
      backgroundColor: "rgb(250,235,221)",
      selectColor: "rgba(245,93,0,0.2)",
    },
    dm: {
      color: "rgb(255,163,68)",
      backgroundColor: "rgb(89,74,58)",
      selectColor: "rgba(255,163,68,0.5)",
    },
  },
  brown: {
    lm: {
      color: "rgb(100,71,58)",
      backgroundColor: "rgb(233,229,227)",
      selectColor: "rgba(140,46,0,0.2)",
    },
    dm: {
      color: "rgb(147,114,100)",
      backgroundColor: "rgb(67,64,64)",
      selectColor: "rgba(147,114,100,0.5)",
    },
  },
  gray: {
    lm: {
      color: "rgb(155,154,151)",
      backgroundColor: "rgb(235,236,237)",
      selectColor: "rgba(155,154,151,0.4)",
    },
    dm: {
      color: "rgba(151,154,155,0.95)",
      backgroundColor: "rgb(69,75,78)",
      selectColor: "rgba(151,154,155,0.5)",
    },
  },
  default: {
    lm: {
      color: "rgb(55,53,47)",
      backgroundColor: "rgb(255,255,255)",
      selectColor: "rgba(206,205,202,0.5)",
    },
    dm: {
      color: "rgba(255,255,255,0.9)",
      backgroundColor: "rgb(47,52,55)",
      selectColor: "rgba(80,85,88)",
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
