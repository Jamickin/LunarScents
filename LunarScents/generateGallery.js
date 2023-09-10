const fs = require("fs");
const path = require("path");

const galleryDirectory = "./src/assets/images/gallery";
const galleryItems = [];

fs.readdirSync(galleryDirectory).forEach((file, index) => {
  const filePath = path.join(galleryDirectory, file);
  const id = index + 1;
  const name = `Gallery Item ${id}`;
  const description = `Description for Gallery Item ${id}`;

  galleryItems.push({
    id,
    name,
    description,
    image: filePath,
  });
});

console.log(JSON.stringify(galleryItems, null, 2));
