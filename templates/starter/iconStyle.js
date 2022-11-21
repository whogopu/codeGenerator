let iconWidth = {
    // w8: 8, // not needed
    w12: 12,
    w16: 16,
    w20: 20,
    w24: 24,
    // w28: 28, // not needed
    w32: 32,
    // w36: 36, // not needed
    w40: 40,
    w48: 48,
}

let spriteIds = {
    COMMON_KEY: 'COMMON',
    SRP_MOBILE_KEY: 'SRP_MOBILE',
}

let spriteUrls = {
    [spriteIds.COMMON_KEY]: 'https://static.99acres.com/universalapp/img/CommonSprite_v40.png',
    [spriteIds.SRP_MOBILE_KEY]: 'https://static.99acres.com//universalapp/img/srpmobile_v8.png'
}

let spriteRowsAndColumns = {
    [spriteIds.COMMON_KEY]: [17, 12],
    [spriteIds.SRP_MOBILE_KEY]: [17, 8],
}

const getSpriteHeightWidthSizeMap = (widthVal, spriteVal) => ([
    widthVal * spriteRowsAndColumns[spriteVal][0],
    widthVal * spriteRowsAndColumns[spriteVal][1],
])

const getSpriteSizesMap = (spriteVal) => {
    let objMap = {}

    for (const [widthKey, widthVal] of Object.entries(iconWidth)) {
        objMap[widthKey] = getSpriteHeightWidthSizeMap(widthVal, spriteVal)
    }

    return objMap

}

const getSpriteSizeMaps = () => {
    let objMap = {};
    for (const [spriteKey, spriteVal] of Object.entries(spriteIds)) {
        objMap[spriteVal] = getSpriteSizesMap(spriteVal)
    }

    return objMap
}

const CommonSpriteIconMap = (width) => ({
    hamburger: [width * 0, width * 0],
    search: [width * 1, width * 0],
    squrebar: [width * 2, width * 0],
    star: [width * 3, width * 0],
    starHover: [width * 4, width * 0],
    call: [width * 5, width * 0],
    zoomIcon: [width * 6, width * 0],
    callHover: [width * 7, width * 0],
    arrowRight: [width * 8, width * 0],
    arrowLeft: [width * 9, width * 0],
    info: [width * 10, width * 0],
    download: [width * 11, width * 0],
    downArrow: [width * 12, width * 0],
    upArrow: [width * 13, width * 0],
    car: [width * 14, width * 0],
    sendIcon: [width * 15, width * 0],
    close: [width * 16, width * 0],

    closeHover: [width * 0, width * 1],
    gridView: [width * 1, width * 1],
    gridViewHover: [width * 2, width * 1],
    hzView: [width * 3, width * 1],
    hzViewHover: [width * 4, width * 1],
    idea: [width * 5, width * 1],
    rightTick: [width * 6, width * 1],
    fb: [width * 7, width * 1],
    yt: [width * 8, width * 1],
    tw: [width * 9, width * 1],
    insta: [width * 10, width * 1],
    home: [width * 11, width * 1],
    dashboard: [width * 12, width * 1],
    menuIcon: [width * 13, width * 1],
    whiteUpArrow: [width * 14, width * 1],
    crossBlue: [width * 15, width * 1],
    goToTop: [width * 16, width * 1],

    checkBoxFill: [width * 0, width * 2],
    checkImmediate: [width * 1, width * 2],
    checkBlank: [width * 2, width * 2],
    quickLinks: [width * 3, width * 2],
    feedBack: [width * 4, width * 2],
    arrowWhite: [width * 5, width * 2],
    blueRightTick: [width * 6, width * 2],
    reportIcn: [width * 7, width * 2],
    fullScrn: [width * 8, width * 2],
    addIcn: [width * 9, width * 2],
    redirectionIcn: [width * 10, width * 2],
    coloredBulb: [width * 11, width * 2],
    getdirectionIcn: [width * 12, width * 2],
    downloadBrochure: [width * 13, width * 2],
    editPen: [width * 14, width * 2],
    eyeShow: [width * 15, width * 2],
    eyeHide: [width * 16, width * 2],

    blueSearch: [width * 0, width * 3],
    backArrow: [width * 1, width * 3],
    whiteSearch: [width * 2, width * 3],
    greenRight: [width * 3, width * 3],
    whiteBgInfo: [width * 4, width * 3],
    whiteWatsapp: [width * 5, width * 3],
    rupeeDoc: [width * 6, width * 3],
    thumbsUpBlue: [width * 7, width * 3],
    thumbsUpWhite: [width * 8, width * 3],
    rupeeWhite: [width * 9, width * 3],
    upArrowWhite: [width * 10, width * 3],
    rupeeBlue: [width * 11, width * 3],
    upArrowBlue: [width * 12, width * 3],
    greenWhatsApp: [width * 13, width * 3],
    homeBlue: [width * 14, width * 3],
    starBlue: [width * 15, width * 3],
    timeBlue: [width * 16, width * 3],

    userBlue: [width * 0, width * 4],
    share: [width * 1, width * 4],
    whiteStarIcn: [width * 2, width * 4],
    yellowWhiteStar: [width * 3, width * 4],
    offer: [width * 4, width * 4],
    whiteBgLoc: [width * 5, width * 4],
    warning: [width * 6, width * 4],
    lock: [width * 7, width * 4],
    addVidWhite: [width * 8, width * 4],
    addVidBlue: [width * 9, width * 4],
    arrWhiteRight: [width * 10, width * 4],
    logoSmall: [width * 11, width * 4],
    VidBrown: [width * 12, width * 4],
    upcomingLoc: [width * 13, width * 4],
    popularLoc: [width * 14, width * 4],
    verrifiedProp: [width * 15, width * 4],
    buildingIcn: [width * 16, width * 4],

    users: [width * 0, width * 5],
    logout: [width * 1, width * 5],
    userWhite: [width * 6, width * 5],
    grayTick: [width * 7, width * 5],
    grayWarning: [width * 8, width * 5],
    whitetick: [width * 9, width * 5],
    whiteZoomIn: [width * 10, width * 5],
    blueDownArrow: [width * 11, width * 5],
    offerBlue: [width * 12, width * 5],
    offerRed: [width * 13, width * 5],
    offerWhite: [width * 14, width * 5],
    toAvail: [width * 15, width * 5],
    offerOrange: [width * 16, width * 5],

    grayAdd: [width * 4, width * 6],
    graySub: [width * 5, width * 6],
    grayInfo: [width * 6, width * 6],
    grayQues: [width * 7, width * 6],
    quesGryIcn: [width * 8, width * 6],
    supportIcn: [width * 9, width * 6],
    grayEdit: [width * 10, width * 6],
    grayDelete: [width * 11, width * 6],
    solidBluTick: [width * 12, width * 6],
    newDownload: [width * 13, width * 6],
    blueEyeIcn: [width * 14, width * 6],
    solidBluInfo: [width * 15, width * 6],
    grayCalender: [width * 16, width * 6],

    redAlert: [width * 0, width * 7],
    redTriAlert: [width * 2, width * 7],
    blueRupee: [width * 3, width * 7],
    calendar: [width * 4, width * 7],
    trend: [width * 5, width * 7],
    darkBlueUpArrow: [width * 6, width * 7],
    blueUser: [width * 7, width * 7],
    blueBulb: [width * 8, width * 7],
    blackBulb: [width * 9, width * 7],
    blueBulbOutline: [width * 10, width * 7],
    editBook: [width * 11, width * 7],
    homeBook: [width * 12, width * 7],
    backBlue: [width * 13, width * 7],
    locIcon: [width * 14, width * 7],
    blackApple: [width * 15, width * 7],

    yellowWarning: [width * 0, width * 8],
    recentAct: [width * 2, width * 8],
    greyRightArr: [width * 3, width * 8],
    grayProf: [width * 4, width * 8],
    chatBot: [width * 5, width * 8],
    managePayment: [width * 7, width * 8],
    prevWhiteArr: [width * 8, width * 8],
    nextWhiteArr: [width * 9, width * 8],
    keyHighlight: [width * 10, width * 8],
    greenTickMark: [width * 16, width * 8],

    whiteShare: [width * 5, width * 9],
    pauseIcn: [width * 6, width * 9],
    playIcn: [width * 7, width * 9],
    zoomInIcn: [width * 8, width * 9],
    circleRedWarning: [width * 9, width * 9],
    redCross: [width * 10, width * 9],
    blueCamera: [width * 11, width * 9],
    outlineLike: [width * 13, width * 9],
    offerIcon: [width * 14, width * 9],

    headphoneGray: [width * 4, width * 10],
    headphoneWhite: [width * 5, width * 10],
    callBlack: [width * 6, width * 10],
    callReceived: [width * 7, width * 10],
    responses: [width * 8, width * 10],
    upgrade: [width * 10, width * 10],
    upgradeDot: [width * 12, width * 10],
    setting: [width * 13, width * 10],
    whiteKey: [width * 14, width * 10],
    greyKey: [width * 15, width * 10],

    filledShortlist: [width * 3, width * 11],
    filledShortlisted: [width * 4, width * 11],
    newPlotLandIcon: [width * 13, width * 11],
    chatbotnew: [width * 14, width * 11],
    plusBlueIcon: [width * 15, width * 11],
    floorPlanTupleIcon: [width * 16, width * 11],
})

const getBgPosForSpriteAndSize = (widthKey, widthVal, spriteKey, spriteVal) => {
    switch (spriteVal) {
        case spriteIds.COMMON_KEY:
            return CommonSpriteIconMap(widthVal)
        default: return {};
    }
}

const getBaseIconStyle = () => ({
    'display': 'inline-block',
    'vertical-align': 'middle',
    'font-style': 'normal',
    'background-repeat': 'no-repeat',
})

const getSpriteBgUrlStylesMap = () => {
    let objMap = {};
    for (const [key, val] of Object.entries(spriteIds)) {
        objMap[val] = {
            'background': `url(${spriteUrls[val]})`
        }
    }

    return objMap
}

const getBgPosStye = (iconPos) => {
    return {
        'background-position': `-${iconPos[0]}px -${iconPos[1]}px` // bgPos,
    }
}

const getHeigtWidthBgsizeStyle = (widthKey, widthVal, spriteId) => {
    let spriteMap = getSpriteSizeMaps();
    let w = widthVal;
    let h = widthVal;
    let bgSize = spriteMap[spriteId][widthKey];

    return {
        'width': `${w}px`,
        'height': `${h}px`,
        'background-size': `${bgSize[0]}px ${bgSize[1]}px` // bgSize,
    }
}

const getBgSizeHeightWidthStylesMap = () => {
    let objMap = {};
    for (const [spriteKey, spriteVal] of Object.entries(spriteIds)) {
        let wObjMap = {}
        for (const [widthKey, widthVal] of Object.entries(iconWidth)) {
            wObjMap[widthKey] = getHeigtWidthBgsizeStyle(widthKey, widthVal, spriteVal)
        }
        objMap[spriteVal] = wObjMap;
    }

    return objMap
}

const getBgPosStylesMap = () => {
    let objMap = {};
    for (const [spriteKey, spriteVal] of Object.entries(spriteIds)) {
        let wObjMap = {}
        for (const [widthKey, widthVal] of Object.entries(iconWidth)) {
            let iconPosMap = {}

            let iconsMap = getBgPosForSpriteAndSize(widthKey, widthVal, spriteKey, spriteVal);

            for (const [iconKey, iconPos] of Object.entries(iconsMap)) {
                iconPosMap[iconKey] = getBgPosStye(iconPos)
            }
            wObjMap[widthKey] = iconPosMap;
        }
        objMap[spriteVal] = wObjMap;
    }

    return objMap
}

const generate_sprite_width_styles = () => {

    return {
        spriteIds,
        spriteUrls,
        iconWidth,
        spriteRowsAndColumns,
        baseStyle: getBaseIconStyle(),
        spriteBgUrlStylesMap: getSpriteBgUrlStylesMap(),
        spriteSizesMap: getSpriteSizeMaps(),
        bgSizeHeightWidthStylesMap: getBgSizeHeightWidthStylesMap(),
        bgPosStylesMap: getBgPosStylesMap(),
    }
}

module.exports = {
    generate_sprite_width_styles
}

