

const  rowdata={

     inventoryList: [
        { id: "1", pro_name: "iPhone 13 Pro", category: "Electronics", unit_price: "3345.00", in_stock: "12", discount: "0.00", action: "Publish", status: "Published", total_value: 3345.00 * 12 },
        { id: "2", pro_name: "Samsung Galaxy S21", category: "Electronics", unit_price: "2999.00", in_stock: "8", discount: "100.00", action: "Unpublish", status: "Unpublished", total_value: 2999.00 * 8 },
        { id: "3", pro_name: "MacBook Air", category: "Electronics", unit_price: "1099.00", in_stock: "15", discount: "50.00", action: "Publish", status: "Published", total_value: 1099.00 * 15 },
        { id: "4", pro_name: "Sony Headphones", category: "Electronics", unit_price: "299.00", in_stock: "20", discount: "25.00", action: "Publish", status: "Published", total_value: 299.00 * 20 },
        { id: "5", pro_name: "HP Spectre x360", category: "Electronics", unit_price: "1249.00", in_stock: "10", discount: "0.00", action: "Publish", status: "Published", total_value: 1249.00 * 10 },
        { id: "6", pro_name: "Apple Watch Series 6", category: "Electronics", unit_price: "399.00", in_stock: "18", discount: "10.00", action: "Publish", status: "Unpublished", total_value: 399.00 * 18 },
        { id: "7", pro_name: "Dell XPS 13", category: "Electronics", unit_price: "1199.00", in_stock: "5", discount: "75.00", action: "Unpublish", status: "Unpublished", total_value: 1199.00 * 5 },
        { id: "8", pro_name: "Google Pixel 5", category: "Electronics", unit_price: "699.00", in_stock: "30", discount: "50.00", action: "Publish", status: "Unpublished", total_value: 699.00 * 30 },
        { id: "9", pro_name: "Canon EOS M50", category: "Cameras", unit_price: "649.00", in_stock: "25", discount: "20.00", action: "Publish", status: "Published", total_value: 649.00 * 25 },
        { id: "10", pro_name: "Sony PlayStation 5", category: "Gaming", unit_price: "499.00", in_stock: "7", discount: "0.00", action: "Publish", status: "Unpublished", total_value: 499.00 * 7 },
        { id: "11", pro_name: "Nintendo Switch", category: "Gaming", unit_price: "299.00", in_stock: "15", discount: "15.00", action: "Publish", status: "Published", total_value: 299.00 * 15 },
        { id: "12", pro_name: "Fitbit Charge 4", category: "Wearables", unit_price: "129.00", in_stock: "50", discount: "5.00", action: "Publish", status: "Unpublished", total_value: 129.00 * 50 },
        { id: "13", pro_name: "T-shirt", category: "Clothing", unit_price: "19.99", in_stock: "100", discount: "0.00", action: "Publish", status: "Published", total_value: 19.99 * 100 },
        { id: "14", pro_name: "Shirt", category: "Clothing", unit_price: "29.99", in_stock: "150", discount: "5.00", action: "Unpublish", status: "Unpublished", total_value: 29.99 * 150 },
        { id: "15", pro_name: "iPhone 13 Pro", category: "Electronics", unit_price: "3345.00", in_stock: "12", discount: "0.00", action: "Publish", status: "Published", total_value: 3345.00 * 12 },
        { id: "16", pro_name: "Samsung Galaxy S21", category: "Electronics", unit_price: "2999.00", in_stock: "8", discount: "100.00", action: "Unpublish", status: "Unpublished", total_value: 2999.00 * 8 },
        { id: "17", pro_name: "MacBook Air", category: "Electronics", unit_price: "1099.00", in_stock: "15", discount: "50.00", action: "Publish", status: "Published", total_value: 1099.00 * 15 },
        { id: "18", pro_name: "Sony Headphones", category: "Electronics", unit_price: "299.00", in_stock: "20", discount: "25.00", action: "Publish", status: "Published", total_value: 299.00 * 20 },
        { id: "19", pro_name: "HP Spectre x360", category: "Electronics", unit_price: "1249.00", in_stock: "10", discount: "0.00", action: "Publish", status: "Published", total_value: 1249.00 * 10 },
        { id: "20", pro_name: "Apple Watch Series 6", category: "Electronics", unit_price: "399.00", in_stock: "18", discount: "10.00", action: "Publish", status: "Unpublished", total_value: 399.00 * 18 },
        { id: "21", pro_name: "Dell XPS 13", category: "Electronics", unit_price: "1199.00", in_stock: "5", discount: "75.00", action: "Unpublish", status: "Unpublished", total_value: 1199.00 * 5 },
        { id: "22", pro_name: "Google Pixel 5", category: "Electronics", unit_price: "699.00", in_stock: "30", discount: "50.00", action: "Publish", status: "Unpublished", total_value: 699.00 * 30 },
        { id: "23", pro_name: "Canon EOS M50", category: "Cameras", unit_price: "649.00", in_stock: "25", discount: "20.00", action: "Publish", status: "Published", total_value: 649.00 * 25 },
        { id: "24", pro_name: "Sony PlayStation 5", category: "Gaming", unit_price: "499.00", in_stock: "7", discount: "0.00", action: "Publish", status: "Unpublished", total_value: 499.00 * 7 },
        { id: "25", pro_name: "Nintendo Switch", category: "Gaming", unit_price: "299.00", in_stock: "15", discount: "15.00", action: "Publish", status: "Published", total_value: 299.00 * 15 },
        { id: "26", pro_name: "Fitbit Charge 4", category: "Wearables", unit_price: "129.00", in_stock: "50", discount: "5.00", action: "Publish", status: "Unpublished", total_value: 129.00 * 50 },
        { id: "27", pro_name: "T-shirt", category: "Clothing", unit_price: "19.99", in_stock: "100", discount: "0.00", action: "Publish", status: "Published", total_value: 19.99 * 100 },
        { id: "28", pro_name: "Shirt", category: "Clothing", unit_price: "29.99", in_stock: "150", discount: "5.00", action: "Unpublish", status: "Unpublished", total_value: 29.99 * 150 },
        { id: "29", pro_name: "Shirt", category: "Clothing", unit_price: "29.99", in_stock: "150", discount: "5.00", action: "Unpublish", status: "Unpublished", total_value: 29.99 * 150 },
        { id: "30", pro_name: "Shirt", category: "Clothing", unit_price: "29.99", in_stock: "150", discount: "5.00", action: "Unpublish", status: "Unpublished", total_value: 29.99 * 150 }

    ]
    
}
export  default rowdata