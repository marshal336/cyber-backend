import { Prisma, PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";
import { createProductItemInfo as ProductInfo, randomPrice } from '../src/utils'
import { dataProduct } from "./data";


const prisma = new PrismaClient()

async function up() {
    await prisma.productItemColors.createMany({
        data: [
            {
                color: '#000000',
                title: 'Black'
            },
            {
                color: '#ffffff',
                title: 'White'
            },
            {
                color: '#625372',
                title: 'Purple'
            },
            {
                color: '#FFD700',
                title: 'Gold'
            },
            {
                color: '#EC1E3A',
                title: 'Red'
            },
            {
                color: '#D5D1DD',
                title: 'Silver'
            },
            {
                color: '#8BDCC5',
                title: 'Deep'
            },
            {
                color: '#223A5D',
                title: ''
            },
            {
                color: '#008000',
                title: 'Green'
            },
            {
                color: '#FFE5E1',
                title: 'Pink'
            },
            {
                color: '#474A51',
                title: 'Dark Gray'
            },
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
                    'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_space-black_pdp-images_position-1a_3.jpg',
                    'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_space-black_pdp-images_position-1b_3.jpg',
                    'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-14-pro-finish-select-202209-6-1inch-spaceblack_av1_geo_us_2_1_1.jpg',
                    'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_space-black_pdp-images_position-2_3.jpg'
                ]
            },
            {
                imgUrl: [
                    'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_deep-purple_pdp-images_position-1a_4.jpg',
                    'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_deep-purple_pdp-images_position-1b_4.jpg',
                    'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-14-pro-finish-select-202209-6-1inch-deeppurple_av1_geo_us_1_1_1.jpg',
                    'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_deep-purple_pdp-images_position-2_4.jpg'
                ]
            },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_gold_pdp-images_position-1a_4.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_gold_pdp-images_position-1b_4.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-14-pro-finish-select-202209-6-1inch-gold_av1_geo_us_2_1_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_gold_pdp-images_position-2_4.jpg'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_silver_pdp-images_position-1a_4.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_silver_pdp-images_position-1b_4.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-14-pro-finish-select-202209-6-1inch-silver_av1_geo_us_1_1_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_silver_pdp-images_position-2_4.jpg'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/a/3/a39271a1fa79d0d731264afe5af9374d__1.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/a/3/a39271a1fa79d0d731264afe5af9374d_1.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/d/1/d17a70ec380686d2dd123c7684b9335e_1.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/d/1/d17a70ec380686d2dd123c7684b9335e__1.webp'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/4/8/48559a6ce9a4251b3bd0f4a6fde96a9e_1.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/f/a/fa89fc1afbd012c725fb1223f5ffc142__1.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/4/8/48559a6ce9a4251b3bd0f4a6fde96a9e_2__1.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/4/8/48559a6ce9a4251b3bd0f4a6fde96a9e__1.webp'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/0/9/09b50ab1617f7d174fda7e370c9f374f__1.webp",
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/0/9/09b50ab1617f7d174fda7e370c9f374f_1.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/0/7/078b2b6984faf3581d111bf049ec0cf2_1.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/0/7/078b2b6984faf3581d111bf049ec0cf2__1.webp'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/a/4/a4e9f0847b9529a894f24e3e8f3b7b7a__1.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/a/4/a4e9f0847b9529a894f24e3e8f3b7b7a_1.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/7/178f998c0ab3c07bada0237dc73cfc15_1.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/7/178f998c0ab3c07bada0237dc73cfc15__1.webp'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-12-mini-black-select-2020_5.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/2/0/2003927302_2.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/2/0/2003927306_2.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/2/0/2003927308_2.webp'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-12-mini-white-select-2020_5.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/2/0/2003927180_3.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/2/0/2003927184_2.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/2/0/2003927186_2.webp'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-13-green-55-1000x1000_result.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/2/5/25-1000x1000-green-1000x1000_result.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/a/p/apple-iphone-13-128gb-green-mnff3-1.1000x_result.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/2/6/26-1000x1000-green-1000x1000_result.jpg'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-13-mini-pink-select-2021_wid_940_hei_1112_f_5.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_13_mini_q421_pink_pdp_image_position-1a__ww-ru_1_5.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_13_mini_q421_pink_pdp_image_position-1b__ww-ru_1_5.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-13-mini-pink-witb-2021_wid_328_hei_784_fmt__5.jpg'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-13-midnight-select-2021.534x728_m_5.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_13_q421_midnight_pdp_image_position-1b__ww-ru_1_5.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-13-midnight-witb-2021_wid_364_hei_784_fmt_j_5.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_13_q421_midnight_pdp_image_position-2__ww-ru_1_5.jpg'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s928_galaxys24ultra_front_titaniumgray_231106_result_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s928_galaxys24ultra_devicepenfront_titaniumgray_231106_result_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s928_galaxys24ultra_devicepenfrontl30_titaniumgray_231106_result_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s928_galaxys24ultra_devicepenfrontr30_titaniumgray_231106_result_1.jpg'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s928_galaxys24ultra_front_titaniumblack_231109_result_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s928_galaxys24ultra_devicepenfront_titaniumblack_231109_result_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s928_galaxys24ultra_devicepenfrontl30_titaniumblack_231109_result_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s928_galaxys24ultra_devicepenfrontr30_titaniumblack_231109_result_1.jpg'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s928_galaxys24ultra_front_titaniumyellow_231109_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s928_galaxys24ultra_devicepenfront_titaniumyellow_231109_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s928_galaxys24ultra_devicepenfrontl30_titaniumyellow_231109_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s928_galaxys24ultra_devicepenfrontr30_titaniumyellow_231109_1.jpg'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s721_galaxys24fe_graphite_front_result_2.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s721_galaxys24fe_graphite_front2_result_2.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s721_galaxys24fe_graphite_frontl30_result_2.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s721_galaxys24fe_graphite_frontr30_result_2.webp'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s721_galaxys24fe_mint_front_result_2.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s721_galaxys24fe_mint_front2_result_2.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s721_galaxys24fe_mint_frontl30_result_2.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s721_galaxys24fe_mint_frontr30_result_2.webp'
            //     ]
            // },
            // //!19
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s721_galaxys24fe_yellow_front_result_2.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s721_galaxys24fe_mint_front2_result_2.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s721_galaxys24fe_yellow_frontl30_result_2.webp',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s721_galaxys24fe_yellow_frontr30_result_2.webp'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s711_galaxys23fe_front_purple_result_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s711_galaxys23fe_front2_purple_result_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s711_galaxys23fe_frontl30_purple_result_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s711_galaxys23fe_frontr30_purple_result_1.jpg'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s711_galaxys23fe_front_graphite_result_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s711_galaxys23fe_front2_graphite_result_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s711_galaxys23fe_frontl30_graphite_result_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s711_galaxys23fe_frontr30_graphite_result_1.jpg'
            //     ]
            // },
            // {
            //     imgUrl: [
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s711_galaxys23fe_front_cream_result_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s711_galaxys23fe_front2_cream_result_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s711_galaxys23fe_frontl30_cream_result_1.jpg',
            //         'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s711_galaxys23fe_frontr30_cream_result_1.jpg'
            //     ]
            // },


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
            colorId: 1,
            discount: 30,
            colors: { connect: [{ id: 1 }, { id: 6 }, { id: 3 }, { id: 4 },] },
            memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },] },
            categoryId: 1,
            title: 'Apple iPhone 14 Pro Max Black',
            defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_space-black_pdp-images_position-1a_3.jpg'
        }
    })
    const product2 = await prisma.product.create({
        data: {
            bestSeller: 4,
            colorId: 3,
            categoryId: 1,
            colors: { connect: [{ id: 1 }, { id: 6 }, { id: 3 }, { id: 4 },] },
            memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },] },
            title: 'Apple iPhone 14 Pro Max Purple',
            defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_deep-purple_pdp-images_position-1a_4.jpg'
        }
    })
    // const product3 = await prisma.product.create({
    //     data: {
    //         bestSeller: 1,
    //         colorId: 4,
    //         categoryId: 1,
    //         title: 'Apple iPhone 14 Pro Max Gold',
    //         defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_gold_pdp-images_position-1a_4.jpg'
    //     }
    // })
    // const product4 = await prisma.product.create({
    //     data: {
    //         bestSeller: 2,
    //         colorId: 6,
    //         categoryId: 1,
    //         title: 'Apple iPhone 14 Pro Max Silver',
    //         defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwen_iphone14pro_q422_silver_pdp-images_position-1a_4.jpg'
    //     }
    // })
    // await prisma.product.createMany({
    //     data: [
    //         {
    //             bestSeller: 4,
    //             colorId: 2,
    //             categoryId: 1,
    //             title: 'Apple iPhone 11 White ',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/a/3/a39271a1fa79d0d731264afe5af9374d__1.webp'
    //         },
    //         {
    //             bestSeller: 6,
    //             colorId: 1,
    //             categoryId: 1,
    //             title: 'Apple iPhone 11 Black ',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/4/8/48559a6ce9a4251b3bd0f4a6fde96a9e_1.webp'
    //         },
    //         {
    //             bestSeller: 1,
    //             colorId: 7,
    //             categoryId: 1,
    //             title: 'Apple iPhone 11 Aqua ',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/0/9/09b50ab1617f7d174fda7e370c9f374f__1.webp'
    //         },
    //         {
    //             bestSeller: 1,
    //             colorId: 4,
    //             categoryId: 1,
    //             title: 'Apple iPhone 11 Yellow ',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/a/4/a4e9f0847b9529a894f24e3e8f3b7b7a__1.webp'
    //         },
    //         {
    //             bestSeller: 12,
    //             colorId: 1,
    //             categoryId: 1,
    //             title: 'Apple iPhone 12 Black',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-12-mini-black-select-2020_5.webp'
    //         },
    //         {
    //             bestSeller: 5,
    //             colorId: 2,
    //             categoryId: 1,
    //             title: 'Apple iPhone 12 White',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-12-mini-white-select-2020_5.webp'
    //         },
    //         {
    //             bestSeller: 42,
    //             colorId: 7,
    //             categoryId: 1,
    //             title: 'Apple iPhone 13 Green',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-13-green-55-1000x1000_result.jpg'
    //         },
    //         {
    //             bestSeller: 22,
    //             colorId: 9,
    //             categoryId: 1,
    //             title: 'Apple iPhone 13 Pink',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-13-mini-pink-select-2021_wid_940_hei_1112_f_5.jpg'
    //         },
    //         {
    //             bestSeller: 22,
    //             colorId: 1,
    //             categoryId: 1,
    //             title: 'Apple iPhone 13 Black',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone-13-midnight-select-2021.534x728_m_5.jpg'
    //         },
    //         {
    //             bestSeller: 32,
    //             colorId: 10,
    //             categoryId: 1,
    //             title: 'Samsung Galaxy S2$ Ultra Gray',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s928_galaxys24ultra_front_titaniumgray_231106_result_1.jpg'
    //         },
    //         {
    //             bestSeller: 42,
    //             colorId: 1,
    //             categoryId: 1,
    //             title: 'Samsung Galaxy S24 Ultra Black',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s928_galaxys24ultra_front_titaniumblack_231109_result_1.jpg'
    //         },
    //         {
    //             bestSeller: 32,
    //             colorId: 4,
    //             categoryId: 1,
    //             title: 'Samsung Galaxy S24 Ultra Gold',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s928_galaxys24ultra_front_titaniumyellow_231109_1.jpg'
    //         },
    //         {
    //             bestSeller: 1,
    //             colorId: 10,
    //             categoryId: 1,
    //             title: 'Samsung Galaxy S24FE GRAPHITE',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s721_galaxys24fe_graphite_front_result_2.webp'
    //         },
    //         {
    //             bestSeller: 1,
    //             colorId: 7,
    //             categoryId: 1,
    //             title: 'Samsung Galaxy S24FE MINT',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s721_galaxys24fe_mint_front_result_2.webp'
    //         },
    //         //!19
    //         {
    //             bestSeller: 1,
    //             colorId: 4,
    //             categoryId: 1,
    //             title: 'Samsung Galaxy S24FE YELLOW',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s721_galaxys24fe_yellow_front_result_2.webp'
    //         },
    //         {
    //             bestSeller: 2,
    //             colorId: 3,
    //             categoryId: 1,
    //             title: 'Samsung Galaxy S23FE Purple',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s711_galaxys23fe_front_purple_result_1.jpg'
    //         },
    //         {
    //             bestSeller: 2,
    //             colorId: 1,
    //             categoryId: 1,
    //             title: 'Samsung Galaxy S23FE Black',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s711_galaxys23fe_front_graphite_result_1.jpg'
    //         },
    //         {
    //             bestSeller: 2,
    //             colorId: 2,
    //             categoryId: 1,
    //             title: 'Samsung Galaxy S23FE White',
    //             defaultImage: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/s/m/sm-s711_galaxys23fe_front_cream_result_1.jpg'
    //         },
    //     ]
    // })

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
