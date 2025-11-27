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

  // цикличная ротация через верцел-инстанс
  const index = Math.floor(Math.random() * keywords.length);

  res.status(200).json({ keyword: keywords[index] });
}
