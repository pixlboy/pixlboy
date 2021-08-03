import "./experience.scss";

export default function Experience() {
  return (
    <section className="section-experience-education content-box">
      <h2 className="section-header">
        <span className="heading">EXPERIENCE & EDUCATION</span>
      </h2>
      <div className="section-content clear-all">
        <ul className="org-list">
          <li className="org clear-all">
            <span className="org-img">
              <svg
                className="icon-s32 icon-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              </svg>
            </span>
            <div className="summary pull-left">
              <h6>
                AQR Capital Management
                <time className="datetime">Jan 2019 - Present</time>
              </h6>
              <div className="highlights">
                <ul>
                  <li className="active">Associate Engineer</li>
                </ul>
              </div>
              <div className="clear-all"></div>
              <div className="description">
                Member of JavaScript working group and UI team which are
                horizontally spread. Also work closely with portfolio
                implementation & analytics team for all their front-end
                requirements.
              </div>
            </div>
          </li>
          <li className="org clear-all">
            <span className="org-img">
              <svg
                className="icon-s32 icon-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              </svg>
            </span>
            <div className="summary pull-left">
              <h6>
                Juniper Networks, Bengaluru
                <time className="datetime">Nov 2015 - Dec 2018</time>
              </h6>
              <div className="highlights">
                <ul>
                  <li>Software Engineer 3</li>
                  <li>Software Engineer 2</li>
                </ul>
              </div>
              <div className="clear-all"></div>
              <div className="description">
                Worked as a full stack engineer with the big data team in
                creating a CRM tool from scratch. Tool was heavily used by
                technical engineers to solve customer cases.
              </div>
            </div>
          </li>
          <li className="org clear-all">
            <span className="org-img pull-left">
              <svg
                className="icon-s32 icon-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              </svg>
            </span>
            <div className="summary pull-left">
              <h6>
                Tavant Technologies, Bengaluru
                <time className="datetime">Jul 2011 - Oct 2015</time>
              </h6>
              <div className="highlights">
                <ul>
                  <li>Senior UI Engineer</li>
                  <li>UI Engineer</li>
                </ul>
              </div>
              <div className="clear-all"></div>
              <div className="description">
                As a member of UI team I worked as a front-end engineer across
                various domains and client applications.
              </div>
            </div>
          </li>
          <li className="org clear-all">
            <span className="org-img pull-left">
              <svg
                className="icon-s32 icon-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
              </svg>
            </span>
            <div className="summary pull-left">
              <h6>
                LPU, Jalandhar
                <time className="datetime">Aug 2007 - Jun 2011</time>
              </h6>
              <div className="highlights">
                <ul>
                  <li>Bachelor of Technology, Computer Science, CGPA 8.3</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="org clear-all">
            <span className="org-img pull-left">
              <svg
                className="icon-s32 icon-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" />
              </svg>
            </span>
            <div className="summary pull-left">
              <h6>
                Army Public School, Jalandhar
                <time className="datetime">Apr 1995 - Mar 2007</time>
              </h6>
              <div className="highlights">
                <ul>
                  <li>Grade 12 - 76%</li>
                  <li>Grade 10 - 85%</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div className="clear-all"></div>
      </div>
    </section>
  );
}
