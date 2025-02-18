import Noise from "../components/Noise";

export default function MainNoise({ children, className }) {
  return (
    <div
      className={`${className} bg-paper w-full h-full relative overflow-hidden`}
    >
      <Noise
        patternSize={300}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      {children}
    </div>
  );
}
