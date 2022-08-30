// framer motion
export const PageAnimation = {
    hidden: {
        opacity: 0,
        x: 200,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
        },
    },
};

export const TitleAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
};

export const AnimateContainer = {
    hidden: { x: -100 },
    show: {
        x: 0,
        transition: { duration: 0.75, ease: 'easeOut', staggerChildren: 0.75 },
    },
};
