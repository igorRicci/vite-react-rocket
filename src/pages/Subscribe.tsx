import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber ($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`

export function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber] = useMutation(CREATE_SUBSCRIBER_MUTATION)

  function handleSubscribe(event: FormEvent) {
     event.preventDefault();

    console.log(name, email)

     createSubscriber({
      variables: {
        name,
        email,
      }
     })
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">

      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">

        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Build an <strong className="text-blue-500">entire application</strong> from scratch using <strong className="text-blue-500">React</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            In 3 days you'll be able to gather practical skills using one of the most famous technologies in the market. For free.
          </p>
        </div>

        <div>
          <div className="p-8 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block">Free subscription</strong>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="text"
                placeholder="Full name"
                onChange={event => setName(event.target.value)}
              />
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="email"
                placeholder="Email"
                onChange={event => setEmail(event.target.value)}
                />

              <button
                type="submit"
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" className="mt-10" alt="coding" />
    </div>
  )
}
