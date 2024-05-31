export const fetchPetStoreItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          image: 'https://www.pngall.com/wp-content/uploads/4/Dog-Food-PNG-Picture.png',
          name: 'Dog Food',
          price: 25.99,
          description: 'Provide your beloved pet with high-quality dog food that ensures optimal health, nutrition, and happiness. Our premium formulations are crafted with the finest ingredients, designed to support their immune system, promote a shiny coat, enhance digestion, and maintain their energy levels. With every delicious bite, you can trust that you are giving your furry friend the best possible care, contributing to their overall well-being and longevity.',
        },
        {
          id: 2,
          image: 'https://static.vecteezy.com/system/resources/thumbnails/013/796/758/small/cute-cat-toys-3d-rendering-png.png',
          name: 'Cat Toy',
          price: 8.99,
          description: 'Give your cat hours of joy and stimulation with a fun toy designed to keep them entertained. Our engaging and interactive toys are crafted to cater to your felines natural instincts, providing mental and physical exercise that promotes their overall well-being. With vibrant colors, intriguing textures, and playful sounds, these toys will capture your cats attention and encourage active play, ensuring they remain happy, healthy, and thoroughly amused.',
        },
        {
          id: 3,
          image: 'https://pngimg.com/d/cage_PNG34.png',
          name: 'Bird Cage',
          price: 75.49,
          description: 'Provide your feathered friends with a spacious and comfortable bird cage that ensures their well-being and happiness. Our premium bird cages are designed with ample space for flying and playing, featuring sturdy construction, easy-to-clean materials, and thoughtful accessories to create a safe and stimulating environment. With plenty of room for perches, toys, and feeding stations, your birds will enjoy a comfortable and enriching habitat that supports their health and keeps them content and entertained.',
        },
        {
          id: 4,
          image: 'https://pngimg.com/d/aquarium_PNG59.png',
          name: 'Fish Tank',
          price: 120.00,
          description: 'Provide your fish with a large tank that comes complete with all the necessary accessories to create a thriving aquatic environment. Our spacious tanks are designed to offer ample swimming space and come equipped with essential features such as filters, heaters, lighting, and decorative elements. This all-in-one setup ensures optimal water quality, temperature regulation, and aesthetic appeal, giving your fish a comfortable and healthy home where they can flourish and display their natural behaviors.',
        },
        {
          id: 5,
          image: 'https://www.denbightimberproducts.co.uk/wp-content/uploads/2019/09/Rabbit-hutch.png',
          name: 'Rabbit Hutch',
          price: 150.00,
          description: 'Give your rabbit with a cozy and spacious hutch that ensures their comfort and well-being. Our premium hutches are designed with ample room for hopping, playing, and resting, featuring sturdy construction, weather-resistant materials, and secure locks. With additional features like multiple levels, easy-to-clean trays, and comfortable bedding areas, your rabbit will enjoy a safe, warm, and stimulating environment that supports their natural behaviors and keeps them happy and healthy',
        },
        {
          id: 6,
          image: 'https://media-be.chewy.com/wp-content/uploads/2019/04/Orbbe-tuff-dog-toy.png',
          name: 'Dog toys',
          price: 12.99,
          description: 'Give your dog hours of joy and stimulation with a fun toy designed to keep them entertained. Our engaging and durable toys are crafted to cater to your dogs natural instincts, providing mental and physical exercise that promotes their overall well-being. With vibrant colors, intriguing textures, and interactive features, these toys will capture your dogs attention and encourage active play, ensuring they remain happy, healthy, and thoroughly amused.',
        },
        {
          id: 7,
          image: 'https://www.petfoodnmore.com/wp-content/uploads/Petmate/JW/JW-Activitoys-Bell-w-Pendulot-lg.png',
          name: 'Parrot Toy',
          price: 18.49,
          description: 'Provide your parrot with a colorful and engaging toy that will keep them entertained and mentally stimulated. Our vibrant and durable toys are specifically designed to cater to your feathered friends natural instincts and intelligence, offering a variety of textures, shapes, and interactive elements to keep them engaged for hours on end. With safe and non-toxic materials, these toys encourage physical activity and mental enrichment, contributing to your parrots overall well-being and happiness in their habitat.',
        },
        {
          id: 8,
          image: 'https://pngimg.com/d/leash_PNG98.png',
          name: 'Dog Leash',
          price: 14.99,
          description: 'Select a durable and comfortable leash for your dog that ensures both their safety and your peace of mind during walks. Our premium leashes are crafted from high-quality materials that withstand daily wear and tear, featuring sturdy clasps and reinforced stitching for added durability. The soft and padded handle provides a comfortable grip, reducing strain on your hands during long walks or training sessions. With adjustable lengths and reflective elements for visibility, our leashes offer convenience and safety, allowing you to enjoy quality time outdoors with your beloved canine companion.',
        },
        {
          id: 9,
          image: 'https://cdn.pixabay.com/photo/2019/01/25/08/51/cat-3953989_960_720.png',
          name: 'Cat Scratching Post',
          price: 30.99,
          description: 'Elevate your cats playtime and scratching needs with a tall scratching post designed to meet their natural instincts. Our premium scratching posts are crafted with durable materials and a sturdy base, ensuring stability during vigorous play and scratching sessions. The tall design allows for full-body stretches, promoting healthy exercise and muscle tone. With multiple scratching surfaces and enticing textures, these posts provide a satisfying outlet for your cats scratching behavior while protecting your furniture. Enhance your cats environment with a tall scratching post that encourages active play and maintains their well-being.',
        },
        {
          id: 10,
          image: 'https://png.pngtree.com/png-vector/20240314/ourmid/pngtree-wooden-bird-feeder-feeds-wild-birds-flat-flat-png-image_11950944.png',
          name: 'Bird Feeder',
          price: 20.00,
          description: 'Transform your backyard into a vibrant avian oasis with our stylish hanging bird feeder. Crafted with durable materials and a secure hanging mechanism, this feeder offers stability and longevity, even in windy conditions. Its thoughtful design includes multiple feeding ports and compartments, accommodating various birdseed types and treats to suit different avian preferences. Featuring a protective roof or cover, our feeder shields seeds from the elements, ensuring freshness and enticing a diverse array of feathered visitors to your outdoor space. Watch in delight as colorful birds flock to dine and bring life to your backyard with our inviting hanging bird feeder.',
        }
      ]);
    }, 500); 
  });
};
