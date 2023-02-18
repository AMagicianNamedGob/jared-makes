import { CameraIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="overflow-hidden bg-synth-black">
      <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-synth-pink-2 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-synth-pink">
              Jared Truscott
            </h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-synth-yellow sm:text-4xl">
              Web Developer Addicted To Interests
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-synth-yellow"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="/images/about.webp"
                    alt="Jared Truscott"
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div
              className="mx-auto mt-5
             text-white text-opacity-80 text-md sm:text-lg lg:col-start-1 lg:row-start-1 lg:max-w-none"
            >
              <p>
                Ever since I was a kid, I've been obsessed with technology. I
                would love to see a world where everyone has access to the tools
                and resources they need to create and build. A world where no
                one is left behind. A world where everyone can make a
                difference. I believe that technology is the key to making this
                world a reality and I'm happy to play my part.
              </p>
              <br />
              <p>
                When I'm not hacking away at the keyboard, or spending time with
                my family, I'm probably playing a video game, or painting a
                miniature. I hold rank in 4 different styles of martial arts,
                and even have been fortunate enough to train Jiu Jitsu with some
                of the best in New England. I also enjoy cycling and hope to one
                day complete a century ride. Although a recently diagnosed heart
                condition has put a damper on that dream... for now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
