import { Link } from "react-router-dom";

function About() {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio velit,
      consequat at fringilla ac, placerat facilisis lectus. Nam in dui nec neque
      congue eleifend id at nulla. Integer pellentesque mi libero. Vivamus a est
      vitae ante aliquet porta et ac lectus. Mauris bibendum rhoncus nunc ac
      ultricies. Vivamus bibendum dolor et maximus hendrerit. Morbi ac dignissim
      lorem. Ut venenatis porta elit in pellentesque.
      <br />
      Sed sit amet lacus quis massa congue ultricies. Fusce ultrices gravida
      felis et ullamcorper. Proin eget maximus elit, vitae rhoncus nunc. Aliquam
      erat volutpat. Nam fringilla suscipit ex, a viverra eros ullamcorper non.
      Ut lacus leo, feugiat suscipit felis eget, consequat finibus lorem. Nunc
      dapibus nisl vel neque imperdiet euismod.
      <br />
      Written by <Link to="/users/bob">Bob Martin</Link>
    </p>
  );
}

export default About;
