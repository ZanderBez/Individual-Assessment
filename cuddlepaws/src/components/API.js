export const fetchPetStoreItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          image: 'https://www.pngall.com/wp-content/uploads/4/Dog-Food-PNG-Picture.png',
          name: 'Dog Food',
          price: 25.99,
          description: 'High-quality dog food for your pet.',
        },
        {
          id: 2,
          image: 'https://static.vecteezy.com/system/resources/thumbnails/013/796/758/small/cute-cat-toys-3d-rendering-png.png',
          name: 'Cat Toy',
          price: 8.99,
          description: 'Fun toy to keep your cat entertained.',
        },
        {
          id: 3,
          image: 'https://pngimg.com/d/cage_PNG34.png',
          name: 'Bird Cage',
          price: 75.49,
          description: 'Spacious and comfortable bird cage.',
        },
        {
          id: 4,
          image: 'https://pngimg.com/d/aquarium_PNG59.png',
          name: 'Fish Tank',
          price: 120.00,
          description: 'A large tank for your fish with all accessories included.',
        },
        {
          id: 5,
          image: 'https://www.denbightimberproducts.co.uk/wp-content/uploads/2019/09/Rabbit-hutch.png',
          name: 'Rabbit Hutch',
          price: 150.00,
          description: 'A cozy and spacious hutch for your rabbit.',
        },
        {
          id: 6,
          image: 'https://media-be.chewy.com/wp-content/uploads/2019/04/Orbbe-tuff-dog-toy.png',
          name: 'Dog toys',
          price: 12.99,
          description: 'Fun toy to keep your dog entertained.',
        },
        {
          id: 7,
          image: 'https://www.petfoodnmore.com/wp-content/uploads/Petmate/JW/JW-Activitoys-Bell-w-Pendulot-lg.png',
          name: 'Parrot Toy',
          price: 18.49,
          description: 'Colorful toy to keep your parrot entertained.',
        },
        {
          id: 8,
          image: 'https://pngimg.com/d/leash_PNG98.png',
          name: 'Dog Leash',
          price: 14.99,
          description: 'Durable and comfortable leash for your dog.',
        },
        {
          id: 9,
          image: 'https://cdn.pixabay.com/photo/2019/01/25/08/51/cat-3953989_960_720.png',
          name: 'Cat Scratching Post',
          price: 30.99,
          description: 'Tall scratching post for your cat to play and scratch.',
        },
        {
          id: 10,
          image: 'https://png.pngtree.com/png-vector/20240314/ourmid/pngtree-wooden-bird-feeder-feeds-wild-birds-flat-flat-png-image_11950944.png',
          name: 'Bird Feeder',
          price: 20.00,
          description: 'A hanging bird feeder for your backyard.',
        }
      ]);
    }, 500); 
  });
};
