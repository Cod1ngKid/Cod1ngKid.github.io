const imageGallery = [
    "https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png?w=440",
    "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/EXPLORE_PDPScreenshotRefresh2024_multipleBiomes_01.png",
    "https://assetsio.gnwcdn.com/things-to-build-in-minecraft-floating-base.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    "https://preview.redd.it/795imv7btfy51.png?width=640&crop=smart&auto=webp&s=50d0109d5b2bce64d46b699398f33180fa3b70d0",
    "https://static.wikia.nocookie.net/minecraft-mob/images/7/77/Biomes.jpg/revision/latest?cb=20230305194548",
    ]

const imageElement = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentImgIndex = 0;