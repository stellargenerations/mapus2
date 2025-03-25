// Load map locations from the locations folder
module.exports = function() {
  const fs = require('fs');
  const path = require('path');
  const matter = require('gray-matter');
  
  const locationsDir = path.join(__dirname, '../locations');
  const locations = [];
  
  // Check if directory exists
  if (fs.existsSync(locationsDir)) {
    const files = fs.readdirSync(locationsDir);
    
    files.forEach(file => {
      if (path.extname(file) === '.md') {
        const filePath = path.join(locationsDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const data = matter(content).data;
        
        locations.push({
          title: data.title,
          lat: data.lat,
          lng: data.lng,
          description: data.description
        });
      }
    });
  }
  
  return locations;
};
