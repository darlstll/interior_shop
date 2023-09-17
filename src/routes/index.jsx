import { About } from "../pages/about";
import { BedBathProduct } from "../pages/bedBathProduct";
import { AllProducts } from "../pages/allProducts";
import { DecorProduct } from "../pages/decorProduct";
import { FurnitProduct } from "../pages/furnitProduct";
import { GardenProduct } from "../pages/gardenProduct";
import { NotFound } from "../pages/notFound";
import { LivingRoom } from "../pages/livingRoom";
import { Kitchen } from "../pages/kitchen";
import { DiningRoom } from "../pages/diningRoom";
import { HomeOffice } from "../pages/homeOffice";
import { BedRoom } from "../pages/bedroom";

export const routes = [
  { id: "page-1", path: "/about", element: <About /> },
  { id: "page-2", path: "/products", element: <AllProducts /> },
  {id: 'decorPage', path: "/decorProduct", element: <DecorProduct/>},
  {id: 'furnitPage', path: "/furnitProduct", element: <FurnitProduct/>},
  {id: 'bedPage', path: "/bedProduct", element: <BedBathProduct/>},
  {id: 'gardenPage', path: "/gardenProduct", element: <GardenProduct/>},
  {id: 'livingrPage', path: "/livingrProduct", element: <LivingRoom />},
  {id: 'kitchenPage', path: "/kitchenProduct", element: <Kitchen />},
  {id: 'diningrPage', path: "/diningrProduct", element: <DiningRoom />},
  {id: 'homeoffPage', path: "/homeoffProduct", element: <HomeOffice/>},
  {id: 'bedrPage', path: "/bedrProduct", element: <BedRoom/>},
  { id: "notFound", path: "*", element: <NotFound /> },
];
