import "./cover.scss";

export default function Cover() {
  return (
    <section className="cover-letter content-box">
      <h2 className="section-header">
        <span>Dear hiring manager,</span>
      </h2>
      <div className="section-content clear-all">
        <p>
          I am a passionate engineer with 10 years of experience in writing
          performant and organised code. My areas of expertise are JavaScript,
          TypeScript, Angular, React and Node JS and related frameworks.
        </p>
        <p>
          Currently, I am an Associate in AQR Capital Management working
          remotely from Bangalore, India. I am responsible for handling frontend
          architecture of portfolio implementation & analytics team. I am also a
          member of JavaScript working group and UI team which are horizontally
          spread.
        </p>
        <p>
          I believe that the skills and experiences I have gained make me an
          ideal candidate for the job of -
        </p>
        <p></p>
        <ol>
          <li>Full Stack Engineer</li>
          <li>Frontend Engineer</li>
          <li>JavaScript Developer</li>
        </ol>
        <p>
          I am holding a permanent resident visa of Australia (subclass 189). I
          am actively seeking opportunities in Melbourne and can make myself
          available in 6-8 weeks.
        </p>
        <p>
          Thank you for considering my application. I look forward to hearing
          from you.
        </p>
        <p>Sincerely,</p>
        <address>Rachit Garg</address>
        <div className="v-spacer"></div>
        <div className="signature-image"></div>
      </div>
    </section>
  );
}
