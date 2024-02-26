const foodlist=require("./food.json");


console.log("list all the food items")
 foodlist.map((items)=>{
    console.log(items.foodname)
});

console.log("list all the food items with category vegetables")

const veg=foodlist.filter((items)=>{
    return items.category==="Vegetable";
});

const vegname=veg.map((name)=>{
    return name.foodname;
})

console.log(vegname)

console.log("list all the food items with category fruit")

const  fruirname=foodlist.filter((items)=>{
    return items.category==="Fruit"
})

const frutlist=fruirname.map((name)=>{
    return name.foodname;
})

console.log(frutlist)

console.log("list all the food items with category protien")


const  proirname=foodlist.filter((items)=>{
    return items.category==="Protein"
})

const potienlist=proirname.map((name)=>{
    return name.foodname;
})

console.log(potienlist)

console.log("list all the food items with category nuts")

const  nutname=foodlist.filter((items)=>{
    return items.category==="Nuts"
})

const nutlist=nutname.map((name)=>{
    return name.foodname;
})

console.log(nutlist)

console.log("list all the food items with category grains")



const  grainsname=foodlist.filter((items)=>{
    return items.category==="Grain"
})

const grainslist=grainsname.map((name)=>{
    return name.foodname;
})

console.log(grainslist)

console.log("list all the food items with category dairy")

const  dairyname=foodlist.filter((items)=>{
        
        return items.category==="Dairy"
})

const dairylist=dairyname.map((name)=>{
    return name.foodname;
})

console.log(dairylist)

console.log("list all the food items with calorie above 100")

const calabove100=foodlist.filter((items)=>{
        
        return items.calorie>100;
})

const calabovelist=calabove100.map((name)=>{
    return name.foodname;
})

console.log(calabovelist)


console.log("list all the food items with calorie below 100")

const calbelow100=foodlist.filter((items)=>{
        
    return items.calorie<100;
})

const calabelowlist=calbelow100.map((name)=>{
return name.foodname;
})

console.log(calabelowlist);



console.log("list all the food items with highest protien content to lowest")


const protienhtol=foodlist.sort((a,b)=>{
    return b.protiens-a.protiens;
});
const prolist=protienhtol.map((items)=>{
    return items.foodname;
})


console.log(prolist)

console.log("list all the food items with lowest cab content to highest")

const cabltoh=foodlist.sort((a,b)=>{
      return a.cab-b.cab;
})

const cablist=cabltoh.map((name)=>{
    return name.foodname;
})

console.log(cablist)