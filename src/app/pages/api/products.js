
export default function Handler (req , res){
    const products = [
        {
            id : 1 ,
            name : "Pilot Custom",
            price : "$280",
            image : {cart1},
        },
        {
            id : 2 ,
            name : "Dollar",
            price : "$300",
            image : {cart2},
        },
        {
            id : 3 ,
            name : "Piano",
            price : "$150",
            image : {cart3},
        },
        {
            id : 4 ,
            name : "Montblanc",
            price : "$700",
            image : {cart4},
        },
        {
            id : 5 ,
            name : "Lamy",
            price : "$200",
            image : {cart5},
        },
        {
            id : 6 ,
            name : "Parker Duofold Centennial",
            price : "$600",
            image : {cart6},
        }
    ];
    res.status(200).json(products);
}