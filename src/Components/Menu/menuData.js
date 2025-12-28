import signatureCoffee from "../../assets/category/signatureCoffee.jpg";
import coldBrew from "../../assets/category/coldBrew.jpeg";
import masalaChai from "../../assets/category/masalaChai.jpeg";
import croissant from "../../assets/category/croissant.jpeg";
import truffleCheese from "../../assets/category/truffleCheese.jpeg";
import spaghetti from "../../assets/category/spaghetti.jpeg";
import hazelnutTart from "../../assets/category/hazelnutTart.jpeg";
import chocolateFondant from "../../assets/category/chocolateFondant.jpeg";
import vanillaPannaCotta from "../../assets/category/vanillaPannaCotta.jpeg";
import oliveOilCake from "../../assets/category/oliveOilCake.jpg";
import tiramisu from "../../assets/category/tiramisu.jpeg";

export const menuData = {
drinks: {
label: "Drinks",
types:{
    signatureCoffee: {
        image: signatureCoffee,
        label:"Signature Coffee",
        items: [
            {name: "Classic Espresso", price: 290},
            {name: "Velvet Americano",price: 330},
            {name: "Golden Cappuccino", price: 420},
            {name: "Silk Latte", price: 450},
            {name: "Midnight Mocha", price: 480},
            {name: "Honey Oat Latte", price: 500},
            {name: "Spanish Cortado", price: 420},
            {name: "Vienna Cream Coffee", price: 520}
        ]
    },
    coldCraft: {
        image: coldBrew,
        label: "Cold Craft",
        items: [
            {name: "Arctic Cold Brew",price: 480},
            {name: "Iced Velvet Latte",price: 450},
            {name: "Smoked Vanilla Brew",price: 500},
            {name: "Vanilla Sweet Cream Cold Brew",price: 500},
            {name: "Tonic Espresso",price: 450},
            {name: "Iced Matcha Cloud",price: 500}

        ]
    },
    artisanTea: {
        image: masalaChai,
        label: "Artisan tea & Cocoa",
        items:[
            {name: "Imperial Masala Chai",price: 350},
            {name: "Jade Green Tea",price: 300},
            {name: "Moroccan Mint Tea",price: 320},
            {name: "Matcha Silk",price: 480},
            {name: "Noir Hot Chocolate",price: 400}
        ]
    }
  }
},

food: {
label: "Foods",
types: {
    pastries:{
        image: croissant,
        label: "Classic French Pastries",
        items: [
            {name: "Parisian Butter Croissant",price: 220},
            {name: "Chocolate Croissant",price: 250},
            {name: "Almond Croissant",price: 280},
            {name: "Brioche French Toast",price: 350},
            {name: "Avocado & Herb Toast",price: 380},
            {name: "Sourdough Toast",price: 300}
        ]
    },

    sandwich: {
        image: truffleCheese,
        label: "Gourmet Sandwich",
        items: [
            {name: "Truffle Grilled Cheese",price: 480},
            {name: "Mushroom Brioche Melt",price: 450},
            {name: "Paneer & Herb Panini",price: 420},
            {name: "Roasted Vegetable Focaccia",price: 400},
            {name: "Smoked Cheese & Tomato Melt",price: 430}
            
        ]
    },

    lightPlates:{
        image: spaghetti,
        label: "Light Plates",
        items: [
            {name: "Creamy Mushroom Pasta",price: 480},
            {name: "Aglio Olio Spaghetti",price: 450},
            {name: "Pesto Penne",price: 480},
            {name: "Herb Rice Bowl",price: 400}
        ]
    }
  }
},

desserts:{
    label: "Desserts",
    types:{
        nutCreations: {
            image: hazelnutTart,
            label: "Nut & Chocolate Creations",
            items: [
                {name: "Hazelnut Praline Tart",price: 420},
                {name: "Dark Chocolate Tart",price: 450},
                {name: "Almond Frangipane Tart",price: 400},
                {name: "Chocolate Opera Slice",price: 480}
            ]
        },

        chcocoCreations: {
            image: chocolateFondant,
            label: "Chocolate Creations",
            items: [
                {name: "Valrhona Dark Chocolate Torte", price: 500},
                {name: "Warm Chocolate Fondant", price: 490},
                {name: "Chocolate Hazelnut Praline Slice", price: 450}
            ]
        },

        custard: {
            image: vanillaPannaCotta,
            label: "Cream & Custard Elegance",
            items: [
                {name: "Vanilla Bean Crème Brûlée",price: 420},
                {name: "Madagascar Vanilla Panna Cotta",price: 400},
                {name: "Espresso Crème Caramel",price: 420}
            ]
        },

        fruit: {
            image: oliveOilCake,
            label: "Fruit & Seasonal Refinement",
            items: [
                {name: "Seasonal Berry Tart",price: 420},
                {name: "Citrus Olive Oil Cake",price: 400},
                {name: "Fig & Honey Tart",price: 450}
            ]
        },

        coffeeSignature: {
            image: tiramisu,
            label: "Coffee-Inspired Signatures",
            items: [
                {name: "Tiramisu Classico",price: 450},
                {name: "Affogato Royale",price: 480},
                {name: "Coffee Opera Gateau",price: 500}

            ]
        }

    }
}      
}