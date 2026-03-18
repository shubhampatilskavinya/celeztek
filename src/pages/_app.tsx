// import type { AppType } from "next/app";
// import { Geist } from "next/font/google";

// import { api } from "~/utils/api";

// import Header from "~/components/header/Header";
// import Footer from "~/components/footer/Footer";

// import "~/styles/globals.css";

// const geist = Geist({
//   subsets: ["latin"],
// });

// const MyApp: AppType = ({ Component, pageProps }) => {
//   return (
//     <div className={geist.className}>
//       <Header />

//       <Component {...pageProps} />

//       <Footer />
//     </div>
//   );
// };

// export default api.withTRPC(MyApp);




import type { AppType } from "next/app";
import { Geist } from "next/font/google";

import { api } from "~/utils/api";
import Header from "~/components/header/Header";

import "~/styles/globals.css";
import Footer from "~/components/footer/Footer";

const geist = Geist({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={geist.className}>
      <Header />
      <main className="pt-16 md:pt-20">
        <Component {...pageProps} />
      </main>
	  <Footer />
    </div>
  );
};

export default api.withTRPC(MyApp);