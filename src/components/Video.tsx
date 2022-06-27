import { DefaultUi, Player, Youtube } from "@vime/react";
import { gql, useQuery } from "@apollo/client";
import { CaretRight, FileArrowDown, GithubLogo, LinkedinLogo } from "phosphor-react";

import '@vime/core/themes/default.css';

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data, loading } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug
    },
    fetchPolicy: 'no-cache'
  })

  // console.log(data.lesson.videoId);

  if (!data) {
    <div className="flex-1">
      <p>Loading...</p>
    </div>
  }


  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data?.lesson.videoId} key={data?.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data?.lesson.title}
            </h1>

            <p className="mt-4 text-gray-200 leading-relaxed">
              {data?.lesson.description}
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data?.lesson.teacher.avatarURL}
                alt="profile pic"
              />

              <div className="leading-relaxed">
                <strong className="text-2xl font-bold block">{data?.lesson.teacher.name}</strong>
                <span className="text-gray-200 text-sm block">{data?.lesson.teacher.bio}</span>
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
