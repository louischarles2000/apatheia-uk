import * as he from "html-entities";

export function decodeToPlainHTMLText(htmlString: string) {
  const parser = new DOMParser();
  const decodedDocument = parser.parseFromString(htmlString, 'text/html');
  return decodedDocument.body.textContent || '';
}

export function deepDecode(html: string, depth = 0): string {
  // Stop after a safe max depth to avoid infinite loops
  if (depth > 10) return html;

  const decoded = he.decode(html);

  // If decoding changed anything (e.g., &nbsp; is still present), keep going
  if (decoded !== html && /&[a-zA-Z0-9#]+;/.test(decoded)) {
    return deepDecode(decoded, depth + 1);
  }

  return decoded;
}

export function formatDecodedString(encodedString: string, limit?: number): string {
  if (!encodedString) return '';

  // 1. Decode multiple times to handle double-encoded entities
  let decoded = deepDecode(encodedString);

  // 2. Replace non-breaking spaces with regular spaces
  decoded = decoded.replace(/\u00A0/g, ' ');

  // 3. Strip HTML tags
  const plain = decoded.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

  // 4. Apply limit if needed
  if (limit && plain.length > limit) {
    return plain.slice(0, limit).trim() + '...';
  }

  return plain;
}

// to format date = April 28, 2025
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}