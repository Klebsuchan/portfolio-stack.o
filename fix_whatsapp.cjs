const fs = require('fs');

let footerCode = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Add the whatsapp modal to modalContents
const whatsappModalStr = `
  'whatsapp': {
    title: 'Fale com a Stack.O',
    content: (
      <div className="space-y-4">
        <p className="text-gray-400 mb-4 text-sm">Escolha o setor ideal para o seu projeto e fale diretamente com nossos especialistas no WhatsApp:</p>
        
        <a href="https://wa.me/5554996684874" target="_blank" rel="noopener noreferrer" className="block w-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-green-500/50 p-4 rounded-xl transition-all group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center shrink-0">
              <MessageCircle className="text-green-500 w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h5 className="text-white font-bold text-sm">Refatoração e Backend</h5>
              <p className="text-gray-400 text-xs">Falar com Jhonatan Leovaldo</p>
            </div>
          </div>
        </a>

        <a href="https://wa.me/5554991064604" target="_blank" rel="noopener noreferrer" className="block w-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-green-500/50 p-4 rounded-xl transition-all group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center shrink-0">
              <MessageCircle className="text-green-500 w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h5 className="text-white font-bold text-sm">Sistemas Frontend, Apps e Fullstack</h5>
              <p className="text-gray-400 text-xs">Falar com Braian Kleber</p>
            </div>
          </div>
        </a>
      </div>
    )
  },`;

if (!footerCode.includes("'whatsapp': {")) {
  footerCode = footerCode.replace("const modalContents: Record<string, { title: string; content: React.ReactNode }> = {", "const modalContents: Record<string, { title: string; content: React.ReactNode }> = {" + whatsappModalStr);
}

// Replace footer static wa.me with button
const oldFooterA = `<a href="https://wa.me/5554991064604" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500 hover:bg-green-500/10 transition-all">`;
const newFooterA = `<button onClick={() => setActiveModal('whatsapp')} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500 hover:bg-green-500/10 transition-all">`;
footerCode = footerCode.replace(oldFooterA, newFooterA);

// Also need to close the button tag instead of </a> for this specific icon
const searchStr = `                <MessageCircle size={18} />
              </a>`;
const replaceStr = `                <MessageCircle size={18} />
              </button>`;
footerCode = footerCode.replace(searchStr, replaceStr);


// Replace floating button
const oldFloatingBtn = `<a 
        href="https://wa.me/5554991064604" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all z-50 group"
      >`;
const newFloatingBtn = `<button 
        onClick={() => setActiveModal('whatsapp')}
        className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all z-50 group"
      >`;
footerCode = footerCode.replace(oldFloatingBtn, newFloatingBtn);
footerCode = footerCode.replace(`<MessageCircle className="w-7 h-7 text-white" />
      </a>`, `<MessageCircle className="w-7 h-7 text-white" />
      </button>`);

fs.writeFileSync('src/components/Footer.tsx', footerCode, 'utf8');

// Now update ContactCTA.tsx
let contactCode = fs.readFileSync('src/components/ContactCTA.tsx', 'utf8');
const oldNumberStr = `const phoneNumber = "5554991064604"; // Replace with actual WhatsApp number`;
const newNumberStr = `let phoneNumber = "5554991064604"; // Default to Braian
    if (formData.service === "Refatoração de Código") {
      phoneNumber = "5554996684874"; // Jhonatan
    }`;
contactCode = contactCode.replace(oldNumberStr, newNumberStr);
fs.writeFileSync('src/components/ContactCTA.tsx', contactCode, 'utf8');

console.log("Done");
