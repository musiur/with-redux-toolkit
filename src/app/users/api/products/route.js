import { NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "User Cover Photo 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 19.99,
    category: "Electronics",
    image:
      "https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg",
  },
  {
    id: 2,
    name: "User Cover Photo 2",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    price: 29.99,
    category: "Home & Kitchen",
    image:
      "https://c4.wallpaperflare.com/wallpaper/658/800/994/simple-simple-background-minimalism-black-background-wallpaper-thumb.jpg",
  },
  {
    id: 3,
    name: "User Cover Photo 3",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris accumsan ullamcorper lorem, quis fringilla felis ullamcorper a.",
    price: 9.99,
    category: "Clothing",
    image:
      "https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg",
  },
  {
    id: 4,
    name: "User Cover Photo 4",
    description:
      "Nulla laoreet eros quis est eleifend, sed varius mi convallis.",
    price: 49.99,
    category: "Electronics",
    image:
      "https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-thumb.jpg",
  },
  {
    id: 5,
    name: "User Cover Photo 5",
    description:
      "Donec mattis libero non metus iaculis, sed posuere mauris aliquet.",
    price: 14.99,
    category: "Home & Kitchen",
    image:
      "https://c4.wallpaperflare.com/wallpaper/133/969/139/artwork-nature-landscape-fantasy-art-wallpaper-thumb.jpg",
  },
  {
    id: 6,
    name: "User Cover Photo 6",
    description:
      "Sed fermentum ex eget est pharetra, vel semper nisl convallis.",
    price: 39.99,
    category: "Clothing",
    image:
      "https://c4.wallpaperflare.com/wallpaper/553/119/620/windows-10-windows-10x-windows-11-minimalism-material-minimal-hd-wallpaper-thumb.jpg",
  },
  {
    id: 7,
    name: "User Cover Photo 7",
    description:
      "Maecenas volutpat sem et ipsum condimentum, et vestibulum elit ullamcorper.",
    price: 24.99,
    category: "Electronics",
    image:
      "https://c4.wallpaperflare.com/wallpaper/965/883/624/manga-one-piece-wallpaper-thumb.jpg",
  },
  {
    id: 8,
    name: "User Cover Photo 8",
    description: "Phasellus eu dui id purus pharetra dapibus.",
    price: 59.99,
    category: "Home & Kitchen",
    image:
      "https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-thumb.jpg",
  },
  {
    id: 9,
    name: "User Cover Photo 9",
    description:
      "Fusce malesuada libero id mi iaculis, vel rutrum turpis tincidunt.",
    price: 12.99,
    category: "Clothing",
    image:
      "https://c4.wallpaperflare.com/wallpaper/892/692/922/howl-s-moving-castle-studio-ghibli-fantasy-art-clouds-daylight-hd-wallpaper-thumb.jpg",
  },
  {
    id: 10,
    name: "User Cover Photo 10",
    description:
      "Integer tincidunt felis in tellus iaculis, eget sagittis neque vestibulum.",
    price: 34.99,
    category: "Electronics",
    image:
      "https://c4.wallpaperflare.com/wallpaper/403/855/787/sword-blood-fantasy-armor-wallpaper-thumb.jpg",
  },
  {
    id: 11,
    name: "User Cover Photo 11",
    description: "Praesent dapibus ligula id eleifend aliquet.",
    price: 21.99,
    category: "Home & Kitchen",
    image:
      "https://c4.wallpaperflare.com/wallpaper/312/851/784/dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840%C3%972400-wallpaper-thumb.jpg",
  },
  {
    id: 12,
    name: "User Cover Photo 12",
    description: "Vivamus vitae ligula ac nibh dapibus facilisis.",
    price: 44.99,
    category: "Clothing",
    image:
      "https://c4.wallpaperflare.com/wallpaper/952/536/1006/winter-4k-pc-desktop-wallpaper-thumb.jpg",
  },
  {
    id: 13,
    name: "User Cover Photo 13",
    description:
      "Cras sit amet mi posuere, pellentesque nisl non, malesuada ligula.",
    price: 17.99,
    category: "Electronics",
    image:
      "https://c4.wallpaperflare.com/wallpaper/384/818/513/himalayas-mountains-landscape-nature-wallpaper-thumb.jpg",
  },
  {
    id: 14,
    name: "User Cover Photo 14",
    description:
      "Sed consectetur tortor nec sapien vestibulum, sed suscipit ex varius.",
    price: 31.99,
    category: "Home & Kitchen",
    image:
      "https://c4.wallpaperflare.com/wallpaper/694/865/147/space-art-fantasy-art-sky-clouds-wallpaper-thumb.jpg",
  },
  {
    id: 15,
    name: "User Cover Photo 15",
    description:
      "Duis dapibus arcu ac elit bibendum, a condimentum ipsum tempus.",
    price: 10.99,
    category: "Clothing",
    image:
      "https://c4.wallpaperflare.com/wallpaper/682/435/620/naruto-anime-uzumaki-naruto-jiraiya-naruto-shippuuden-hd-wallpaper-thumb.jpg",
  },
  {
    id: 16,
    name: "User Cover Photo 16",
    description:
      "Vestibulum ac ligula vestibulum, vestibulum tortor quis, congue arcu.",
    price: 54.99,
    category: "Electronics",
    image:
      "https://c4.wallpaperflare.com/wallpaper/116/412/889/naruto-anime-uchiha-itachi-hd-wallpaper-thumb.jpg",
  },
  {
    id: 17,
    name: "User Cover Photo 17",
    description: "Curabitur euismod arcu et faucibus semper.",
    price: 27.99,
    category: "Home & Kitchen",
    image:
      "https://c4.wallpaperflare.com/wallpaper/88/698/360/space-black-hole-interstellar-planet-wallpaper-thumb.jpg",
  },
  {
    id: 18,
    name: "User Cover Photo 18",
    description: "Morbi vehicula ligula et felis finibus vulputate.",
    price: 64.99,
    category: "Clothing",
    image:
      "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg",
  },
  {
    id: 19,
    name: "User Cover Photo 19",
    description: "Ut sollicitudin nisi at eleifend aliquet.",
    price: 15.99,
    category: "Electronics",
    image:
      "https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-thumb.jpg",
  },
  {
    id: 20,
    name: "User Cover Photo 20",
    description: "Nam eu dolor id orci sollicitudin vulputate.",
    price: 37.99,
    category: "Home & Kitchen",
    image:
      "https://c4.wallpaperflare.com/wallpaper/974/565/254/windows-11-windows-10-minimalism-hd-wallpaper-thumb.jpg",
  },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");
  const products = data.slice(0, limit);

  return NextResponse.json({ products });
}
