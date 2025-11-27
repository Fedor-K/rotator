export default function handler(req, res) {
  const keywords = [
    "english translator",
    "spanish translator",
    "french translator",
    "german translator",
    "italian translator",
    "russian translator",
    "english interpreter",
    "spanish interpreter",
    "french interpreter",
    "german interpreter",
    "italian interpreter",
    "russian interpreter"
  ];

  const index = Math.floor(Math.random() * keywords.length);

  const keyword = String(keywords[index]); // <– ГАРАНТИЯ КАВЫЧЕК

  res.status(200).json({ keyword });
}
