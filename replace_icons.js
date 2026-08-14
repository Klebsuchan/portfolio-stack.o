const fs = require('fs');

let code = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Ensure Facebook is imported
if (!code.includes('Facebook')) {
  code = code.replace("import { MessageCircle", "import { Facebook, MessageCircle");
}

const iconsBlockStart = `<div className="flex gap-4 mt-auto">`;
const iconsBlockEnd = `            </div>
          </div>
          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-8 md:justify-items-end lg:justify-items-start">`;

const startIdx = code.indexOf(iconsBlockStart);
const endIdx = code.indexOf(iconsBlockEnd);

if (startIdx !== -1 && endIdx !== -1) {
  const newIconsBlock = `<div className="flex gap-4 mt-auto">
              <a href="https://www.instagram.com/stack.odev?igsh=cWR5MDNsM3B3MzZv&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-zinc-400 hover:bg-white/5 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/5554991064604" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-green-500 hover:bg-green-500/10 transition-all">
                <MessageCircle size={18} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-all">
                <Facebook size={18} />
              </a>
`;
  code = code.substring(0, startIdx) + newIconsBlock + code.substring(endIdx);
  fs.writeFileSync('src/components/Footer.tsx', code, 'utf8');
  console.log("Replaced successfully.");
} else {
  console.log("Could not find the block to replace.");
}
