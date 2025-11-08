import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function About() {
  return (
    <div id="about" className="container m-auto p-4">
      <h2 className="text-gradient">About Me</h2>
      <div className="flex flex-col items-center justify-between gap-6 lg:h-73 lg:flex-row lg:items-stretch xl:h-69">
        <Card className="aspect-square overflow-clip py-0">
          <CardContent className="h-fit w-fit px-0">
            <Image
              src={"/images/profile.webp"}
              alt="Profile Picture"
              width={640}
              height={640}
              className="h-auto w-40 object-contain md:w-56 lg:h-auto lg:w-auto"
              sizes="(max-width: 640px) 16rem, (max-width: 768px) 18rem, (max-width: 1024px) 20rem, 24rem"
            />
          </CardContent>
        </Card>
        <Card className="flex-1 justify-center">
          <CardContent>
            <p className="text-justify text-base text-white text-shadow-[2px_2px_0.5px_rgba(0,0,0,0.5)] xl:text-lg">
              Full Stack developer with a strong academic foundation and
              hands-on experience in web and mobile technologies. Passionate
              about building complete and scalable solutions, from UI to
              server-side logic, always combining clean code with user-centered
              design. Graduated in Systems for Internet at the Federal Institute
              of Science, Technology and Education, with practical experience in
              HTML, CSS, JavaScript, React, Node.js, Laravel, and more. Skilled
              in working with both relational and NoSQL databases (MySQL,
              PostgreSQL, MongoDB, Firebase). Previous roles include IT intern
              at Companhia de Informática de Pelotas and Front-End development
              teaching assistant at IFSul. Also experienced in DevOps practices,
              agile methodologies, cloud services (AWS, Cloud Storage), and
              prototyping tools like Figma and QuantUX.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default About;
