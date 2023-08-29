import Slider from "./components/slider/Slider";
import TryButton from "./components/TryButton";

export default function Home() {
  return (
    <div className="h-[calc(100%-96px)]">
      <Slider />
      <TryButton />
    </div>
  );
}
