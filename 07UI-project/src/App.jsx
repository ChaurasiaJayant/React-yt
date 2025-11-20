import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Navbar from "./components/section1/navbar";

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661775190861-2dc4e2c223fa?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8MXwwfHx8MA%3D%3D",
      intro: "",
      tag: "Unsatisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661575259043-057e0b2cf41f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8MXwwfHx8MA%3D%3D",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8MXwwfHx8MA%3D%3D",
      intro: "",
      tag: "Underbanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1664476746877-ca6170eb1997?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8MXwwfHx8MA%3D%3D",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1681491886668-1ede91198973?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8MXwyfHx8MA%3D%3D",
      intro: "",
      tag: "Deserved",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
