module.exports = (req, res) => {
  // Optimized keyword list based on job market data:
  // - Removed rare languages with <1% job postings (burmese, swahili, etc.)
  // - Added "hiring"/"remote" modifiers for better job filtering
  // - Focused on high-conversion keywords

  const keywords = [
    // Generic with job modifiers (high conversion)
    "translator hiring",
    "interpreter hiring",
    "translator remote",
    "interpreter remote",
    "looking for translator",
    "looking for interpreter",
    "hiring translator",
    "hiring interpreter",
    "need translator",
    "need interpreter",

    // Tier 1: Top demand languages
    "english translator",
    "english interpreter",
    "chinese translator",
    "chinese interpreter",
    "spanish translator",
    "spanish interpreter",

    // Tier 2: High demand
    "japanese translator",
    "japanese interpreter",
    "french translator",
    "french interpreter",
    "korean translator",
    "korean interpreter",
    "arabic translator",
    "arabic interpreter",
    "german translator",
    "german interpreter",
    "russian translator",
    "russian interpreter",

    // Tier 3: Medium demand
    "portuguese translator",
    "portuguese interpreter",
    "italian translator",
    "italian interpreter",
    "dutch translator",
    "polish translator",
    "turkish translator",
    "turkish interpreter",
    "vietnamese translator",
    "thai translator",
    "indonesian translator",
    "hindi translator",
    "hindi interpreter",
    "ukrainian translator",
    "ukrainian interpreter",
    "hebrew translator",
    "persian translator",

    // Specialized roles (high conversion)
    "localization",
    "localization manager",
    "localization specialist",
    "game localization",
    "software localization",
    "conference interpreter",
    "simultaneous interpreter",
    "medical interpreter",
    "legal interpreter",
    "court interpreter",

    // Other valuable roles
    "linguist",
    "subtitler",
    "transcriber",
    "voiceover",
    "mtpe",
    "post editor",
    "proofreader",
    "nlp linguist",
    "multilingual copywriter"
  ];

  const keyword = `"${keywords[Math.floor(Math.random() * keywords.length)]}"`;

  res.status(200).json({ keyword });
};
