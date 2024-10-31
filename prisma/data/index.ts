import { Prisma } from "@prisma/client";

export const dataProduct: Omit<Prisma.ProductItemInfoUncheckedCreateInput, 'price'>[] = [
    /* Apple iPhone 14 Pro Max Black  */
    {
        productId: 1,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 },] }, //Black
        memory: { connect: [{ id: 1 }] }, //128gb
        imagesUrl: { connect: [{ id: 1 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 1,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 },] }, //Black
        memory: { connect: [{ id: 2 }] }, //256gb
        imagesUrl: { connect: [{ id: 1 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 1,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 },] }, // Black
        memory: { connect: [{ id: 3 }] }, // 512gb
        imagesUrl: { connect: [{ id: 1 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 1,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 },] }, // Black
        memory: { connect: [{ id: 4 }] }, // 1T
        imagesUrl: { connect: [{ id: 1 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Apple iPhone 14 Pro Max Black  */
    /* Apple iPhone 14 Pro Max Purple  */
    {
        productId: 2,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 3 },] }, //Purple
        memory: { connect: [{ id: 1 }] }, //128gb
        imagesUrl: { connect: [{ id: 2 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 2,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 3 },] }, //Purple
        memory: { connect: [{ id: 2 }] }, //256gb
        imagesUrl: { connect: [{ id: 2 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 2,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 3 },] }, // Purple
        memory: { connect: [{ id: 3 }] }, // 512gb
        imagesUrl: { connect: [{ id: 2 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 2,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 3 },] }, // Purple
        memory: { connect: [{ id: 4 }] }, // 1T
        imagesUrl: { connect: [{ id: 2 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Apple iPhone 14 Pro Max Purple  */
    /* Apple iPhone 14 Pro Max Gold  */
    {
        productId: 3,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 4 },] }, //Gold
        memory: { connect: [{ id: 1 }] }, //128gb
        imagesUrl: { connect: [{ id: 3 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 3,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 4 },] }, //Gold
        memory: { connect: [{ id: 2 }] }, //256gb
        imagesUrl: { connect: [{ id: 3 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 3,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 4 },] }, // Gold
        memory: { connect: [{ id: 3 }] }, // 512gb
        imagesUrl: { connect: [{ id: 3 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 3,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 4 },] }, // Gold
        memory: { connect: [{ id: 4 }] }, // 1T
        imagesUrl: { connect: [{ id: 3 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Apple iPhone 14 Pro Max Gold  */
    /* Apple iPhone 14 Pro Max Silver  */
    {
        productId: 4,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 6 },] }, //Silver
        memory: { connect: [{ id: 1 }] }, //128gb
        imagesUrl: { connect: [{ id: 4 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 4,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 6 },] }, //Silver
        memory: { connect: [{ id: 2 }] }, //256gb
        imagesUrl: { connect: [{ id: 4 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 4,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 6 },] }, // Silver
        memory: { connect: [{ id: 3 }] }, // 512gb
        imagesUrl: { connect: [{ id: 4 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 4,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 6 },] }, // Silver
        memory: { connect: [{ id: 4 }] }, // 1T
        imagesUrl: { connect: [{ id: 4 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Apple iPhone 14 Pro Max Silver  */
    /** Apple iPhone 11 White  */
    {
        productId: 5,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 2 }] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 5 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 5,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 2 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 5 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 5,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 2 }] },
        memory: { connect: [{ id: 3 },] },
        imagesUrl: { connect: [{ id: 5 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 5,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 2 }] },
        memory: { connect: [{ id: 4 },] },
        imagesUrl: { connect: [{ id: 5 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Apple iPhone 11 White  */
    /** Apple iPhone 11 Black  */
    {
        productId: 6,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 6 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 6,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 6 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 6,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }] },
        memory: { connect: [{ id: 3 },] },
        imagesUrl: { connect: [{ id: 6 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Apple iPhone 11 Black  */
    /** Apple iPhone 11 Aqua  */
    {
        productId: 7,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 7 }] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 7 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 7,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 7 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 7 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 7,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 7 }] },
        memory: { connect: [{ id: 3 },] },
        imagesUrl: { connect: [{ id: 7 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Apple iPhone 11 Aqua  */
    /** Apple iPhone 11 Yellow  */
    {
        productId: 8,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 4 }] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 8 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 8,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 4 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 8 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 8,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 4 }] },
        memory: { connect: [{ id: 3 },] },
        imagesUrl: { connect: [{ id: 8 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Apple iPhone 11 Yellow  */
    /** Apple iPhone 12 Balck  */
    {
        productId: 9,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 9 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '11 MP',
        mainCamera: '46-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.2',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 9,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 9 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 9,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }] },
        memory: { connect: [{ id: 3 },] },
        imagesUrl: { connect: [{ id: 9 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Apple iPhone 12 Balck  */
    /** Apple iPhone 12 White  */
    {
        productId: 10,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 2 }] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 10 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '11 MP',
        mainCamera: '46-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.2',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 10,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 2 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 10 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 10,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 2 }] },
        memory: { connect: [{ id: 3 },] },
        imagesUrl: { connect: [{ id: 10 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Apple iPhone 12 White  */
    /** Apple iPhone 13 Green  */
    {
        productId: 11,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 9 }] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 11 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '11 MP',
        mainCamera: '46-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.2',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 11,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 9 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 11 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 11,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 9 }] },
        memory: { connect: [{ id: 3 },] },
        imagesUrl: { connect: [{ id: 11 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Apple iPhone 13 Green  */
    /** Apple iPhone 13 Pink  */
    {
        productId: 12,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 10 }] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 12 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '11 MP',
        mainCamera: '46-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.2',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 12,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 10 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 12 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 12,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 10 }] },
        memory: { connect: [{ id: 3 },] },
        imagesUrl: { connect: [{ id: 12 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Apple iPhone 13 Pink  */
    /** Apple iPhone 13 Black  */
    {
        productId: 13,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 13 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '11 MP',
        mainCamera: '46-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.2',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 13,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 13 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 13,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }] },
        memory: { connect: [{ id: 3 },] },
        imagesUrl: { connect: [{ id: 13 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Apple iPhone 13 Black  */

    /** Sumsung s24 Ultra Gray   */
    {
        productId: 14,
        battery: 5000,
        cores: 6,
        colors: { connect: [{ id: 11 },] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 14 }] },
        CPU: 'Qualcomm Snapdragon 8 Gen 3',
        frontCamera: '12 MP',
        mainCamera: '200+10+10+12 Mp',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    {
        productId: 14,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 11 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 14 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 14,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 11 }] },
        memory: { connect: [{ id: 3 },] },
        imagesUrl: { connect: [{ id: 14 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Sumsung s24 Ultra Gray   */


    /** Samsung Galaxy S24 Ultra Black  */
    {
        productId: 15,
        battery: 5000,
        cores: 6,
        colors: { connect: [{ id: 1 },] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 15 }] },
        CPU: 'Qualcomm Snapdragon 8 Gen 3',
        frontCamera: '12 MP',
        mainCamera: '200+10+10+12 Mp',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    {
        productId: 15,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 15 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 15,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }] },
        memory: { connect: [{ id: 3 },] },
        imagesUrl: { connect: [{ id: 15 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Samsung Galaxy S24 Ultra Black  */


    /** Samsung Galaxy S24 Ultra Gold */
    {
        productId: 16,
        battery: 5000,
        cores: 6,
        colors: { connect: [{ id: 4 },] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 16 }] },
        CPU: 'Qualcomm Snapdragon 8 Gen 3',
        frontCamera: '12 MP',
        mainCamera: '200+10+10+12 Mp',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    {
        productId: 16,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 4 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 16 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 16,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 4 }] },
        memory: { connect: [{ id: 3 },] },
        imagesUrl: { connect: [{ id: 16 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    /** Samsung Galaxy S24 Ultra Gold */

    /** Samsung Galaxy S24FE GRAPHITE */
    {
        productId: 17,
        battery: 5000,
        cores: 6,
        colors: { connect: [{ id: 11 },] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 17 }] },
        CPU: 'Exynos 2400',
        frontCamera: '12 MP',
        mainCamera: '50 Мп + 12 Мп + 8 Мп',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    {
        productId: 17,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 11 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 17 }] },
        CPU: 'Exynos 2400',
        frontCamera: '12 MP',
        mainCamera: '50 Мп + 12 Мп + 8 Мп',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    {
        productId: 17,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 11 }] },
        memory: { connect: [{ id: 3 },] },
        imagesUrl: { connect: [{ id: 17 }] },
        CPU: 'Exynos 2400',
        frontCamera: '12 MP',
        mainCamera: '50 Мп + 12 Мп + 8 Мп',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    /** Samsung Galaxy S24FE GRAPHITE */


    /** Samsung Galaxy S24FE MINT */
    {
        productId: 18,
        battery: 5000,
        cores: 6,
        colors: { connect: [{ id: 7 },] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 18 }] },
        CPU: 'Exynos 2400',
        frontCamera: '12 MP',
        mainCamera: '50 Мп + 12 Мп + 8 Мп',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    {
        productId: 18,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 7 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 18 }] },
        CPU: 'Exynos 2400',
        frontCamera: '12 MP',
        mainCamera: '50 Мп + 12 Мп + 8 Мп',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    /** Samsung Galaxy S24FE MINT */

    /** Samsung Galaxy S24FE YELLOW */
    {
        productId: 19,
        battery: 5000,
        cores: 6,
        colors: { connect: [{ id: 4 },] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 19 }] },
        CPU: 'Exynos 2400',
        frontCamera: '12 MP',
        mainCamera: '50 Мп + 12 Мп + 8 Мп',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    {
        productId: 19,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 4 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 19 }] },
        CPU: 'Exynos 2400',
        frontCamera: '12 MP',
        mainCamera: '50 Мп + 12 Мп + 8 Мп',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    /** Samsung Galaxy S24FE YELLOW */

    /** Samsung Galaxy S23FE Purple */
    {
        productId: 20,
        battery: 5000,
        cores: 6,
        colors: { connect: [{ id: 3 },] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 20 }] },
        CPU: 'Exynos 220',
        frontCamera: '12 MP',
        mainCamera: '12 Мп + 50 Мп + 8 Мп',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    {
        productId: 20,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 3 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 20 }] },
        CPU: 'Exynos 220',
        frontCamera: '12 MP',
        mainCamera: '12 Мп + 50 Мп + 8 Мп',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    /** Samsung Galaxy S23FE Purple */
    /** Samsung Galaxy S23FE Black */
    {
        productId: 21,
        battery: 5000,
        cores: 6,
        colors: { connect: [{ id: 1 },] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 21 }] },
        CPU: 'Exynos 220',
        frontCamera: '12 MP',
        mainCamera: '12 Мп + 50 Мп + 8 Мп',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    {
        productId: 21,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 21 }] },
        CPU: 'Exynos 220',
        frontCamera: '12 MP',
        mainCamera: '12 Мп + 50 Мп + 8 Мп',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    /** Samsung Galaxy S23FE Black */
    /** Samsung Galaxy S23FE White */
    {
        productId: 22,
        battery: 5000,
        cores: 6,
        colors: { connect: [{ id: 2 },] },
        memory: { connect: [{ id: 1 },] },
        imagesUrl: { connect: [{ id: 22 }] },
        CPU: 'Exynos 220',
        frontCamera: '12 MP',
        mainCamera: '12 Мп + 50 Мп + 8 Мп',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    {
        productId: 22,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 2 }] },
        memory: { connect: [{ id: 2 },] },
        imagesUrl: { connect: [{ id: 22 }] },
        CPU: 'Exynos 220',
        frontCamera: '12 MP',
        mainCamera: '12 Мп + 50 Мп + 8 Мп',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    /** Samsung Galaxy S23FE White */



]