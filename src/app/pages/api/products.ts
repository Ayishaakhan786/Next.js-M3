import { NextApiRequest, NextApiResponse } from "next";

export interface Product {
    id: number;
    name: string;
    price: string | number;
    image: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const products: Product[] = [
        {
            id: 1,
            name: "Pilot Custom",
            price: "$280",
            image: "https://static3.webx.pk/files/4688/Images/1eb2424c95a6f9074d13ce07011b7a26-4688-793450-130422124726234.jpeg",
        },
        {
            id : 2 ,
            name : "Dollar",
            price : "$300",
            image : "https://static3.webx.pk/files/4688/Images/1eb2424c95a6f9074d13ce07011b7a26-4688-793450-130422124726234.jpeg",
        },
        {
            id : 3 ,
            name : "Piano",
            price : "$150",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXpsHYtKbog7VG4ytUVrVW_Glgoglc_AtTg&s",
        },
        {
            id : 4 ,
            name : "Montblanc",
            price : "$700",
            image : "https://shopatshams.com.pk/cdn/shop/files/www.shopatshams.com.pk_3059d0a4-304f-464f-90b4-82e9e673b147.png?v=1725961177",
        },
        {
            id : 5 ,
            name : "Lamy",
            price : "$200",
            image : "https://thestationers.pk/cdn/shop/products/lamy-safari-fountain-pen-blue-the-stationers.jpg?v=1708446976",
        },
        {
            id : 6 ,
            name : "Parker Duofold Centennial",
            price : "$600",
            image : "https://stationers.pk/cdn/shop/files/ParkerDuofoldCentennialFountainPen1.jpg?v=1689579808&width=1500",
        }
        
    ];
    res.status(200).json(products);
}