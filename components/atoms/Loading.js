import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingCircle({
    style,
    classes,
    className,
    color = 'warning',
    key,
    padding = '1rem',
    alignItmes = 'center',
    justifyContent = 'center',
}) {
    return (
        <Box
            sx={{ display: 'flex' }}
            style={style}
            classes={classes}
            className={className}
            key={key}
            padding={padding}
            alignItems={alignItmes}
            justifyContent={justifyContent}
        >
            <CircularProgress color={color} />
        </Box>
    );
}
