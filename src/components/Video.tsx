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

            <p className="mt-4 text-gray-200 leading-relaxed">
              The most traditional German you can find in the US. You'll learn every ancient word everyone has forgotten about.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://pbs.twimg.com/profile_images/1212841876895813632/4mzarqqS_400x400.jpg"
                alt="Github profile pic"
              />

              <div className="leading-relaxed">
                <strong className="text-2xl font-bold block">Dwight K. Schrute</strong>
                <span className="text-gray-200 text-sm block">Assistent to the Regional Manager</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a href="https://github.com/igorRicci" target="_blank" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
              <GithubLogo size={24}/>
              My Github
            </a>

            <a href="https://www.linkedin.com/in/igorricci33/" target="_blank" className="p-4 text-sm border border-blue-600 text-blue-600 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-600 hover:text-gray-900 transition-colors">
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
