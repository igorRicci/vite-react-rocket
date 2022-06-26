import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Traditional German with Dwight K. Schrute
            </h1>
            <p className="mt-4 text-gray-200">
              The most traditional German you can find in the US. You'll learn every ancient word everyone has forgotten about.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a href="https://github.com/igorRicci" target="_blank" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center">
              <GithubLogo size={24}/>
              My Github
            </a>

            <a href="https://www.linkedin.com/in/igorricci33/" target="_blank" className="p-4 text-sm border border-blue-600 text-blue-600 flex items-center rounded font-bold uppercase gap-2 justify-center">
              <LinkedinLogo size={24}/>
              My Linkedin
            </a>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}
