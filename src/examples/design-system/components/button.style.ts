import { Theme } from "../core/app.theme";

export const buttonSizesStyle = {
    'sm': {
        height: "36px",
        padding: "10px 12px 10px",
        fontSize: Theme.fontSize("xs"),
    },
    'md': {
        height: "36px",
        padding: "10px 12px 10px",
        fontSize: Theme.fontSize("xs"),
    },
    'lg': {
        height: "36px",
        padding: "10px 12px 10px",
        fontSize: Theme.fontSize("xs"),
    }
}

export const variantStyle = {
    'solid': {
        "&:disabled": {
            color: "white",
            backgroundColor: Theme.color("grey400"),
            borderColor: Theme.color("grey"),
            cursor: "not-allowed",
        },
        "&:disabled:hover": {
            color: "white",
            backgroundColor: Theme.color("grey400"),
            borderColor: Theme.color("grey"),
            cursor: "not-allowed",
        },
    },
    'outline': {
        "&:disabled:hover": {
            color: "white",
            backgroundColor: Theme.color("grey400"),
            borderColor: Theme.color("grey"),
            cursor: "not-allowed",
        },
    },
    'ghost': {
        "&:disabled:hover": {
            color: "white",
            backgroundColor: Theme.color("grey400"),
            borderColor: Theme.color("grey"),
            cursor: "not-allowed",
        },
    }
}