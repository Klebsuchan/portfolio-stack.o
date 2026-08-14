sed -i "s/shadow-\[0_0_15px_#00f2ff\]/shadow-\[0_0_15px_rgba(255,255,255,0.8)\]/g" src/components/CustomCursor.tsx
sed -i "s/borderColor: isHovering ? '#bc13fe' : '#00f2ff'/borderColor: isHovering ? '#ffffff' : 'rgba(255,255,255,0.4)'/g" src/components/CustomCursor.tsx
sed -i "s/backgroundColor: isHovering ? 'rgba(188,19,254,0.1)' : 'rgba(0,242,255,0)'/backgroundColor: isHovering ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0)'/g" src/components/CustomCursor.tsx
sed -i "s/shadow-\[0_0_10px_#bc13fe\]/shadow-\[0_0_10px_rgba(255,255,255,0.3)\]/g" src/components/CustomCursor.tsx
