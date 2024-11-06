import Image from "next/image";
import "../app/styles/components/community.css";
import Link from "next/link";
import useHighlightNewsletterInput from "../hooks/useHighlightNewsletterInput";

const Community = () => {
  
  useHighlightNewsletterInput();
  
  return (
    <section className="community">
      <div className="col1">
      <h2>Join Our Community</h2>
        <p></p>
        
        {/* 
        <h2>Join Our Community</h2>
        <p>Sign-Up now to create your own event and be part of a global event network.</p>
        <ul>
          <li>
            <Image src={`/images/icons/check-black.svg`} width={15} height={13} alt="Easy registration" />
            Easy registration
          </li>
          <li>
            <Image src={`/images/icons/check-black.svg`} width={15} height={13} alt="Global Access" />
            Global Access
          </li>
          <li>
            <Image src={`/images/icons/check-black.svg`} width={15} height={13} alt="User-Friendly Tools" />
            User-Friendly Tools
          </li>
        </ul>
        */}
        <Link href={"#newsletterFormSpaced"} id="communityGetStartedButton">Get Started</Link>
      </div>
      <div className="col2">
        <Image src={`/images/community.png`} width={687} height={511} alt="Join Our Community | In The Know YYC" />
      </div>
    </section>
  );
};

export default Community;