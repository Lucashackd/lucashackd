import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function About() {
  return (
    <div id="about" className="container m-auto p-4">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-6 lg:h-73 xl:h-69">
        <Card className="py-0 overflow-clip aspect-square">
          <CardContent className="px-0 w-fit h-fit">
            <Image
              src={"/images/profile.webp"}
              alt="Profile Picture"
              width={640}
              height={640}
              className="object-contain w-40 h-auto md:w-56 lg:w-auto lg:h-auto"
              sizes="(max-width: 640px) 16rem, (max-width: 768px) 18rem, (max-width: 1024px) 20rem, 24rem"
            />
          </CardContent>
        </Card>
        <Card className="flex-1 justify-center">
          <CardContent>
            <p className="text-white text-justify text-base xl:text-lg">
              Full stack developer with a strong academic foundation and
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
