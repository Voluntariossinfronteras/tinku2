import React from "react-native";
import Dimensions from 'Dimensions';
import Orientation from 'react-native-orientation';


// Precalculate Device Dimensions for better performance
const x = Orientation.getInitialOrientation() == 'PORTRAIT' ? Dimensions.get('window').height : Dimensions.get('window').width;
const y = Orientation.getInitialOrientation() == 'PORTRAIT' ? Dimensions.get('window').width : Dimensions.get('window').height;
const mx = 1280;
const my = 800;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1;

// We set our base font size value
const base_unit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function 
function em(value) {
    return unit * value;
}

function responsiveW(maxW) {
    return maxW * (x / mx);
}
function responsiveH(maxH) {
    return maxH * (y / my);
}

// Then we set our styles with the help of the em() function
export default Style = {

    // GENERAL
    DEVICE_WIDTH: x,
    DEVICE_HEIGHT: y,
    RATIO_X: ratioX,
    RATIO_Y: ratioY,
    UNIT: em(1),
    PADDING: em(1.25),

    // CARD
    CARD_WIDTH: x - em(1.25) * 2,
    CARD_HEIGHT: (x - em(1.25) * 2) * (3 / 5),
    CARD_PADDING_X: em(1.875),
    CARD_PADDING_Y: em(1.25),

    // FONT
    FONT_SIZE: em(1),
    FONT_SIZE_SMALLER: em(0.75),
    FONT_SIZE_SMALL: em(0.875),
    FONT_SIZE_TITLE: em(1.25),

    // IMAGE
    WIDTH: responsiveW,
    HEIGHT: responsiveH
};