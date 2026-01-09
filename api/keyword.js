module.exports = (req, res) => {
  /**
   * Freelance LinkedIn Keyword Rotator
   *
   * 77 keywords for finding freelance/contract opportunities.
   * Sequential rotation: each request returns next keyword.
   *
   * Usage:
   *   GET /api/keyword         → starts from 0
   *   GET /api/keyword?last=5  → returns keyword[6]
   */

  const keywords = [
    // === General Freelance Phrases (17) ===
    "looking for freelance",
    "hiring freelancer",
    "need a freelancer",
    "seeking freelancer",
    "freelance opportunity",
    "freelancer needed",
    "looking for contractor",
    "hiring contractor",
    "contract opportunity",
    "need contractor",
    "project based",
    "short term project",
    "quick project",
    "gig opportunity",
    "immediate project",
    "hourly rate",
    "per project",

    // === Engineering (8) ===
    "freelance developer",
    "freelance engineer",
    "freelance programmer",
    "contract developer",
    "freelance react",
    "freelance node",
    "freelance fullstack",
    "freelance backend",

    // === Design (7) ===
    "freelance designer",
    "freelance UX",
    "freelance UI",
    "freelance product designer",
    "contract designer",
    "freelance web designer",
    "freelance graphic designer",

    // === Translation & Language (18) ===
    "freelance translator",
    "freelance translation",
    "translation project",
    "need translator",
    "looking for translator",
    "hiring translator",
    "localization project",
    "freelance localization",
    "app localization",
    "game localization",
    "website localization",
    "freelance interpreter",
    "freelance subtitling",
    "freelance transcription",
    "freelance proofreader",
    "freelance editor language",
    "voice over freelance",
    "dubbing freelance",

    // === Writing (8) ===
    "freelance writer",
    "freelance copywriter",
    "freelance content writer",
    "contract writer",
    "freelance editor",
    "freelance blogger",
    "freelance technical writer",
    "freelance ghostwriter",

    // === Marketing (8) ===
    "freelance marketing",
    "freelance growth",
    "contract marketing",
    "freelance social media",
    "freelance SEO",
    "freelance PPC",
    "freelance content marketing",
    "freelance email marketing",

    // === Creative (6) ===
    "freelance video editor",
    "freelance motion",
    "freelance animator",
    "freelance illustrator",
    "freelance photographer",
    "contract creative",

    // === Other (5) ===
    "freelance virtual assistant",
    "freelance consultant",
    "freelance project manager",
    "freelance data analyst",
    "freelance VA",
  ];

  // Disable caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  // Get last index from query param, default to -1 (so first call returns index 0)
  const lastIndex = parseInt(req.query.last, 10);
  const validLast = isNaN(lastIndex) ? -1 : lastIndex;

  // Next index (wraps around)
  const index = (validLast + 1) % keywords.length;
  const keyword = `"${keywords[index]}"`;

  res.status(200).json({
    keyword,
    index,
    total: keywords.length,
  });
};
