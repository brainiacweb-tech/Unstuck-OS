const fs=require('node:fs');const path=require('node:path');
fs.mkdirSync(path.join('dist','main'),{recursive:true});
fs.copyFileSync(path.join('store-assets','icon.ico'),path.join('dist','main','icon.ico'));
