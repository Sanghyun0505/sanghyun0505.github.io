// styles.css.ts
import { globalStyle, style } from "@vanilla-extract/css";

// 기본 a 태그 스타일
globalStyle("a", {
  textDecoration: "none",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 1.5px",
  backgroundPosition: "0 100%",
  backgroundImage:
    "linear-gradient(to right, rgb(var(--color-text-link)/1), rgb(var(--color-text-link)/1))",
});

// a 태그 hover 스타일
globalStyle("a:hover", {
  color: "rgb(var(--color-text-link))",
});

// 제목 스타일
globalStyle("h1, h2, h3, h4, h5", {
  color: "rgb(var(--color-text-heading))",
});

// iframe 스타일
globalStyle("iframe", {
  borderRadius: "0.5rem",
});

// code 태그 스타일
globalStyle("code", {
  backgroundColor: "rgb(var(--color-code-bg))",
  color: "rgb(var(--color-code-text))",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.25rem",
  fontSize: "0.875rem",
  lineHeight: "1.5",
  fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
});

// ol > li::before 스타일
globalStyle("ol > li::before", {
  color: "rgb(var(--color-text-bold))",
});

// li 태그 스타일
globalStyle("li", {
  marginBottom: "0.5rem",
  color: "rgb(var(--color-code-text))",
  fontSize: "1rem",
  lineHeight: "1.5",
  fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
});

// code::before 스타일
globalStyle("code::before", {
  content: "none",
});

// code::after 스타일
globalStyle("code::after", {
  content: "none",
});

// blockquote 스타일
globalStyle("blockquote", {
  border: "none",
  position: "relative",
  width: "96%",
  margin: "0 auto",
  fontSize: "1.0625em",
  paddingTop: "1.5rem",
  paddingBottom: "0.5rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
});

// blockquote::before 스타일
globalStyle("blockquote::before", {
  fontFamily: "Arial",
  content: '"“"',
  fontSize: "4em",
  color: "rgb(var(--color-text-bold))",
  position: "absolute",
  left: "-10px",
  top: "-10px",
});

// blockquote::after 스타일
globalStyle("blockquote::after", {
  content: "",
});

// blockquote p:first-of-type::before 스타일
globalStyle("blockquote p:first-of-type::before", {
  content: "",
});

// blockquote p:last-of-type::after 스타일
globalStyle("blockquote p:last-of-type::after", {
  content: "",
});
