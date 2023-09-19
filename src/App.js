import styles from './App.module.scss';
import childplaying2 from './images/childplayingwithsitter2.svg';
import childrenplaying1 from './images/childrenplayingwithsitter.svg';
import logo from './images/otter_logo.png';

export default function App() {
  return (
    <body className="heroSection">
      <main>
        <section>
          <nav>
            <ul>
              <li>
                <a href="https://withotter.com/parents">Parents</a>
              </li>
              <li>
                <a href="https://withotter.com/sitters">Sitters</a>
              </li>
              <li>
                <a href="https://withotter.com/trust-safety">Trust & Safety</a>
              </li>
              <li>
                <a href="https://withotter.com/blog">Blog</a>
              </li>
            </ul>

            <div>
              <a href="https://withotter.com/">
                <img src={logo} alt="Otter Logo" />
              </a>
            </div>

            <div>
              <a href="https://app.withotter.com/log-in?device-id=YKWeCmS4b2R5MLCOtW1LF_">
                Log in
              </a>
              <button
                className={styles.navsignupbtn}
                onClick="https://app.withotter.com/sign-up/welcome?device-id=YKWeCmS4b2R5MLCOtW1LF_"
              >
                Sign up
              </button>
            </div>
          </nav>
          <div className={styles.imgBackground}>
            <h1>Reliable kidcare on demand</h1>
            <p>
              Otter matches parents who need care with trusted sitters in their
              community, on-demand.
            </p>
            <button className={styles.h1signupbtn}>Sign up</button>
          </div>
        </section>
        <section className={styles.introplaydates}>
          <img
            className={styles.childrenplaying1}
            src={childrenplaying1}
            alt="children playing with sitter"
          />
          <div>NOW IN BETA</div>
          <h2>Introducing Playdates</h2>
          <p>
            Relax and leave the childcare to us. Schedule a playdate with a
            friend and up to three children at no extra cost.
          </p>
          <button
            className={styles.bookaplaydatebtn}
            onClick="https://app.withotter.com/log-in"
          >
            Book a Playdate
          </button>
        </section>
        <section className={styles.howitworks}>
          <div>HOW IT WORKS</div>
          <h2>We help families find reliable, flexible kidcare</h2>
          <img src={childplaying2} alt="child playing with sitter" />
        </section>

        <section className={styles.boxes}>
          <div className={styles.boxOne}>
            <div>1</div>
            <h3>Get started</h3>
            <p>
              We like to keep it simple. Tell us your name, contact information,
              and a little bit about you and your kids. Just like that, you're
              all set.
            </p>
          </div>

          <div className={styles.boxTwo}>
            <div>2</div>
            <h3>Book a sitter</h3>
            <p>
              Let us know when you need care and we'll match you with a sitter
              based on your family's needs and their availability.
            </p>
          </div>

          <div className={styles.boxThree}>
            <div>3</div>
            <h3>Get care and pay</h3>
            <p>
              Let us know when you need care and we'll match you with a sitter
              based on your family's needs and their availability.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <ul className={styles.footerColumnOne}>
          <li>
            <a href="https://withotter.com/parents">Parents</a>
          </li>
          <li>
            <a href="https://withotter.com/sitters">Sitters</a>
          </li>
          <li>
            <a href="https://withotter.com/trust-safety">Trust & Safety</a>
          </li>
        </ul>
        <ul className={styles.footerColumnTwo}>
          <li>
            <a href="https://withotter.com/faq">FAQ</a>
          </li>
          <li>
            <a href="https://withotter.com/careers">Careers</a>
          </li>
          <li>
            <a href="https://withotter.com/blog">Blog</a>
          </li>
          <li>
            <a href="https://withotter.com/contact">Contact</a>
          </li>
        </ul>
        <ul className={styles.footerColumnThree}>
          <li>
            <a href="https://www.instagram.com/otterchildcare/">Instagram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/withotter/">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/WithOtter">Twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/withotter/">Linkedin</a>
          </li>
        </ul>
        Go to home page
        <ul className={styles.termsAndPolicy}>
          <li>
            <a href="https://withotter.com/terms-of-use"> Terms of Use</a>
          </li>
          <li>
            <div>●</div>
          </li>
          <li>
            <a href="https://withotter.com/privacy-policy">Privacy Policy</a>
          </li>
          <li>© 2023 With Otter Inc.</li>
        </ul>
      </footer>
    </body>
  );
}
