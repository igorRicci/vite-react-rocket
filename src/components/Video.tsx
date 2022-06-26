import { DefaultUi, Player, Youtube } from "@vime/react";
import { gql, useQuery } from "@apollo/client";
import { CaretRight, FileArrowDown, GithubLogo, LinkedinLogo } from "phosphor-react";

import '@vime/core/themes/default.css';

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug ($slug: String) {
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    }
  }
}

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useQuery(GET_LESSON_BY_SLUG, {
    variables: {
      slug: props.lessonSlug,
    }
  })

  console.log(data);


  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="pkb2B6OCIY4" />
            <DefaultUi />
          </Player>
        </div>
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

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Extra secret materials</strong>
              <p className="text-sm text-gray-200 mt-2">
                Everything that cannot be said out loud is here.
              </p>
            </div>

            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Old German books</strong>
              <p className="text-sm text-gray-200 mt-2">
                Storytelling books that German parents used to read for their children
              </p>
            </div>

            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
