// Load location data from the "locations" folder
module.exports = function() {
  const glob = require('glob');
  const path = require('path');
  const fs = require('fs');
  const matter = require('gray-matter');
  
  // Get all markdown files in the locations directory
  const files = glob.sync('locations/*.md');
  
  // Extract front matter data from each file
  return files.map(file => {
    const fileContent = fs.readFileSync(file, 'utf8');
    const data = matter(fileContent).data;
    return {
      title: data.title || 'Unnamed Location',
      description: data.description || '',
      lat: data.lat || 0,
      lng: data.lng || 0
    };
  });
};
