import { Prisma, PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";
import { createProductItemInfo as ProductInfo, randomPrice } from '../src/utils'
import { dataProduct } from "./data";


const prisma = new PrismaClient()

async function up() {
    await prisma.productItemColors.createMany({
        data: [
            { color: '#000000', },
            { color: '#ffffff', },
            { color: '#781DBC', },
            { color: '#E1B000', },
            { color: '#EC1E3A', },
            { color: '#D5D1DD', },
            { color: '#8BDCC5', },
            { color: '#223A5D', },
            { color: '#FFE5E1', },
            { color: '#2B4A34', },
        ]
    })
    await prisma.screenType.createMany({
        data: [
            { title: 'OLED', },
            { title: 'AMOLED', },
            { title: 'IPS_LCD', },
            { title: 'LCD', },
        ]
    })
    await prisma.category.createMany({
        data: [
            { title: 'Smartphones', },
            { title: 'Watches', },
            { title: 'Headphones', },
            { title: 'Tablet', },
            { title: 'Labtot', },
            { title: 'Tablet', },
        ]
    })
    await prisma.productItemMemory.createMany({
        data: [
            {
                title: '128GB',
                price: randomPrice(100, 300)
            },
            {
                title: '256GB',
                price: randomPrice(200, 500)
            },
            {
                title: '512GB',
                price: randomPrice(300, 600)
            },
            {
                title: '1TB',
                price: randomPrice(500, 1000)
            },
        ]
    })
    await prisma.productItemImages.createMany({
        data: [
            {
                imgUrl: [
                    'https://blackapple.com.ua/image/catalog/iphone/14%20pro/b66ec5d274b5aa27147e45626f8ce01c.png',
                    'https://gstore.ua/content/images/39/480x480l50nn0/86022242298904.png',
                    'https://tvoygadget.com.ua/wp-content/uploads/2022/09/1-19-600x600.jpeg',
                    'https://hokolab.com/wp-content/uploads/2024/02/3-6.jpg'
                ]
            },
            {
                imgUrl: [
                    'https://smarts.ua/content/images/27/480x453l50nn0/91774679501420.jpeg',
                    'https://cdn.new-brz.net/app/public/models/MQ9T3ZD-A/large/w/231212080053575658.webp',
                    'https://www.ipeople.in.ua/files/products/%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-09-09%20%D0%B2%2016.03.12.800x600w.png',
                    'https://cdn.new-brz.net/app/public/models/MQ9T3ZD-A/large/w/231212080053575658.webp'
                ]
            },
            {
                imgUrl: [
                    'https://hotline.ua/img/tx/343/3437205925.jpg',
                    'https://img.mta.ua/image/cache/data/foto/z688/688138/photos/Apple-iPhone-14-Pro-Max-128GB-13-Gold-06-600x600.jpg',
                    'https://img.mta.ua/image/cache/data/foto/z688/688138/photos/Apple-iPhone-14-Pro-Max-128GB-13-Gold-03-600x600.jpg',
                    'https://bigmag.ua/image/cache/catalog/new/kumunren/iPhone%2014/14-pro/Gold/76fd46d81e3217425fd0e7f8a76aa90b-650x540.jpeg'
                ]
            },
            {
                imgUrl: [
                    'https://www.istore.ua/upload/iblock/c2e/1ly5t4e91153nejaxq5en5aaweyxyebu/14_pro_max_silver_3_is-kopiya.png',
                    'https://gstore.ua/content/images/42/480x480l50nn0/apple-iphone-14-pro-max-128gb-silver-mq9q3-13763115462603.png',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6WuVH8QnoSAAytf1p7ueu_bFz79jqAP-JQ&s',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS27ftsLi9GbZqUUpORIsVRpejW9KnYIwzuw&s'
                ]
            },
            {
                imgUrl: [
                    'https://i.macuser.ua/product/6919/gallery/12924/original.jpg?_=469350894',
                    'https://gstore.ua/content/images/41/480x480l50nn0/apple-iphone-11-128gb-white-74267428151572.png',
                    'https://cdn.27.ua/799/7a/38/3045944_2.jpeg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLGrylH8gnHyoU0Y33m4UNoQPjs8z7Xn7Vg&s'
                ]
            },
            {
                imgUrl: [
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNMeCh2nHaroQHLyIavf3XyLh0bcWDfZWVg&s',
                    'https://my-apple.com.ua/image/cache/catalog/products/iphone/iphone-11/black-2-700x700.png',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DXRlfRvEmo8kiZjCEIPnM6YWF0b6bqJ6eQ&s',
                    'https://img.jabko.ua/image/cache/catalog/products/2020/12/051541/2-700x700-1397x1397.jpg.webp'
                ]
            },
            {
                imgUrl: [
                    "https://mobilike.net.ua/image/cache/catalog/i/pd/ak/76f8b1f464171026ebddcb43886b0405-680x630.jpg",
                    'https://img.jabko.ua/image/cache/catalog/products/2024/06/241722/pixelcut-export-(3)-420x420.jpg.webp',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zCGz5VrcTivBBnsb-Zs8d1NMYov9TBinyg&s',
                    'https://5.imimg.com/data5/ECOM/Default/2023/12/369057785/ZR/CJ/KO/47699750/iphone-11-green-7-320ceaac-b94e-46aa-bfbd-2e9c2a817529-250x250.jpg'
                ]
            },
            {
                imgUrl: [
                    'https://my-apple.com.ua/image/catalog/products/iphone/iphone-11/yellow-1.png',
                    'https://gstore.ua/content/images/42/480x480l50nn0/apple-iphone-11-128gb-yellow-60789189344390.png',
                    'https://vseplus.com/images/p/prv/204156a.jpg',
                    'https://img.jabko.ua/image/cache/catalog/products/2024/06/241727/pixelcut-export-(2)-1397x1397.jpg.webp'
                ]
            },
            {
                imgUrl: [
                    'https://cdn.new-brz.net/app/public/models/MGE13/large/w/201230150030072355.webp',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmd5vjpPZOoTD0Z1IpDvBadjJYNVcgck1IOg&s',
                    'https://img.jabko.ua/image/cache/catalog/products/2024/06/241606/blue-1-(1)-(1)-1397x1397.jpg.webp',
                    'https://img.jabko.ua/image/cache/catalog/products/2024/06/241606/blue-2-(1)-(1)-1397x1397.jpg.webp'
                ]
            },
            {
                imgUrl: [
                    'https://www.ispot.com.ua/image/cache/catalog/import_files/c3/c319fe004a9111eb81182c4d5459a249_f3b2bb91656f11eb81222c4d5459a249-700x700.jpg',
                    'https://hotline.ua/img/tx/344/3442123795.jpg',
                    'https://yellow.ua/media/catalog/product/cache/8/image/600x600/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_iphone_12_128gb_black_2.jpg',
                    'https://my-apple.com.ua/image/cache/catalog/products/iphone/iphone-12-12-mini/black-3-700x700.png'
                ]
            },
            {
                imgUrl: [
                    'https://hotline.ua/img/tx/344/3442105435.jpg',
                    'https://img.jabko.ua/image/cache/catalog/products/2024/06/241606/white-1-(1)-(1)-1397x1397.jpg.webp',
                    'https://redington-prod-data-product-images.s3.ap-south-1.amazonaws.com/APMP120007/APMP120007_4.png',
                    'https://media.didi.ua/images/catalog/product_gallery/thumb/F8-HwZI0OcHe.jpg'
                ]
            },
            {
                imgUrl: [
                    'https://cdn.comfy.ua/media/catalog/product/3/2/3207787065_2.jpg',
                    'https://files.foxtrot.com.ua/PhotoNew/img_0_60_8883_0_1_637985800957937758.jpg',
                    'https://my-apple.com.ua/image/cache/catalog/products/iphone/iphone-13-13-mini/green-2-700x700.png',
                    'https://gstore.ua/content/images/32/480x480l50nn0/apple-iphone-13-pro-128gb-alpine-green-39782627306568.png'
                ]
            },
            {
                imgUrl: [
                    'https://applehome.te.ua/wp-content/uploads/2021/09/iphone-13-midnight-select-2021.png',
                    'https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1699437379-opt.webp',
                    'https://brain.com.ua/static/images/prod_img/6/5/U0581065_2big.jpg',
                    'https://i.moyo.ua/img/gallery/4988/82/1596119_middle.jpg'
                ]
            },
            {
                imgUrl: [
                    'https://easymac.com.ua/image/cache/catalog/image/cache/catalog/easyphoto/28850/samsung-galaxy-s23-ultra-12-256gb-green-3-500x500.webp',
                    'https://pixophone.com/image/cache/catalog/product-upload/64oy2vhbwapwpesrh6fmiuqvpn3ub2sw.webp-600x600.jpg',
                    'https://images.samsung.com/ua/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-colors-green-back.jpg?imbypass=true',
                    'https://images.samsung.com/is/image/samsung/assets/ua/smartphones/galaxy-s23-ultra/galaxy-s23-ultra-specs-color-green-s.jpg?$163_346_PNG$'
                ]
            },
            {
                imgUrl: [
                    'https://hotline.ua/img/tx/484/4841881825.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bToD7GMSiCE0_kRnrTKprKFt8eKESzAJFA&s',
                    'https://justbuy.com.ua/wp-content/uploads/2023/05/2709950-removebg-preview-optimized.png',
                    'https://img.jabko.ua/image/cache/catalog/products/2024/01/131034/SamsungGalaxyS23UltraPhantomBlack-4%20(2)-1397x1397.jpg.webp'
                ]
            },
            {
                imgUrl: [
                    'https://image-us.samsung.com/us/smartphones/galaxy-s23/compare/images/galaxy-s23-compare-galaxy-s22-ultra-phantom-white-s.jpg',
                    'https://f5.ua/img/products/1799205/3177117.jpg',
                    'hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGekoEPzOtj_yq_Cm13912wPJqPv27vsNtgw&s',
                    'https://image-us.samsung.com/us/smartphones/galaxy-s23/compare/images/galaxy-s23-compare-galaxy-s22-ultra-phantom-white-s.jpg'
                ]
            },


        ]
    })
    await prisma.brand.createMany({
        data: [
            { title: "Apple", },
            { title: "Sumsung", },
            { title: "Xiaomi", },
            { title: "Pocco", },
            { title: "OPPO", },
            { title: "Honor", },
            { title: "Motorola", },
            { title: "Nokia", },
            { title: "Realme", },
        ]
    })
    const product1 = await prisma.product.create({
        data: {
            bestSeller: 1,
            discount: 30,
            categoryId: 1,
            title: 'Apple iPhone 14 Pro Max Black',
            defaultImage: 'https://blackapple.com.ua/image/catalog/iphone/14%20pro/b66ec5d274b5aa27147e45626f8ce01c.png'
        }
    })
    const product2 = await prisma.product.create({
        data: {
            bestSeller: 4,
            categoryId: 1,
            title: 'Apple iPhone 14 Pro Max Purple',
            defaultImage: 'https://smarts.ua/content/images/27/480x453l50nn0/91774679501420.jpeg'
        }
    })
    const product3 = await prisma.product.create({
        data: {
            bestSeller: 1,
            categoryId: 1,
            title: 'Apple iPhone 14 Pro Max Gold',
            defaultImage: 'https://hotline.ua/img/tx/343/3437205925.jpg'
        }
    })
    const product4 = await prisma.product.create({
        data: {
            bestSeller: 2,
            categoryId: 1,
            title: 'Apple iPhone 14 Pro Max Silver',
            defaultImage: 'https://www.istore.ua/upload/iblock/c2e/1ly5t4e91153nejaxq5en5aaweyxyebu/14_pro_max_silver_3_is-kopiya.png'
        }
    })
    await prisma.product.createMany({
        data: [
            {
                bestSeller: 4,
                categoryId: 1,
                title: 'Apple iPhone 11 White ',
                defaultImage: 'https://i.macuser.ua/product/6919/gallery/12924/original.jpg?_=469350894'
            },
            {
                bestSeller: 6,
                categoryId: 1,
                title: 'Apple iPhone 11 Black ',
                defaultImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNMeCh2nHaroQHLyIavf3XyLh0bcWDfZWVg&s'
            },
            {
                bestSeller: 1,
                categoryId: 1,
                title: 'Apple iPhone 11 Aqua ',
                defaultImage: 'https://mobilike.net.ua/image/cache/catalog/i/pd/ak/76f8b1f464171026ebddcb43886b0405-680x630.jpg'
            },
            {
                bestSeller: 1,
                categoryId: 1,
                title: 'Apple iPhone 11 Yellow ',
                defaultImage: 'https://my-apple.com.ua/image/catalog/products/iphone/iphone-11/yellow-1.png'
            },
            {
                bestSeller: 12,
                categoryId: 1,
                title: 'Apple iPhone 12 Black',
                defaultImage: 'https://www.ispot.com.ua/image/cache/catalog/import_files/c3/c319fe004a9111eb81182c4d5459a249_f3b2bb91656f11eb81222c4d5459a249-700x700.jpg'
            },
            {
                bestSeller: 5,
                categoryId: 1,
                title: 'Apple iPhone 12 White',
                defaultImage: 'https://hotline.ua/img/tx/344/3442105435.jpg'
            },
            {
                bestSeller: 42,
                categoryId: 1,
                title: 'Apple iPhone 13 Green',
                defaultImage: 'https://cdn.comfy.ua/media/catalog/product/3/2/3207787065_2.jpg'
            },
            {
                bestSeller: 22,
                categoryId: 1,
                title: 'Apple iPhone 13 Pink',
                defaultImage: 'https://hotline.ua/img/tx/298/2989120305.jpg'
            },
            {
                bestSeller: 22,
                categoryId: 1,
                title: 'Apple iPhone 13 Black',
                defaultImage: 'https://applehome.te.ua/wp-content/uploads/2021/09/iphone-13-midnight-select-2021.png'
            },
            {
                bestSeller: 32,
                categoryId: 1,
                title: 'Samsung Galaxy S23 Ultra Green',
                defaultImage: 'https://easymac.com.ua/image/cache/catalog/image/cache/catalog/easyphoto/28850/samsung-galaxy-s23-ultra-12-256gb-green-3-500x500.webp'
            },
            {
                bestSeller: 42,
                categoryId: 1,
                title: 'Samsung Galaxy S23 Ultra Black',
                defaultImage: 'https://hotline.ua/img/tx/484/4841881825.jpg'
            },
            {
                bestSeller: 32,
                categoryId: 1,
                title: 'Samsung Galaxy S23 Ultra White',
                defaultImage: 'https://image-us.samsung.com/us/smartphones/galaxy-s23/compare/images/galaxy-s23-compare-galaxy-s22-ultra-phantom-white-s.jpg'
            },
        ]
    })

    for (const item of dataProduct) {
        await prisma.productItemInfo.create({
            data: { ...ProductInfo(item) }
        })
    }
}
async function down() {
    await prisma.$queryRaw`TRUNCATE TABLE "user" RESTART IDENTITY CASCADE`
    await prisma.$queryRaw`TRUNCATE TABLE "product" RESTART IDENTITY CASCADE`
    await prisma.$queryRaw`TRUNCATE TABLE "product_item_colors" RESTART IDENTITY CASCADE`
    await prisma.$queryRaw`TRUNCATE TABLE "product_item_memory" RESTART IDENTITY CASCADE`
    await prisma.$queryRaw`TRUNCATE TABLE "product_item_images" RESTART IDENTITY CASCADE`
    await prisma.$queryRaw`TRUNCATE TABLE "product_item_info" RESTART IDENTITY CASCADE`
    await prisma.$queryRaw`TRUNCATE TABLE "brand" RESTART IDENTITY CASCADE`
    await prisma.$queryRaw`TRUNCATE TABLE "category" RESTART IDENTITY CASCADE`
    await prisma.$queryRaw`TRUNCATE TABLE "ScreenType" RESTART IDENTITY CASCADE`
}

async function main() {
    try {
        await down()
        await up()
    } catch (error) {
        console.log(error);

    }
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async e => {
        console.error(e);
        process.exit(1)
    })
