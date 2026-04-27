const fs = require('fs');

const sourcePath = 'C:/Users/ADMN/Downloads/vamsiprodupscappfinal-main/PrepAssistV2/src/app/notes-tracker/page.tsx';
const targetPath = 'C:/Users/ADMN/Downloads/prepassist_Main_Project-main_updated/prepassist_Main_Project-main/src/app/notes-tracker/page.tsx';

let content = fs.readFileSync(sourcePath, 'utf8');

// Replace hex color codes with dynamic semantic ones for Next Themes
content = content
  .replace(/bg-\[\#FDFCFB\]/g, 'bg-background')
  .replace(/bg-\[\#FDFBF7\]/g, 'bg-foreground/5 dark:bg-foreground/10')
  .replace(/bg-\[\#F3EFE9\]/g, 'bg-foreground/10')
  .replace(/bg-\[\#212121\]/g, 'bg-background border border-border shadow-2xl') // insufficient credits modal
  .replace(/text-\[\#333333\]/g, 'text-foreground')
  .replace(/text-\[\#2A2A2A\]/g, 'text-foreground')
  .replace(/border-\[\#E5E0D8\]/g, 'border-border')
  .replace(/border-\[\#D1C8B8\]/g, 'border-border')
  .replace(/text-\[\#8B5A2B\]/g, 'text-primary')
  .replace(/text-\[\#D95F0E\]/g, 'text-primary')
  .replace(/bg-\[\#F97316\]/g, 'bg-primary')
  .replace(/text-\[\#F97316\]/g, 'text-primary')
  .replace(/border-\[\#F97316\]/g, 'border-primary')
  .replace(/text-\[\#A89F91\]/g, 'text-foreground/40')
  .replace(/text-\[\#666666\]/g, 'text-foreground/60');

// General refinements to fit the Night Theme / Glass UI aesthetic
content = content
  .replace(/font-serif/g, 'font-sans font-black tracking-tight')
  .replace(/rounded-xl/g, 'rounded-2xl')
  .replace(/rounded-2xl/g, 'rounded-[2rem] glass');

fs.writeFileSync(targetPath, content);
console.log("Migration complete!");
