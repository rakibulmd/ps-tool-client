// const withMT = require("@material-tailwind/react/utils/withMT");
import withMT from "@material-tailwind/react/utils/withMT";
// import 'typeface-roboto';

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   roboto: ['Roboto', 'sans-serif'],
      // },
    },
  },
  plugins: [],
});