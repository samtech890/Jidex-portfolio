const fs = require("fs");
const path = "src/data/projects.ts";
let s = fs.readFileSync(path, "utf8");

// Fix broken literal \n strings from prior PowerShell replace
s = s.replace(/liveUrl: "__LIVE__",\\n\s*githubUrl: "__GH__",/g, "URL_PLACEHOLDER");
s = s.replace(/liveUrl: "#",\s*\n\s*githubUrl: "#",/g, "URL_PLACEHOLDER");

const slugs = [
  "luxora-banking",
  "medisense-ai",
  "nexus-exchange",
  "rideflow",
  "feastly",
  "aether-canvas",
  "hirecraft-ai",
  "wanderly",
  "stayops",
  "homefolio",
  "skillora",
  "pulsefit",
];

let i = 0;
s = s.replace(/URL_PLACEHOLDER/g, () => {
  const slug = slugs[i++];
  return `liveUrl: "/demos/${slug}",\n    githubUrl: "https://github.com/jidexcoder/${slug}",`;
});

fs.writeFileSync(path, s);
console.log("fixed", i, "projects");
console.log(s.match(/liveUrl: "\/demos\//g)?.length || 0, "demo urls");
