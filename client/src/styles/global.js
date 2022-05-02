import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
    logoIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 6,
        background: `linear-gradient(90deg, ${theme.palette.logo.main} 0%, ${theme.palette.logo.secondary} 100%)`,
        display: 'flex',
        justifyContent: 'center',
        marginRight: 12,
        '& > *': {
            color: theme.palette.text.secondary,
            fontSize: 42, // figma said 32 but 42 looks more like in design
            lineHeight: '32px',
            padding: 0,
            margin: 0,
            fontWeight: 500,
            fontFamily: theme.typography.RedHatDisplay.fontFamily,
        }
    },

    logoText: {
        color: theme.palette.logo.text,
        fontSize: 36,
        fontWeight: 500,
        fontFamily: theme.typography.RedHatDisplay.fontFamily,
    },
    searchInput: {
        width: '100%',
        height: 48,
        paddingInline: 10,
        color: `${theme.palette.text.gray100}!important`,
        fontSize: `20px!important`
    },
    productsListContainer: {
        boxShadow: `0px 1px 2px ${theme.palette.shadow.main}, 0px 2px 4px ${theme.palette.shadow.secondary}`,
        padding: 16,
    },
    labelText: {
        color: `${theme.palette.text.gray50}!important`,
        background: 'white!important',
        fontFamily: theme.typography.Roboto.fontFamily,
        width: 100
    },
    productName: {
        color: theme.palette.text.gray100,
        fontSize: 16,
        fontWeight: 400,
        margin: 0,
        height: 75,
    },
    productNameHorizontal: {
        color: theme.palette.text.gray100,
        fontSize: 16,
        fontWeight: 400,
        margin: 0,
    },
    productPrice: {
        color: theme.palette.text.primary,
        fontSize: 24,
        fontWeight: 700,
        margin: 0,
        width: '100%'
    },
    productDescription: {
        color: theme.palette.text.gray50,
        fontSize: 16,
        fontWeight: 400,
        margin: 0,
        height: 60,
    },
    productDescriptionHorizontal: {
        color: theme.palette.text.gray50,
        fontSize: 16,
        fontWeight: 400,
        margin: 0,
    },
    productCardContainer: {
        width: 250,
        padding: 16,
        borderRadius: 8,
        '&:hover': {
            boxShadow: `0px 2px 4px rgba(59, 69, 123, 0.2), 0px 4px 8px rgba(92, 107, 192, 0.2)`
        }
    },
    productCardContainerHorizontal: {
        width: 450,
        padding: 16,
        borderRadius: 8,
        '&:hover': {
            boxShadow: `0px 2px 4px rgba(59, 69, 123, 0.2), 0px 4px 8px rgba(92, 107, 192, 0.2)`
        }
    },
    sliderBox: {
        backgroundColor: theme.palette.background.main,
        padding: 4
    },
    priceRange: {
        fontSize: 12,
        color: theme.palette.text.main,
        fontWeight: 500
    },
    sliderPaper: {
        paddingInline: 16,
        paddingBlock: 8
    },
    filterTitle: {
        fontWeight: 700,
        fontFamily: theme.typography.Roboto.fontFamily,
        marginBlock: 8
    },
    ratingButton: {
        backgroundColor: theme.palette.background.main,
        margin: 4,
        display: 'flex',
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 500,
        cursor: 'pointer',
        '&:hover': {
            filter: 'brightness(1.03)'
        }
    },
    selected: {
        boxShadow: `0 0 0 2px ${theme.palette.secondary.main}`
    },
    relatedLabel: {
        paddingInline: 12,
        paddingBlock: 6,
        fontSize: 14,
        color: theme.palette.text.gray70,
        cursor: 'pointer',

        '&:hover': {
            filter: 'brightness(1.03)'
        }
    },
    navbarContainer: {
        marginBlock: 30
    },
    relatedContainer: {
        marginTop: '32px!important',
        marginBottom: 16,
        marginLeft: 16
    },
    selectedView: {
        backgroundColor: 'white!important',
        boxShadow: '0px 1px 2px rgba(27, 78, 163, 0.24), 0px 2px 4px rgba(41, 121, 255, 0.24)'
    },
    image: {
        width: '100%'
    },
    productInfo: {
        height: 180
    },
    productsListScrollable: {
        overflow: 'auto',
        height: 'calc(100vh - 300px)'
    },
    selectContainer: {
        width: 150
    }
}))