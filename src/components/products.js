// import { createClient } from "@supabase/supabase-js";

// export const products = [
//   {
//     id: "1",
//     price: 100,
//     title: "Plain Hooded Fleece Sweatshirt",
//     img: "https://plus.unsplash.com/premium_photo-1664391753897-b12da2576eb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFBsYWluJTIwSG9vZGVkJTIwRmxlZWNlJTIwU3dlYXRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: "2",
//     price: 150,
//     title: "Classic Denim Jacket",
//     img: "https://images.unsplash.com/photo-1519803786820-8f866133444d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     id: "3",
//     price: 200,
//     title: "Slim Fit Chinos",
//     img: "https://images.unsplash.com/photo-1499202977705-65f436dac18a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaW5vc3xlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: "4",
//     price: 250,
//     title: "Leather Messenger Bag",
//     img: "https://plus.unsplash.com/premium_photo-1672829371769-bcff266023a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: "5",
//     price: 300,
//     title: "Running Shoes",
//     img: "https://images.unsplash.com/photo-1557461761-c7c2b7a5fa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww",
//   },
//   {
//     id: "6",
//     price: 350,
//     title: "Digital Wristwatch",
//     img: "https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: "7",
//     price: 400,
//     title: "Bluetooth Headphones",
//     img: "https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZXRvb3RoJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: "8",
//     price: 450,
//     title: "Smartphone",
//     img: "https://images.unsplash.com/photo-1502096472573-eaac515392c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     id: "9",
//     price: 500,
//     title: "4K Ultra HD Television",
//     img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVsZXZpc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: "10",
//     price: 550,
//     title: "Portable Bluetooth Speaker",
//     img: "https://images.unsplash.com/photo-1668649175276-fa4f96beb185?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: "11",
//     price: 600,
//     title: "Gaming Laptop",
//     img: "https://images.unsplash.com/photo-1640695257754-7e2932f9ad0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fDB8fHww",
//   },
//   {
//     id: "12",
//     price: 650,
//     title: "Wireless Earbuds",
//     img: "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww",
//   },
//   {
//     id: "13",
//     price: 700,
//     title: "Electric Scooter",
//     img: "https://plus.unsplash.com/premium_photo-1674777843511-eb96fd89fd96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWMlMjBzY29vdGVyfGVufDB8fDB8fHww",
//   },
//   {
//     id: "14",
//     price: 750,
//     title: "Mountain Bike",
//     img: "https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW4lMjBiaWtlfGVufDB8fDB8fHww",
//   },
//   {
//     id: "15",
//     price: 800,
//     title: "Fitness Tracker",
//     img: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     id: "16",
//     price: 850,
//     title: "Smart Thermostat",
//     img: "https://images.unsplash.com/photo-1619140099965-06d74aaf51fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U21hcnQlMjBUaGVybW9zdGF0fGVufDB8fDB8fHww",
//   },
//   {
//     id: "17",
//     price: 900,
//     title: "Robot Vacuum Cleaner",
//     img: "https://images.unsplash.com/photo-1653990480360-31a12ce9723e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9ib3QlMjB2YWNjdW0lMjBjbGVhbmVyfGVufDB8fDB8fHww",
//   },
//   {
//     id: "18",
//     price: 950,
//     title: "Wireless Charging Pad",
//     img: "https://images.unsplash.com/photo-1543472750-506bacbf5808?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2lyZWxlc3MlMjBjaGFyZ2luZyUyMHBhZHxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: "19",
//     price: 1000,
//     title: "Smart Home Security Camera",
//     img: "https://images.unsplash.com/photo-1715869618915-a7bf6608d4c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjBob21lJTIwc2VjdXJpdHklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     id: "20",
//     price: 1050,
//     title: "Instant Pot",
//     img: "https://images.unsplash.com/photo-1556910148-3adb7f0c665a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFudCUyMHBvdHxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: "21",
//     price: 1100,
//     title: "Electric Toothbrush",
//     img: "https://images.unsplash.com/photo-1695073623172-83ccd32fada9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjB0b290aGJydXNofGVufDB8fDB8fHww",
//   },
//   {
//     id: "22",
//     price: 1150,
//     title: "Noise Cancelling Headphones",
//     img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: "23",
//     price: 1200,
//     title: "Smart Light Bulbs",
//     img: "https://images.unsplash.com/photo-1478826160983-e6db8c7d537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0JTIwbGlnaHQlMjBidWxiYXxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: "24",
//     price: 1250,
//     title: "3D Printer",
//     img: "https://plus.unsplash.com/premium_photo-1715228482113-bccc417a1b57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8M2QlMjBwcmludGVyfGVufDB8fDB8fHww",
//   },
//   {
//     id: "25",
//     price: 1300,
//     title: "Drone with Camera",
//     img: "https://images.unsplash.com/photo-1486611367184-17759508999c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D",
//   },
// ];


// const supabaseUrl = "https://dxovanotbjlvrpjdazuq.supabase.co";
// const supabaseKey = import.meta.env.VITE_API_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);


//   async function insertData() {
//     for (const item of products) {
//       const { data, error } = await supabase
//         .from('products')
//         .insert([{ id:item.id,price: item.price, title: item.title, img: item.img }]);
      
//       if (error) {
//         console.error('Error inserting data:', error);
//       } else {
//         console.log('Data inserted:', data);
//       }
//     }
//   }
  
//   // Call the function to insert data
//   insertData();
