import IMAGE from '../assets/images/avatar.jpg'

export default function Index() {
  const imageSource = IMAGE

  return (
    <>
      <p id="zero-state">
        This is a demo for React Router.
        <br />
        Check out{" "}
        <a href="https://reactrouter.com">
          the docs at reactrouter.com
        </a>
        .
      </p>
      <img
        src={imageSource}
      />
    </>
  );
}