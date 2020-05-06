
import htmlToText from 'html-to-text';

export const capitalize = (string) => {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

export const htmlTextToFlatText = (htmlText) => {
    return htmlToText.fromString(htmlText, {wordwrap: 130});
} 