import { Inter, Montserrat } from "next/font/google";


// import localFont from "next/font/local";

// define your variable fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });

// define 2 weights of a non-variable font
// const sourceCodePro400 = Source_Sans_3({ weight: "400" });
// const sourceCodePro700 = Source_Sans_3({ weight: "700" });
// // define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
// const greatVibes = localFont({ src: "./GreatVibes-Regular.ttf" });

export { montserrat, inter };