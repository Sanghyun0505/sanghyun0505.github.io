export const addHypensToSlug = (text: string) => {
  return text
    .toString()
    .replace(/\s+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export const getRidOfHypensToSlug = (text: string) => {
  return text.toString().replace(/-/g, " ");
};
