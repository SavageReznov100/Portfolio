import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import arrow from "../public/ARROW.svg";
import passport from "../public/passport.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Bento = () => {
  return (
    <main className="pt-8">
      <div className="bento-container">
        <div className="grid grid-cols-subgrid grid-rows-subgrid gap-5 col-span-12 row-span-8 md:col-span-12 lg:col-span-8 md:row-span-8 lg:row-span-12">
          <HeaderBlock />
          <PhotoBlock />
          <AboutBlock />
          <ContactBlock />
        </div>

        <div className="grid grid-cols-subgrid grid-rows-subgrid gap-5 col-span-12 row-span-4 md:col-span-12 lg:col-span-4 md:row-span-6 lg:row-span-12">
          <ProjectsBlock />
          <SocialBlock />
        </div>
      </div>
    </main>
  );
};

type Props = {
  children?: ReactNode;
  className?: string;
};
const Block = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={twMerge(
        " col-span-4 rounded-[15px] bg-bentocard md:p-3 lg:p-6 ",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-3 md:col-span-8 lg:col-span-5 md:row-span-6 lg:row-span-7">
      <div className="flex items-end h-full">
        <h1 className="text-pretty  text-3xl md:text-5xl">
          Visionary Full Stack Developer Shaping the Future
        </h1>
      </div>
    </Block>
  );
};

const PhotoBlock = () => {
  return (
    <Block className=" col-span-12 row-span-3 md:col-span-4 lg:col-span-3 md:row-span-6 lg:row-span-7 md:p-0 lg:p-0">
      <Image alt="passport" src={passport} className="photo" />
    </Block>
  );
};

const ProjectsBlock = () => {
  return (
    <Block className="col-span-12 row-span-3 md:col-span-12  lg:col-span-4 md:row-span-3 lg:row-span-10 overflow-hidden">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Block>
  );
};

const AboutBlock = () => {
  return (
    <Block className="col-span-12 row-span-1 md:col-span-6 lg:col-span-4 md:row-span-2 lg:row-span-5">
      <p>AboutBlock</p>
    </Block>
  );
};

const ContactBlock = () => {
  return (
    <Block className="col-span-12 row-span-1 md:col-span-6 lg:col-span-4 md:row-span-2 lg:row-span-5">
      <div className="flex flex-col lg:justify-between h-full">
        <div className=" hidden lg:flex justify-between ">
          <p>
            Have some <br /> questions?
          </p>
          <Image src={arrow} alt="Arrow" width={38} height={38} />
        </div>
        <div>
          <h1 className="md:text-4xl lg:text-5xl">Contact me</h1>
        </div>
      </div>
    </Block>
  );
};
const SocialBlock = () => {
  return (
    <Block className="col-span-12 row-span-1 md:col-span-12 lg:col-span-4  md:row-span-1 lg:row-span-2">
      <div className="flex justify-around items-center uppercase h-full">
        <p>instagram</p>
        <p>twitter</p>
        <p>LinkedIn</p>
      </div>
    </Block>
  );
};

export default Bento;
