/**
 * Replace the protocol and www subdomain with empty string
 * @example
 * https://www.google.com =\> google.com
 */
export const stripProtocolAndWWW = (url: string) => {
  return url.replace(/(?:^\w+:|^)\/\//, '').replace(/^www\./, '');
};

/**
 * Prettifies a number using Web Intl into compact form.
 * @example
 * [in] 10000 => [out] 10k
 * @param n A number you wanna prettify.
 * @returns string
 */
export const prettifyNumbers = (n: number): string => {
  const formatter = new Intl.NumberFormat('en', { notation: 'compact', compactDisplay: 'short' });
  return formatter.format(n);
};

/**
 * Given a username. It attempts a calculate an
 * initial. It's not meant to be accurate, the
 * returned initials should only resemble the
 * username.
 */
export const calculateInitials = (username: string) => {
  return `${username.charAt(0)}${username.charAt(username.length - 1)}`;
};
