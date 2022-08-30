import Head from 'next/head';
import { motion } from 'framer-motion';
import { PageAnimation } from '@components/atoms/Animations';

export default function Layout({
    title,
    keywords,
    description,
    children,
    className,
}) {
    return (
        <div className={className}>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <motion.div
                variants={PageAnimation}
                initial='hidden'
                animate='show'
            >
                <main>{children}</main>
            </motion.div>
        </div>
    );
}

Layout.defaultProps = {
    title: 'Boiler Plate of Next-Js with redux thunk, redux persist, cookies, private route, and material-ui',
    description: 'Clean and easyy to use NextJs Boiler Plate',
    keywords: 'Next-Js, NextJs, Redux, Boiler Plate',
};
