import Header from "./components/1/header";
import Empresas from "./components/2/empresas";
import Main from "./components/2/main";
import Beneficios from "./components/3/beneficios";
import Dashboard from "./components/3/dashboard";
import Depoimento from "./components/3/depoimento";
import Suporte from "./components/3/suporte";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Empresas />
      <Dashboard />
      <Beneficios />
      <Depoimento />
      <Suporte />
      <Footer />
    </>
  );
}
