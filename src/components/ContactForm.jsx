// https://help.formspree.io/hc/en-us/articles/360055613373-The-Formspree-React-library
import { useForm, ValidationError } from "@formspree/react";

export default () => {
  const [state, handleSubmit] = useForm("xwkjlpbv");
  if (state.succeeded) {
    return <p>Thanks for your message. I'll respond to you soon!</p>;
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="mt-12 p-6 py-5 px-4 w-full rounded-lg border sm:px-6 border-zinc-900"
      >
        <h5 className="flex flex-row items-center text-sm font-semibold text-white text-opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
            />
          </svg>

          <span className="ml-1 text-lg">Contact Jared</span>
        </h5>
        <p className="mt-2 text-sm text-white text-opacity-50">
          What's up? Want to talk mini painting? Wanna' play some chess?
          Question about the Jam Stack? Just send me an email and I'll get back
          to you as soon as I can.
        </p>
        <div className="flex flex-col gap-4 mt-6">
          <input
            type="email"
            placeholder="Your email"
            aria-label="Your email"
            required
            id="email"
            name="email"
            className="flex-auto px-3 min-w-0 h-12 rounded-md border-2 sm:text-sm focus:ring-2 focus:outline-none border-synth-purple bg-synth-purple bg-opacity-20 text-white/80 placeholder:text-synth-white/50 focus:border-synth-orange focus:ring-synth-yellow"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            required
            rows="4"
            placeholder="Your message ..."
            name="message"
            aria-label="message"
            className="p-3 min-w-0 rounded-md border-2 sm:text-sm focus:ring-2 focus:outline-none border-synth-purple bg-synth-purple bg-opacity-20 text-white/80 placeholder:text-synth-white/50 focus:border-synth-orange focus:ring-synth-yellow"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className="flex-none py-2 px-3 text-sm font-semibold rounded-md transition outline-offset-2 text-white/80 bg-synth-purple/50 hover:bg-synth-green/80 active:bg-synth-green/70 hover:text-synth-black active:text-synth-black/70"
            type="submit"
            disabled={state.submitting}
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};
