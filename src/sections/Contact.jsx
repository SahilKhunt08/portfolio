export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white px-6 py-16 text-center"
    >
      <h2 className="text-3xl font-semibold mb-4">
        Thanks for checking out my work!
      </h2>
      <p className="text-gray-400 mb-6">
        If you're interested in working together or just want to say hi, feel
        free to reach out.
      </p>
      <div className="space-x-4">
        <a
          href="mailto:skhun@illinois.edu"
          className="text-blue-400 hover:underline"
        >
          skhun@illinois.edu
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/SahilKhunt08"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
