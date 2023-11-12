export const color = [
    "white",
    "Black",
    "Red",
    "Marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
]

export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White'},
            { value: 'beige', label: 'Beige'},
            { value: 'blue', label: 'Blue'},
            { value: 'brown', label: 'Brown'},
            { value: 'green', label: 'Green'},
            { value: 'purple', label: 'Purple'},
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 'S', label: 'S'},
            { value: 'M', label: 'M'},
            { value: 'L', label: 'L'},
        ],
    },
]

export const singleFilter = [
    {
        id: 'price',
        name: "Price",
        options: [
            {value: "159-399", label: "159đ To 399đ"},
            {value: "159-399", label: "159đ To 399đ"},
            {value: "159-399", label: "159đ To 399đ"},
            {value: "159-399", label: "159đ To 399đ"},
            {value: "159-399", label: "159đ To 399đ"},
            {value: "159-399", label: "159đ To 399đ"}
        ]
    },
    {
        id: 'discount',
        name: "Discount Range",
        options: [
            {value: "10", label: "10% and above"},
            {value: "10", label: "10% and above"},
            {value: "10", label: "10% and above"},
            {value: "10", label: "10% and above"},
            {value: "10", label: "10% and above"},
            {value: "10", label: "10% and above"},
        ]
    },
    {
        id: 'stock',
        name: 'Availability',
        options: [
            {value: 'in_stock', label: "In Stock"},
            {value: 'in_stock', label: "Out Of Stock"}
        ]
    }
]


export const sortOptions = [
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]