import {
  Navbar,
  Hero,
  Highlights,
  Model,
  Features,
  HowItWorks,
  Footer,
  Camera,
} from "./components/components";
import * as Sentry from "@sentry/react";
import "./i18n";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Camera />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
