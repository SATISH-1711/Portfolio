export default function AnimatedBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden bg-white">

        {/* Top Left Circle */}
        <div
          className="
            absolute
            w-96
            h-96
            bg-cyan-300/30
            rounded-full
            blur-3xl
            -top-20
            -left-20
            animate-pulse
          "
        ></div>

        {/* Bottom Right Circle */}
        <div
          className="
            absolute
            w-[500px]
            h-[500px]
            bg-blue-300/20
            rounded-full
            blur-3xl
            bottom-0
            right-0
            animate-pulse
          "
        ></div>

        {/* Center Circle */}
        <div
          className="
            absolute
            w-80
            h-80
            bg-cyan-200/20
            rounded-full
            blur-3xl
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            animate-pulse
          "
        ></div>

      </div>
    </>
  );
}