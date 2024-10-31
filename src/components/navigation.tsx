export default function Nav() {
  return (
    <nav>
      <div class="nav-content">
        <a
          class="logo"
          href="https://brisa.build"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/fullLogo.svg" alt="Almarto Assistant logo" width="120" />
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Brisa</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
