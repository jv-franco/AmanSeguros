export function Button({ props }) {
  return (
    <a className="sm:w-auto w-full flex items-center justify-center" href="/">
      <button data-aos="fade-left" className="btn uppercase ">
        {props}
      </button>
    </a>
  );
}
