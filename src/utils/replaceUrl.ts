export const replaceUrl = (content: string, replacmentURL: string) => {
  return content.replaceAll(`${import.meta.env.PUBLIC_WP_URL}`, replacmentURL);
};
