const Intro = () => {
  return (
    <section className="py-16 border-b border-b-border">
      <div className="container grid grid-cols-2">
        <div>
          <p className="text-5xl font-bold mb-3">Hi, I&apos;m Viet Nguyen</p>
          <p className="text-2xl text-text-secondary">
            a web developer and freelancer
          </p>
        </div>
        <div className="intro__right">
          <p>
            I&apos;m a developer based in Ha Noi, Viet Nam. I have started my
            Web development since 2017 and focused mostly on <b>WordPress</b>,{' '}
            <b>ReactJS</b> and other <b>Front-end</b> technologies.
          </p>
          <p>
            In my free time, I do freelancing to help other people build their
            own website.
          </p>
          <p>
            You can contact me by email at{' '}
            <strong>
              <a href="mailto:viet34tqc@gmail.com">viet34tqc@gmail.com</a>
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
