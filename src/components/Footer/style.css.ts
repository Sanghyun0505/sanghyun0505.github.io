import { style } from "@vanilla-extract/css";

export const footerStyle = style({
  margin: "0 auto",
  maxWidth: "64rem",
  padding: "0 1rem",
  "@media": {
    "(min-width: 640px)": {
      padding: "0 1.5rem",
    },
    "(min-width: 1024px)": {
      padding: "0 2rem",
    },
  },
});

export const borderTopStyle = style({
  borderTop: "1px solid #e0e0e0",
  "@media": {
    "(prefers-color-scheme: dark)": {
      borderTop: "1px solid #1a1a1a",
    },
  },
});

export const textStyle = style({
  textAlign: "center",
  fontSize: "0.75rem",
  lineHeight: "1.6",
  color: "#737373",
  margin: "2rem 0",
  "@media": {
    "(prefers-color-scheme: dark)": {
      color: "#a3a3a3",
    },
  },
});

export const linkStyle = style({
  color: "#3f3f3f",
  textDecoration: "dashed",
  transition: "color 0.3s",
  ":hover": {
    color: "#595959",
  },
  "@media": {
    "(prefers-color-scheme: dark)": {
      color: "#d1d1d1",
      ":hover": {
        color: "#d1d1d1bf",
      },
    },
  },
});

export const blockStyle = style({
  display: "block",
  marginTop: "0.5rem",
});
