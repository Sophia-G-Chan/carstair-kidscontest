export interface Category {
    code: string;
    description: string;
}

export interface ContestSection {
    name: string;
    categories: Category[];
    cashAwards: Record<string, number>;
}

export interface AwardsByCategory {
    [award: string]: {
        "Ages 6-10 Individual": number;
        "Ages 11-17 Individual": number;
        "Group": number;
    };
}

export interface AgeGroup5AndUnder {
    [award: string]: {
        "Individual": number;
        "Group": number;
    };
}

export interface CashAwardsData {
    // Restructured to have awards as keys and age groups as values
    mainAwards: AwardsByCategory;

    // For 5 and under awards which have a different structure
    age5AndUnderAwards: AgeGroup5AndUnder;

    contestSections: ContestSection[];
}

// Cash Awards Data
export const cashAwardsData: CashAwardsData = {
    // Restructured awards with age groups as columns
    mainAwards: {
        "High Points in Show": {
            "Ages 6-10 Individual": 20,
            "Ages 11-17 Individual": 20,
            "Group": 20
        },
        "High Points Flowers": {
            "Ages 6-10 Individual": 10,
            "Ages 11-17 Individual": 10,
            "Group": 10
        },
        "High Points Vegetables": {
            "Ages 6-10 Individual": 10,
            "Ages 11-17 Individual": 10,
            "Group": 10
        },
        "High Points Handicrafts": {
            "Ages 6-10 Individual": 10,
            "Ages 11-17 Individual": 10,
            "Group": 10
        },
        "High Points Hobby Crafts and Artwork": {
            "Ages 6-10 Individual": 10,
            "Ages 11-17 Individual": 10,
            "Group": 10
        },
        "High Points Baking": {
            "Ages 6-10 Individual": 10,
            "Ages 11-17 Individual": 10,
            "Group": 10
        },
        "High Points Photography": {
            "Ages 6-10 Individual": 10,
            "Ages 11-17 Individual": 10,
            "Group": 10
        },
        "Best in Show Sunflower": {
            "Ages 6-10 Individual": 10,
            "Ages 11-17 Individual": 10,
            "Group": 10
        },
        "Best in Show Fairy Garden": {
            "Ages 6-10 Individual": 10,
            "Ages 11-17 Individual": 10,
            "Group": 10
        },
        "Best in Show Vegetables": {
            "Ages 6-10 Individual": 10,
            "Ages 11-17 Individual": 10,
            "Group": 10
        },
        "Best in Show Baking": {
            "Ages 6-10 Individual": 10,
            "Ages 11-17 Individual": 10,
            "Group": 10
        },
        "Best in Show Handicrafts": {
            "Ages 6-10 Individual": 10,
            "Ages 11-17 Individual": 10,
            "Group": 10
        },
        "Best in Show Hobby Crafts and Artwork": {
            "Ages 6-10 Individual": 10,
            "Ages 11-17 Individual": 10,
            "Group": 10
        },
        "Best in Show Design Entry (JA7)": {
            "Ages 6-10 Individual": 10,
            "Ages 11-17 Individual": 10,
            "Group": 10
        },
        "Best in Show Photography": {
            "Ages 6-10 Individual": 10,
            "Ages 11-17 Individual": 10,
            "Group": 10
        }
    },

    // Ages 5 & Under awards
    age5AndUnderAwards: {
        "Best in Show - Best entry from U1 - U9": {
            "Individual": 10,
            "Group": 10
        },
        "Best in Show Colouring Page": {
            "Individual": 10,
            "Group": 10
        }
    },

    // Contest Categories by Section
    contestSections: [
        {
            name: "Flower Section",
            categories: [
                { code: "JF1", description: "Sweet Pea - 4 stems, no foliage, jar" },
                { code: "JF3", description: "Cosmos - 3 blooms, jar" },
                { code: "JF4", description: "Aster - 3 blooms, jar" },
                { code: "JF5", description: "Zinnia - 2 blooms, jar" },
                { code: "JF6", description: "Daisy - 3 stems, jar" },
                { code: "JF8", description: "Sunflower - 1 large" },
                { code: "JF9", description: "Marigold - 3 blooms" },
                { code: "JF10", description: "Miniature Flower Arrangement - overall height 3\" (7.5 cm) or less." },
                { code: "JF11", description: "Wild Mixed Arrangement - grass, flowers, grains, etc. NO NOXIOUS WEEDS" },
                { code: "JF12", description: "Garden Flower Mixed Bouquet" },
                { code: "JF13", description: "Fairy Garden" }
            ],
            cashAwards: {
                "Best in Show Sunflower": 10,
                "Best in Show Fairy Garden": 10
            }
        }, {
            name: "Vegetable Section",
            categories: [
                { code: "JV1", description: "Beans - 3, any variety, ½\" (.5 cm) stem left on" },
                { code: "JV2", description: "Beets - 3 round, trimmed to ½\" (.5 cm) top" },
                { code: "JV3", description: "Peas - 4 pods, ½\" (.5 cm) stem left on" },
                { code: "JV4", description: "Carrots – 3, trimmed to ½\" (.5 cm) top, roots trimmed" },
                { code: "JV5", description: "Onions - 2, not peeled" },
                { code: "JV6", description: "Potato - 2, any variety" },
                { code: "JV7", description: "Vegetable - any other" },
                { code: "JV8", description: "Cucumber - 2, any variety, ½\" (.5 cm) stem attached" },
                { code: "JV9", description: "Novelty arrangement - may be made from vegetables, fruit, flowers or anything from the garden. No artificial parts" },
                { code: "JV10", description: "Novelty shaped vegetable – any kind" },
                { code: "JV11", description: "Zucchini - one large, over 10\" (25.4 cm), ½\" (1 cm) stem left on" }
            ],
            cashAwards: {
                "Best in Show Vegetables": 10
            }
        },
        {
            name: "Baking Section",
            categories: [
                { code: "JB1", description: "Any Cake - out of pan, iced & decorated" },
                { code: "JB2", description: "Candy Arrangement" },
                { code: "JB4", description: "Brownies - 4 iced" },
                { code: "JB5", description: "Bread - 1 loaf, out of pan" },
                { code: "JB6", description: "Cookies - 4, one kind" },
                { code: "JB7", description: "Monster Cookie - 1 only, no larger than 6 inches (15 cm)" },
                { code: "JB8", description: "Muffins – 4, not bran" },
                { code: "JB9", description: "Cup Cakes – 4, iced & decorated" },
                { code: "JB10", description: "Rice Krispie - figures or creation. All decorating or colouring must be edible." },
                { code: "JB11", description: "Chocolates - 4 pieces" }
            ],
            cashAwards: {
                "Best in Show Baking": 10
            }
        },
        {
            name: "Handicraft Section",
            categories: [
                { code: "JH1", description: "Knitting - any article" },
                { code: "JH2", description: "Crochet - any article" },
                { code: "JH3", description: "Cross stitch - any article" },
                { code: "JH4", description: "Embroidery - any article" },
                { code: "JH5", description: "Sewing - any article" },
                { code: "JH6", description: "Bead Work - any article" },
                { code: "JH7", description: "Recycled article - something new from something old (using yarns, thread or fabric)" },
                { code: "JH8", description: "Macrame – any article" },
                { code: "JH9", description: "Open - any article not in above classes" }
            ],
            cashAwards: {
                "Best in Show Handicraft": 10
            }
        },
        {
            name: "Hobby Crafts & Artwork Section",
            categories: [
                { code: "JH10", description: "Wood work - any article" },
                { code: "JH11", description: "Doll or toy - any medium" },
                { code: "JH12", description: "Holiday decoration - any article" },
                { code: "JH16", description: "Models - from kit" },
                { code: "JH17", description: "LEGO – transportation (boat, car, plane, spaceship etc.) Base maximum size 16\" X 16\" (41 cm X 41 cm). No kits, must be an original creation." },
                { code: "JH19", description: "LEGO – buildings. Base no larger than 16\"X16\" (41cmX41cm) No kits, must be an original creation." },
                { code: "JH20", description: "LEGO – other, i.e. scenery, animals. Base no larger than 16\"X16\" (41cmX41cm) No kits, must be an original creation." },
                { code: "JH21", description: "Mounted collection - stamps, coins, etc." },
                { code: "JH22", description: "String Art - any article" },
                { code: "JH23", description: "Dough Art - any article" },
                { code: "JH24", description: "Jewelry – any" },
                { code: "JH25", description: "Ceramics or Pottery - any article" },
                { code: "JH26", description: "Open Hobby Craft Item - any hobby article not listed above" },
                { code: "JA1", description: "Oil or Acrylic Painting - mounted on stiff backing" },
                { code: "JA2", description: "Water Colour - mounted on stiff backing" },
                { code: "JA3", description: "Pencil Sketch - black and white, pencil, pen, ink, charcoal" },
                { code: "JA4", description: "Pencil Sketch - colour, crayon, pencil crayon" },
                { code: "JA5", description: "Pastel - chalk, oil chalk, etc., mounted on stiff backing" },
                { code: "JA6", description: "Open art work - not in any other art work class" },
                { code: "JA7", description: "Computer Coloring Page Design – original design, garden theme for young children. We request permission to reprint your design for future contests. *cash award" },
                { code: "JA8", description: "Handcrafted Greeting Card - not done by computer" },
                { code: "JA9", description: "Collage - collection of photos, pictures, items, mounted on stiff backing" },
                { code: "JA10", description: "Scrapbook Page - any kind, any size" },
                { code: "JA11", description: "Adult Colouring Book Page - Pencil crayon" }
            ],
            cashAwards: {
                "Best in Show Hobby Crafts & Artwork": 10
            }
        },
        {
            name: "Photography Section",
            categories: [
                { code: "JP30", description: "Action/Movement - i.e. Sports" },
                { code: "JP31", description: "Agriculture" },
                { code: "JP32", description: "Landscape" },
                { code: "JP33", description: "Waterscape" },
                { code: "JP34", description: "People/Person" },
                { code: "JP36", description: "Animal or bird - domestic (i.e. livestock)" },
                { code: "JP37", description: "Animal or bird – wild" },
                { code: "JP38", description: "Pet(s)" },
                { code: "JP39", description: "Carstairs Area" },
                { code: "JP40", description: "Garden - flowers, plants, trees or garden" },
                { code: "JP41", description: "Still Life style" },
                { code: "JP42", description: "Selfie - take a photo of yourself by yourself (Individual entry only)" },
                { code: "JP43", description: "Open class - any subject not covered above" }
            ],
            cashAwards: {
                "Best in Show Photography": 10
            }
        },
        {
            name: "5 Years Old & Younger Section",
            categories: [
                { code: "U1", description: "Cookies – plate of 3" },
                { code: "U2", description: "Decorated Cupcakes – 3" },
                { code: "U3", description: "Rice Krispie Figure or Creation. All decorating or colouring must be edible." },
                { code: "U4", description: "Play Dough or Play Clay Creation" },
                { code: "U5", description: "Duplo or LEGO Creation. Base no larger than 16\"X16\" (41cmX41cm) No kits, must be an original creation." },
                { code: "U6", description: "Painted Rock Art" },
                { code: "U7", description: "Seed Picture – any seeds, on card stock, no larger than 8½\"X11\" (21.5X28cm)" },
                { code: "U8", description: "Any other craft article" },
                { code: "U9", description: "Mud Pie. Garden mud in a foil plate, decorated with anything from the garden. " },
                { code: "U10", description: "Contest Colouring Book Page – Crayon or pencil crayon only" }
            ],
            cashAwards: {
                "Best in Show - Best entry from U1 - U9": 10,
                "Best in Show Colouring Page": 10
            }
        }
    ]
};
