import signatureCoffee from '../../assets/category/signatureCoffee.jpg'
import coldBrew from '../../assets/category/coldBrew.jpeg'
import masalaChai from '../../assets/category/masalaChai.jpeg'

import croissant from '../../assets/category/croissant.jpeg'
import truffleCheese from '../../assets/category/truffleCheese.jpeg'
import spaghetti from '../../assets/category/spaghetti.jpeg'

import hazelnutTart from '../../assets/category/hazelnutTart.jpeg'
import vanillaPannaCotta from '../../assets/category/vanillaPannaCotta.jpeg'
import tiramisu from '../../assets/category/tiramisu.jpeg'

//signature coffee
import classicEspresso from '../../assets/category/classicEspresso.jpeg'
import cinnamonRollLatte from '../../assets/category/cinnamonRollLatte.jpeg'
import midnightMocha from '../../assets/category/midnightMocha.jpeg'
import honeyOatMilk from '../../assets/category/honey-oat-milk.jpeg'
import cortado from '../../assets/category/cortado.png'
import viennaCream from '../../assets/category/viennaCream.jpeg'

//cold craft
import vanillaColdBrew from '../../assets/category/vanillaColdBrew.jpeg'
import icedVanillaLatte from '../../assets/category/icedVanillaLatte.jpeg'
import saltedColdBrew from '../../assets/category/saltedColdBrew.jpeg'
import espressoTonic from '../../assets/category/espressoTonic.jpeg'
import icedMatchaCloud from '../../assets/category/icedMatchaCloud.png'

//artisan Tea Cocoa
import jadeGreenTea from '../../assets/category/jadeGreenTea.jpeg'
import moroccanMintTea from '../../assets/category/moroccanMintTea.jpeg'
import frenchHotChocolate from '../../assets/category/frenchHotChocolate.jpeg'
import hazelnutCocoa from '../../assets/category/hazelnutCocoa.jpeg'

//french pastries
import chocolateCroissant from '../../assets/category/chocolateCroissant.jpeg'
import frenchAlmondCroissant from '../../assets/category/frenchAlmondCroissant.jpeg'
import briocheFrenchToast from '../../assets/category/briocheFrenchToast.jpeg'
import avocadoRicottaToast from '../../assets/category/avocadoRicottaToast.jpeg'
import sourdoughJapaneseMilk from '../../assets/category/sourdoughJapaneseMilk.jpeg'

//Gourmet Sandwich
import mushroomMelt from '../../assets/category/mushroomMelt.jpeg'
import chickenPestoSandwich from '../../assets/category/chickenPestoSandwich.jpeg'
import roastedVegetableFocaccia from '../../assets/category/roastedVegetableFocaccia.jpeg'
import tomatoAndSpinachCheeseMelt from '../../assets/category/tomatoAndSpinachCheeseMelt.jpeg'
import swissMushroomMelt from '../../assets/category/swissMushroomMelt.jpeg'

//light plates
import creamyMushroomPasta from '../../assets/category/creamyMushroomPasta.jpeg'
import pestoPennePasta from '../../assets/category/pestoPennePasta.jpeg'
import herbRiceBowl from '../../assets/category/herbRiceBowl.jpeg'
import loadedFries from '../../assets/category/loadedFries.jpeg'
import loadedNachos from '../../assets/category/loadedNachos.jpeg'


//nut&chocolatecreations
import chocolateTart from '../../assets/category/chocolateTart.jpeg'
import raspberryFrangipaneTart from '../../assets/category/raspberryFrangipaneTart.jpeg'
import operaCake from '../../assets/category/operaCake.jpeg'
import pistachioChocolateBar from '../../assets/category/pistachioChocolateBar.jpeg'
import chocolateWalnutBrownie from '../../assets/category/chocolateWalnutBrownie.jpeg'

//
import vanillaCremeBrulue from '../../assets/category/vanillaCremeBrulue.jpeg'
import vanillaBeanPannaCotta from '../../assets/category/vanillaBeanPannaCotta.jpeg'
import espressoCremeCaramel from '../../assets/category/espressoCremeCaramel.jpeg'
import frenchChocolateFlan from '../../assets/category/frenchChocolateFlan.jpeg'
import germanBeeStingCake from '../../assets/category/germanBeeStingCake.jpeg'
import classicLemonPudding from '../../assets/category/classicLemonPudding.jpeg'


//coffee inspired
import affogato from '../../assets/category/affogato.jpeg'
import operaGateau from '../../assets/category/operaGateau.jpeg'
import coffeeMousse from '../../assets/category/coffeeMousse.jpeg'
import ciastoCappuccino from '../../assets/category/ciastoCappuccino.jpeg'
import chocolateMacarons from '../../assets/category/chocolateMacarons.jpeg'


export const menuData = {
drinks: {
label: "Drinks",
types: {
    signatureCoffee: {
        label: "Signature Coffee",
        image: signatureCoffee,
        items: [
            {
            slug: "classic-espresso",
            image: classicEspresso,
            name: "Classic Espresso",
            description: "A bold, richly aromatic espresso shot.",
            price: 290
            },

            {
            slug: "golden-cappuccino",
            image: signatureCoffee,
            name: "Golden Cappuccino", 
            description: "A creamy espresso topped with velvety, golden-frothed milk.",
            price: 220
            },

            {
            slug: "cinnamon-roll-latte",
            image: cinnamonRollLatte,
            name: "Cinnamon Roll Latte",
            description: "Espresso, milk, and cinnamon-sugar bliss.", 
            price: 250
            },

            {
            slug: "honey-oat-latte",
            image: honeyOatMilk,
            name: "Honey Oat Latte", 
            description: "Smooth espresso with creamy oat milk, lightly sweetened by golden honey.",
            price: 230
            },

            {
            slug: "spanish-cortado",
            image: cortado,
            name: "Spanish Cortado",
            description:"Equal parts espresso and warm milk, balanced for smooth, bold flavor.", 
            price: 220
            },


            {
            slug: "vienna-cream-coffee",
            image: viennaCream,
            name: "Vienna Cream Coffee", 
            description:"Smooth espresso crowned with whipped cream for a classic indulgence.",
            price: 220
            }
        ]
    },
    coldCraft: {
        label: "Cold Craft",
        image: coldBrew,
        items:[
            {
            slug: "cold-brew Concentrate",
            image: coldBrew,
            name: "Cold Brew Concentrate",
            description:"Carefully cold-steeped and concentrated for a rich, powerful coffee experience.",
            price: 180
            },

            {
            slug: "iced-vanilla-latte",
            image: icedVanillaLatte,
            name: "Iced Vanilla Latte",
            description:"Chilled espresso with creamy milk and a touch of vanilla sweetness.",
            price: 230
            },

            {
            slug: "salted-maple-pecan-cold-brew-cream",
            image: saltedColdBrew,
            name: "Salted Maple Pecan Cold Brew Cream",
            description:"Cold brew enriched with maple sweetness, toasted pecan notes, and a hint of sea salt cream.",
            price: 200
            },

            {
            slug: "vanilla-cold-brew",
            image: vanillaColdBrew,
            name: "Vanilla Cold Brew",
            description:"Bold cold brew balanced with soft vanilla notes for a smooth, refreshing finish.",
            price: 200
            },

            {
            slug: "tonic-espresso",
            image: espressoTonic,
            name: "Tonic Espresso",
            description:"Bright espresso poured over sparkling tonic for a crisp, refreshing twist.",
            price: 250
            },

            {
            slug: "iced-matcha-cloud",
            image: icedMatchaCloud,
            name: "Iced Matcha Cloud",
            description:"Whisked matcha over chilled milk, topped with airy cream for a refreshing, cloud‑like sip.",
            price: 250
            },
        ]
    },
    artisanTeaCocoa: {
        label: "Artisan Tea & Cocoa",
        image: masalaChai,
        items: [
            {
            slug: "imperial-masala-chai",
            image: masalaChai,
            name: "Imperial Masala Chai",
            description:"Robust black tea infused with aromatic spices, finished with creamy milk for a regal sip.",
            price: 250
            },

            {
            slug: "jade-green-tea",
            image: jadeGreenTea,
            name: "Jade Green Tea",
            description:"Delicate green tea with a fresh, calming finish",
            price: 180
            },

            {
            slug: "moroccan-mint-tea",
            image: moroccanMintTea,
            name: "Moroccan Mint Tea",
            description:"Refreshing green tea infused with cool, aromatic mint.",
            price: 220
            },

            {
            slug: "matcha-silk",
            image: midnightMocha,
            name: "Matcha Silk",
            description:"Stone-ground matcha gently blended with milk for a smooth, velvety cup",
            price: 280
            },

            {
            slug: "french-hot-chocolate",
            image: frenchHotChocolate,
            name: "French Hot Chocolate",
            description:"Rich, velvety chocolate melted into warm milk, finished with a touch of cream.",
            price: 240
            },
            {
            slug: "hazelnut-cocoa",
            image: hazelnutCocoa,
            name: "Hazelnut Cocoa",
            description:"Velvety cocoa blended with roasted hazelnut for a nutty, indulgent finish.",
            price: 200
            }

        ]
    },
}
},
foods: {
label:"Foods",
types: {
    frenchPastries:{
        label: "French Pastries",
        image: croissant,
        items:[
            {
            slug: "parisian-butter-croissant",
            image: croissant,
            name: "Parisian Butter Croissant",
            description:"Flaky, golden layers with rich, buttery flavor.",
            price: 220
            },

            {
            slug: "chocolate-croissant",
            image: chocolateCroissant,
            name: "Chocolate Croissant",
            description:"Flaky, buttery pastry filled with rich, melted chocolate.",
            price: 250
            },

            {
            slug: "almond-croissant",
            image: frenchAlmondCroissant,
            name: "Almond Croissant",
            description:"A buttery, flaky croissant filled with rich almond cream and finished with toasted almonds",
            price: 280
            },

            {
            slug: "brioche-french-toast",
            image: briocheFrenchToast,
            name: "Brioche French Toast",
            description:"Thick, buttery brioche slices soaked and golden‑fried, served with a soft, custardy center.",
            price: 250
            },

            {
            slug: "avocado-and-ricotta-toast",
            image: avocadoRicottaToast,
            name: "Avocado and Ricotta Toast",
            description:"Creamy ricotta layered with fresh avocado on toasted bread, finished with a sprinkle of herbs.",
            price: 280
            },

            {
            slug: "sourdough-japanese-milk-bread",
            image: sourdoughJapaneseMilk,
            name: "Sourdough Japanese Milk Bread",
            description:"Soft, fluffy milk bread enriched with tangy sourdough, baked to a tender golden loaf.",
            price: 200
            }

        ]
    },
    gourmetSandwich:{
        label: "Gourmet Sandwich",
        image: truffleCheese,
        items:[
            {
            slug: "truffle-grilled-cheese",
            image: truffleCheese,
            name: "Truffle Grilled Cheese",
            description:"Golden, buttery bread toasted with melted cheese, elevated by earthy truffle richness",
            price: 280
            },

            {
            slug: "caramelized-onion-and-truffle-mushroom-melt",
            image: mushroomMelt,
            name: "Caramelized Onion & Truffle Mushroom Melt",
            description:"Savory mushrooms, sweet onions, and truffle richness on toasted bread",
            price: 250
            },

            {
            slug: "chicken-pesto-sandwich",
            image: chickenPestoSandwich,
            name: "Chicken Pesto Sandwich",
            description:"Tender grilled chicken, aromatic basil pesto, and melted cheese in toasted bread.",
            price: 220
            },

            {
            slug: "roasted-vegetable-focaccia",
            image: roastedVegetableFocaccia,
            name: "Roasted Vegetable Focaccia",
            description:"Warm focaccia topped with tender, herb‑roasted seasonal vegetables.",
            price: 200
            },

            {
            slug: "sun-dried-tomato-and-spinach-grilled-cheese-melt",
            image: tomatoAndSpinachCheeseMelt,
            name: "Sun Dried Tomato & Spinach Grilled CheeseMelt",
            description:"Smoky, melted cheese layered with juicy tomatoes on crisp, toasted bread.",
            price: 230
            },
            {
            slug: "swiss-mushroom-melt",
            image: swissMushroomMelt,
            name: "Swiss Mushroom Melt",
            description:"Sautéed mushrooms with melted Swiss cheese on toasted artisan bread.",
            price: 230
            }

        ]
    },
    lightPlates: {
        label: "Light Plates",
        image: spaghetti,
        items:[
            {
            slug: "creamy-mushroom-pasta",
            image: creamyMushroomPasta,
            name: "Creamy Mushroom Pasta",
            description:"Tender pasta tossed in a rich, velvety mushroom cream sauce.",
            price: 280
            },

            {
            slug: "aglio-olio-spaghetti",
            image: spaghetti,
            name: "Aglio Olio Spaghetti",
            description:"Classic spaghetti tossed with garlic, olive oil, and a hint of chili.",
            price: 250
            },

            {
            slug: "pesto-penne",
            image: pestoPennePasta,
            name: "Pesto Penne",
            description:"Al dente penne pasta tossed in fragrant basil pesto with a touch of parmesan.",
            price: 280
            },

            {
            slug: "creamy-garlic-butter-shrimp-bowl-with-herb-rice",
            image: herbRiceBowl,
            name: "Creamy Garlic Butter Shrimp Bowl with Herb Rice",
            description:"Fragrant rice tossed with fresh herbs, light and flavorful",
            price: 280
            },
            {
            slug: "loaded-fries ",
            image: loadedFries,
            name: "Loaded Fries ",
            description:"Crispy golden fries topped with melted cheese and signature seasonings.",
            price: 190
            },
            {
            slug: "nachos-with-cheese-and-salsa",
            image: loadedNachos,
            name: "Nachos with Cheese & Salsa",
            description:"Corn tortilla chips layered with warm cheese sauce and fresh tomato salsa.",
            price: 150
            }
        ]
    }
}
},
desserts:{
label: "Desserts",
types:{
    nutChocolate: {
        label: "Nut & Chocolate Creations",
        image: hazelnutTart,
        items:[
            {
            slug: "hazelnut-praline-tart",
            image: hazelnutTart,
            name: "Hazelnut Praline Tart",
            description:"Buttery tart shell filled with silky praline cream and topped with crunchy caramelized hazelnuts.",
            price: 220
        },

        {
            slug: "dark-chocolate-tart",
            image: chocolateTart,
            name: "Dark Chocolate Tart",
            description:"Buttery crust filled with silky, rich dark chocolate ganache",
            price: 180
        },

        {
            slug: "raspberry-frangipane-tart",
            image: raspberryFrangipaneTart,
            name: "Raspberry Frangipane Tart",
            description:"Buttery tart shell filled with soft almond cream, baked to a golden, delicate finish.",
            price: 200
        },

        {
            slug: "chocolate-opera-slice",
            image: operaCake,
            name: "Chocolate Opera Slice",
            description:"Layers of almond sponge, coffee buttercream, and rich chocolate ganache.",
            price: 240
        },  
        {
            slug: "pistachio-chocolate-bar",
            image: pistachioChocolateBar,
            name: "Pistachio Chocolate Bar",
            description:"Smooth chocolate layered with roasted pistachios.",
            price: 240
        },
        {
            slug: "chocolate-walnut-brownie",
            image: chocolateWalnutBrownie,
            name: "Chocolate Walnut Brownie",
            description:"Rich chocolate brownie studded with toasted walnuts.",
            price: 280
        }   

        ]
    },
    creamCustard:{
        label: "Cream & Custard Elegance",
        image: vanillaPannaCotta,
        items:[
            {
            slug: "Vanilla Bean Crème Brûlée",
            image: vanillaCremeBrulue,
            name: "Vanilla Bean Crème Brûlée",
            description:"Silky custard infused with vanilla bean, topped with a crisp caramelized sugar crust.",
            price: 220
        },
        {
            slug: "vanilla-bean-panna-cotta",
            image: vanillaBeanPannaCotta,
            name: "Vanilla Panna Cotta",
            description:"Silky vanilla bean cream, delicately set.",
            price: 260
        },
        {
            slug: "espresso-Creme-caramel",
            image: espressoCremeCaramel,
            name: "Espresso Crème Caramel",
            description:"Silky baked custard infused with bold espresso, topped with a glossy caramel layer.",
            price: 220
        },
        {
            slug: "french-chocolate-flan",
            image: frenchChocolateFlan,
            name: "French Chocolate Flan",
            description:"Smooth baked chocolate custard with deep cocoa notes.",
            price: 250
        },
        {
            slug: "german-bee-sting-cake",
            image: germanBeeStingCake,
            name: "German Bee Sting Cake",
            description:"Soft yeast cake layered with vanilla cream and caramelized almonds",
            price: 230
        },
        {
            slug: "classic-lemon-pudding",
            image: classicLemonPudding,
            name: "Classic Lemon Pudding",
            description:"Light lemon custard with a bright, citrus finish.",
            price: 210
        }
        ]
    },
    coffeeInspired: {
        label: "Coffee Inspired Signatures",
        image: tiramisu,
        items:[
            {
            slug: "Tiramisu Classico",
            image: tiramisu,
            name: "Tiramisu Classico",
            description:"Classic Italian layers of espresso-soaked sponge and mascarpone cream.",
            price: 250
        },
        {
            slug: "affogato-royale",
            image: affogato,
            name: "Affogato Royale",
            description:"Vanilla ice cream “drowned” in rich espresso for a decadent finish.",
            price: 200
        },
        {
            slug: "coffee-opera-gateau",
            image: operaGateau,
            name: "Coffee Opera Gateau",
            description:"Moist coffee sponge layered with coffee buttercream and chocolate ganache.",
            price: 280
        },
        {
            slug: "coffee-mousse",
            image: coffeeMousse,
            name: "Coffee Mousse",
            description:"Light, airy coffee-infused mousse with a velvety finish.",
            price: 280
        },
        {
            slug: "ciasto-cappuccino",
            image: ciastoCappuccino,
            name: "Ciasto Cappuccino",
            description:"Light sponge cake infused with cappuccino, layered with silky coffee cream.",
            price: 200
        },
        {
            slug: "mocha-macaron-stack",
            image: chocolateMacarons,
            name: "Mocha Macaron Stack",
            description:"Delicate coffee macarons stacked with mocha ganache and crisp shells.",
            price: 300
        }

        ]
    }
}
}
}