import { createTheme } from '@mui/material/styles';

const black = '#000';
const softBlack = '#333333';
const gray = '#80848D';
const lightGray = '#C2C3C6';
const softGray = '#E1E1E1';
const verySoftGray = '#f7f7f7';
const white = '#fff';
const white1 = '#F3F3F3';
const white2 = '#F9F9F9';
const primary = '#E6C46A';
const secondary = '#ED1C24';
const green = '#0B9444';
const softGreen = '#E7F4EC';
const goldGradient = `linear-gradient(90deg, rgba(222,187,92,1) 0%, rgba(229,201,125,1) 100%)`;
const greenGradient = `linear-gradient(90deg, rgba(34,112,59,1) 0%, rgba(45,142,71,1) 100%)`;
const redGradient = `linear-gradient(90deg, #ED1C24 0%, #F14950 100%)`;
const blackGradient = `linear-gradient(90deg, #000 0%, #333333 100%)`;
const link = '#42d7f5';

export const Size = {
    paddingS: '1rem',
    paddingXS: '2rem',
    paddingM: '3rem',
    paddingL: '4rem',
    paddingXL: '5rem',
    padding2XL: '6rem',
    padding3XL: '7rem',
    padding4XL: '8rem',
    padding5XL: '9rem',
    paddingPageVertical: '2rem',
    paddingCard: '2rem',
    borderCard: '0.8rem',
    borderButton: '50px',
    borderCircle: '100%',
};

const theme = createTheme({
    breakpoints: {
        values: {
            z: 0,
            xs: 360,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 1944,
            xxxl: 2304,
        },
    },
    palette: {
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
        common: {
            black,
            softBlack,
            gray,
            lightGray,
            softGray,
            white,
            white1,
            white2,
            green,
            softGreen,
            goldGradient,
            greenGradient,
            redGradient,
            blackGradient,
            link,
            verySoftGray,
        },
    },
    typography: {
        h1: {
            fontFamily: 'Montserrat',
            fontSize: '48px',
            lineHeight: '64px',
            fontWeight: 700,
            color: black,
            // background: goldGradient,
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
            // letterSpacing: "0.35px",
            '@media (max-width:1280px)': {
                fontSize: '44px',
                lineHeight: '62px',
            },
            '@media (max-width:960px)': {
                fontSize: '42px',
                lineHeight: '60px',
            },
            '@media (max-width:640px)': {
                fontSize: '40px',
                lineHeight: '58px',
            },
            '@media (max-width:480px)': {
                fontSize: '38px',
                lineHeight: '56px',
            },
        },
        h2: {
            fontFamily: 'Montserrat',
            fontSize: '39px',
            lineHeight: '50px',
            color: black,
            fontWeight: 400,
            '@media (max-width:1280px)': {
                fontSize: '37px',
                lineHeight: '48px',
            },
            '@media (max-width:960px)': {
                fontSize: '36px',
                lineHeight: '46px',
            },
            '@media (max-width:640px)': {
                fontSize: '35px',
                lineHeight: '44px',
            },
            '@media (max-width:480px)': {
                fontSize: '34px',
                lineHeight: '42px',
            },
        },
        h3: {
            fontFamily: 'Montserrat',
            fontSize: '31px',
            lineHeight: '40px',
            fontWeight: 400,
            color: black,
            '@media (max-width:1280px)': {
                fontSize: '30px',
                lineHeight: '38px',
            },
            '@media (max-width:960px)': {
                fontSize: '29px',
                lineHeight: '36px',
            },
            '@media (max-width:640px)': {
                fontSize: '28px',
                lineHeight: '34px',
            },
            '@media (max-width:480px)': {
                fontSize: '27px',
                lineHeight: '32px',
            },
        },
        h4: {
            fontFamily: 'Montserrat',
            fontSize: '28px',
            lineHeight: '36px',
            fontWeight: 400,
            color: black,
            '@media (max-width:1280px)': {
                fontSize: '27px',
                lineHeight: '34px',
            },
            '@media (max-width:960px)': {
                fontSize: '26px',
                lineHeight: '32px',
            },
            '@media (max-width:640px)': {
                fontSize: '25px',
                lineHeight: '30px',
            },
            '@media (max-width:480px)': {
                fontSize: '24px',
                lineHeight: '28px',
            },
        },
        h5: {
            fontFamily: 'Montserrat',
            fontSize: '24px',
            lineHeight: '32px',
            fontWeight: 400,
            color: black,
            '@media (max-width:1280px)': {
                fontSize: '23px',
                lineHeight: '30px',
            },
            '@media (max-width:960px)': {
                fontSize: '22px',
                lineHeight: '28px',
            },
            '@media (max-width:640px)': {
                fontSize: '21px',
                lineHeight: '26px',
            },
            '@media (max-width:480px)': {
                fontSize: '20px',
                lineHeight: '24px',
            },
        },
        h6: {
            fontFamily: 'Montserrat',
            fontSize: '21px',
            lineHeight: '28px',
            fontWeight: 400,
            color: black,
            '@media (max-width:1280px)': {
                fontSize: '20px',
                lineHeight: '26px',
            },
            '@media (max-width:960px)': {
                fontSize: '19px',
                lineHeight: '24px',
            },
            '@media (max-width:640px)': {
                fontSize: '18px',
                lineHeight: '22px',
            },
            '@media (max-width:480px)': {
                fontSize: '17px',
                lineHeight: '20px',
            },
        },
        isepMisbah: {
            fontFamily: 'Isep-Misbah',
        },
        body1: {
            fontFamily: 'Montserrat',
            fontSize: '18px',
            lineHeight: '27px',
            fontWeight: 400,
            color: black,
            '@media (max-width:1280px)': {
                fontSize: '17px',
                lineHeight: '25px',
            },
            '@media (max-width:960px)': {
                fontSize: '16px',
                lineHeight: '23px',
            },
            '@media (max-width:640px)': {
                fontSize: '15px',
                lineHeight: '21px',
            },
            '@media (max-width:480px)': {
                fontSize: '14px',
                lineHeight: '19px',
            },
        },
        body2: {
            fontFamily: 'Montserrat',
            fontSize: '18px',
            lineHeight: '27px',
            fontWeight: 400,
            color: white,
            '@media (max-width:1280px)': {
                fontSize: '17px',
                lineHeight: '25px',
            },
            '@media (max-width:960px)': {
                fontSize: '16px',
                lineHeight: '23px',
            },
            '@media (max-width:640px)': {
                fontSize: '15px',
                lineHeight: '21px',
            },
            '@media (max-width:480px)': {
                fontSize: '13px',
                lineHeight: '19px',
            },
            '@media (max-width:360px)': {
                fontSize: '12px',
                lineHeight: '19px',
            },
        },
        caption: {
            fontFamily: 'Montserrat',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 400,
            color: black,
            '@media (max-width:1280px)': {
                fontSize: '15px',
                lineHeight: '22px',
            },
            '@media (max-width:960px)': {
                fontSize: '14px',
                lineHeight: '20px',
            },
            '@media (max-width:640px)': {
                fontSize: '13px',
                lineHeight: '18px',
            },
            '@media (max-width:480px)': {
                fontSize: '12px',
                lineHeight: '16px',
            },
        },
        caption2: {
            fontFamily: 'Montserrat',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 400,
            color: white,
            '@media (max-width:1280px)': {
                fontSize: '15px',
                lineHeight: '22px',
            },
            '@media (max-width:960px)': {
                fontSize: '14px',
                lineHeight: '20px',
            },
            '@media (max-width:640px)': {
                fontSize: '13px',
                lineHeight: '18px',
            },
            '@media (max-width:480px)': {
                fontSize: '12px',
                lineHeight: '16px',
            },
        },
        subtitle: {
            fontFamily: 'Montserrat',
            fontSize: '14px',
            lineHeight: '21px',
            fontWeight: 400,
            color: black,
            '@media (max-width:1280px)': {
                fontSize: '13px',
                lineHeight: '19px',
            },
            '@media (max-width:960px)': {
                fontSize: '12px',
                lineHeight: '17px',
            },
            '@media (max-width:640px)': {
                fontSize: '11px',
                lineHeight: '15px',
            },
            '@media (max-width:480px)': {
                fontSize: '10px',
                lineHeight: '13px',
            },
        },
        subtitle1: {
            fontFamily: 'Montserrat',
            fontSize: '12px',
            lineHeight: '18px',
            fontWeight: 400,
            color: black,
            '@media (max-width:1280px)': {
                fontSize: '11px',
                lineHeight: '16px',
            },
            '@media (max-width:960px)': {
                fontSize: '10px',
                lineHeight: '14px',
            },
            '@media (max-width:640px)': {
                fontSize: '9px',
                lineHeight: '12px',
            },
            '@media (max-width:480px)': {
                fontSize: '8px',
                lineHeight: '10px',
            },
        },
        subtitle2: {
            fontFamily: 'Montserrat',
            fontSize: '10px',
            lineHeight: '16px',
            fontWeight: 400,
            color: black,
            '@media (max-width:1280px)': {
                fontSize: '6px',
                lineHeight: '14px',
            },
            '@media (max-width:960px)': {
                fontSize: '4px',
                lineHeight: '12px',
            },
            '@media (max-width:640px)': {
                fontSize: '2px',
                lineHeight: '10px',
            },
            '@media (max-width:480px)': {
                fontSize: '8px',
            },
        },
    },
    components: {
        MuiChip: {
            styleOverrides: {
                label: {
                    fontFamily: 'Montserrat',
                    fontWeight: 600,
                    letterSpacing: '0.15px',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: 5,
                },
            },
        },
    },
});

export default theme;
